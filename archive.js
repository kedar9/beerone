// PHP
<?php
	header('Access-Control-Allow-Origin: *');
	/* GET Params */
	if (isset($_GET['context']) && isset($_GET['endpoint'])) {
		$context = $_GET['context'];
		$endpoint= $_GET['endpoint'];
	} else {
		header('X-PHP-Response-Code: 404', true, 404);
	}

	/* API data for Brewery DB */
	if ($context == 'beer' && isset($_GET['q'])) {
		$brewery_base = 'https://api.brewerydb.com/v2/';
		$brewery_key = 'key=ea2b62597b2a7489427894a88c9fca06';

		if ($endpoint == 'search') {
			$q = 'q=' . urlencode($_GET['q']);
			$url = $brewery_base . 'search?type=beer&' . $q . '&' . $brewery_key;
		} elseif ($endpoint == 'info') {
			$beer_id = $_GET['q'];
			$url = $brewery_base . 'beer/' . $beer_id . '/?' . $brewery_key;
			$url = 'budweiser';
		} elseif (in_array($endpoint, ['styleId', 'abv', 'ibu', 'srmId'])) {
			$q = $endpoint . '=' . $_GET['q'];
			$url = $brewery_base . 'beers/?order=updateDate&sort=DESC&' . $q . '&' . $brewery_key;
		} else {
			header('X-PHP-Response-Code: 204', true, 204);
		}

	} else {
		header('X-PHP-Response-Code: 204', true, 204);
	}

	/* Get and return data */
	if (isset($url)) {
		$json = file_get_contents($url);
		header('content-type: text/json');
		print_r($json);
	} else {
		header('X-PHP-Response-Code: 404', true, 404);
	}
?>

// JS
(function () {
    'use strict';

    var angular = window.angular || (window.angular = {}),
    apiSource = 'http://kedar9.com/api/data.php/?context=beer',
    isMobile = jQuery.browser.mobile,
    beerQ = $('#beerQ'),
    indexVideo, beerApp;

    // If not mobile, add source to background video
    if (!isMobile) {
        indexVideo = $('<video />', {
            src: 'https://www.dropbox.com/s/ofbtv7dk9fj16z7/cover.mp4?raw=1',
            autoplay: true,
            type: 'video/mp4',
            controls: false,
            class: 'indexMedia'
        });
        indexVideo.appendTo($('.video-wrapper'));
    }

    beerApp = angular.module('beerApp', []);

    // Angular factory to get $http data
    beerApp.factory('dataFactory', ['$http', function ($http) {
        return {
            get: function (url) {
                return $http.get(url)
                .then(function (response) {
                    return response.data.data;
                }
            );
        }
    };
}]);

beerApp.controller('beerCtrl', ['$scope', 'dataFactory', function ($scope, dataFactory) {
    var indexBeerSource = '/beer/?id=1P45iR';

    $scope.beer = {};
    $scope.initializing = true;

    // Get data for Budweiser on start
    dataFactory.get(indexBeerSource).then(function (data) {
        // Set beer data on scope
        $scope.initializing = false;
        $scope.beer = data;

        if (data.labels) {
            $('#beer-dp').attr('src', data.labels.medium);
        }
        $('.inner-container').removeClass('hide');
    });

    // Function to return beer availability info
    $scope.checkAvailability = function (availableId) {
        var glyphs;

        glyphs = {
            1: 'glyphicon-thumbs-up',
            2: 'glyphicon-gift',
            3: 'glyphicon-ban-circle',
            4: 'glyphicon-grain',
            5: 'glyphicon-tree-deciduous',
            6: 'glyphicon-certificate',
            7: 'glyphicon-leaf',
            8: 'glyphicon-tree-conifer'
        };

        if (glyphs[availableId] === undefined) {
            return 'glyphicon-minus';
        }

        return glyphs[availableId];
    };

    // Function to return beer availability info
    $scope.checkIsOrganic = function (isOrganic) {
        var glyphs;

        glyphs = {
            'Y': 'glyphicon-heart-empty',
            'N': 'glyphicon-thumbs-down'
        };

        if (glyphs[isOrganic] === undefined) {
            return 'glyphicon-minus';
        }

        return glyphs[isOrganic];
    };

    // Function to search more beers
    $scope.getMoreBeers = function (endpoint) {
        var getBeersTitle, getBeersSource, abvRange;

        if (endpoint === 'style') {
            getBeersTitle = 'Beers like ' + $scope.beer.nameDisplay;
            getBeersSource = '/beers/?endpoint=styleId&q=' + $scope.beer.style.id;
        } else if (endpoint === 'abv') {
            // Need to specify an abvRange because API doesn't return data for specific values for ABV
            // Adding 0.11 because JS doesn't respect the decimal places when adding 0.1
            abvRange = [parseFloat($scope.beer.abv) - 0.1, parseFloat($scope.beer.abv) + 0.11];
            getBeersTitle = 'Beers with ABV ≈ ' + $scope.beer.abv + '%';
            getBeersSource = '/beers/?endpoint=abv&q=' + abvRange.join(',');
        } else if (endpoint === 'ibu') {
            // Need to round up IBU beacuse API doesn't return data for an IBU with decimals
            getBeersTitle = 'Beers as bitter as ' + $scope.beer.nameDisplay;
            getBeersSource = '/beers/?endpoint=ibu&q=' + Math.round(parseInt($scope.beer.ibu));
        } else if (endpoint === 'color') {
            getBeersTitle = 'Beers with color same as ' + $scope.beer.nameDisplay + '\'s';
            getBeersSource = '/beers/?endpoint=srmId&q=' + $scope.beer.srm.id;
        } else {
            return;
        }

        // Set isBrewing (Modal loading) to true
        $scope.isBrewing = true;
        $scope.getBeersTitle = getBeersTitle;

        dataFactory.get(getBeersSource).then(function (data) {
            // Display search results
            $scope.moreBeers = data;
            $scope.isBrewing = false;
        });
    };

    $scope.updateBeerInfo = function (thisBeer) {
        $('#moreBeers').modal('toggle');
        $scope.beer = thisBeer;
        if (isMobile) {
            // Scroll to #beerInfo on mobiles
            window.scrollTo(0, 170);
        }
    };
}]);

// Show loading gif when user starts typing in the search bar
beerQ.keypress(function () {
    beerQ.addClass('loading-input');
});

// Typeahead + Bloodhound
var suggestions = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: '/search/?q=%QUERY',
        filter: function (response) {
            if (response.data === undefined) {
                beerQ.removeClass('loading-input');
                $('#noSearchResults').show();
                return;
            }
            // Map the remote source JSON array to a JavaScript object array
            return $.map(response.data, function (beer) {
                $('#noSearchResults').hide();
                beerQ.removeClass('loading-input');
                return {
                    beer: beer,
                    name: beer.name
                };
            });
        },
        wildcard: '%QUERY'
    }
});

$('.typeahead').typeahead(null, {
    name: 'beer-search',
    display: 'name',
    minLength: 3,
    limit: 50,
    source: suggestions
}).on('typeahead:selected', function(event, selection) {
    var scope = angular.element($("#beerQ")).scope();

    scope.$apply(function () {
        var thisBeer = selection.beer;

        scope.beer = thisBeer;
    });
});

// GA code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-22619210-9', 'auto');
ga('send', 'pageview');

console.log("Hey there...");
console.log("Thanks for visiting. This Single Page App is powered by Bootstrap, AngularJS and the BreweryDB API.");
}());
