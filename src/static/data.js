// Saved beer data for homepage.
// Data based on following categories:
// Summer Beers
// Winter Beers
// Organic Beers (isOrganic: Y)
// Casual: Low ABV: (abv=1,4)
// New Beers: (Year: 2017 onwards)

const HIGHLIGHTS = {
  summer: [
    {
    name: 'Summer Shandy',
    description: 'Leinenkugel’s® Summer Shandy® is our traditional weiss beer with refreshing natural lemonade flavor that makes it the perfect summer beer.\nPairs with: BBQ chicken, fruit salads, watermelon and freshly caught, grilled fish.',
    highlightDesc: 'Weiss Beer. Natural Lemonade Flavor.',
    abv: '4.2',
    ibu: '11',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/9gnyLQ2/summer-shandy.jpg',
    srm: {
      id: 6,
      hex: 'F8A600'
    },
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
    {
    name: 'Samuel Adams Summer Ale',
    description: 'This American wheat ale is synonymous with summer. Our blend of orange, lemon & lime peels enhances the spicy, citrusy Hallertau Mittelfrüh Noble hops. Grains of paradise accent the crisp wheat character  with a subtle spice that finishes  clean. Iconic as it is refreshing, Summer Ale is just right for any summer day.',
    highlightDesc: 'Citrusy Blend of Orange, Lemon and Lime peels.',
    abv: '5.3',
    ibu: '7',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/yVYqVQT/samuel-adams-summer-ale.jpg',
    srm: {
      id: 6,
      hex: 'F8A600'
    },
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
    {
    name: 'United in Orange',
    nameDisplay: 'United in Orange',
    description: 'United in Orange Pale Ale is brewed with orange juice and orange peel making it a Mile High favorite. A pale ale at its core, United in Orange is moderately hopped to provide balance to the sweetness derived from pale malt and orange juice. Mandarin hops impart subtle aromas of tangerine and citrus which complements the orange flavors.',
    highlightDesc: 'Pale Ale brewed with Orange Juice and Orange Peel.',
    abv: '5.3',
    ibu: '30',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/KzZWcyG/united-in-orange.png',
    srm: {
      id: 6,
      hex: 'F8A600'
    },
    style: {
      id: 25,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \'traditional\' style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.'
      }
    },
  ],
  winter: [
    {
    id: 'gVuwQ6',
    name: 'Shameless McDale',
    description: 'In the spirit of early spring, we have made this a "green" Irish Red. Not green in the same sense as FD&C Green No. 3 food coloring, but green as in using 100% Certified Organic Barley. The result is a slightly roasted malt flavor and light hoppy bitterness that pairs well with some corned beef and cabbage or even a humble hamburger. Chase that leprechaun down and steal this pint of gold!',
    highlightDesc: 'Irish-Style Red Ale.',
    abv: '4.8',
    ibu: 22,
    srm: {
      id: 10,
      hex: 'DE7C00'
    },
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/Srd6vJh/shameless-mcdale.jpg',
    available: {
      id: 8,
      name: 'Winter',
    },
    style: {
      id: 22,
      name: 'Irish-Style Red Ale',
      description: 'Irish-style red ales range from light red-amber-copper to light brown in color. These ales have a medium hop bitterness and flavor. They often don\'t have hop aroma. Irish-style red ales have low to medium candy-like caramel malt sweetness and may have a balanced subtle degree of roast barley or roast malt character and complexity.  Irish-style Red Ales have a medium body. The style may have low levels of fruity-ester flavor and aroma. Diacetyl should be absent or at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.'
      }
    },
    {
    id: 'MqTIG4',
    name: '72 Imperial',
    description: 'Just sit back and enjoy the ride.\r\n\r\nBrewed with chocolate from Colorado\'s very own Rocky Mountain Chocolate Factory, Inc., this Imperial Chocolate Cream Stout is full of rich, toasted chocolate notes with hints of dark fruit. 72 Imperial will take you where you need to go. Just sit back and enjoy the ride.',
    highlightDesc: 'Specialty Stout Beer.',
    abv: '7.2',
    ibu: '11',
    srm: {
      id: 40,
      hex: '36080A'
    },
    available: {
      id: 8,
      name: 'Winter',
    },
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/G5McznB/72-imperial.png',
    style: {
      id: 44,
      name: 'Specialty Stouts',
      shortName: 'Stout',
      description: 'See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.'
      }
    },
    {
    name: 'Oatmeal Stout',
    description: 'Embrace the season with Mayflower Oatmeal Stout. Brewed with three types of oats and several varieties of dark barley malts, this beer adds a little sweetness to the roasted flavor of traditional stouts. The result is a rich and smooth brew that will help sustain you through the short days and long nights of winter.',
    highlightDesc: 'American-Style Imperial Dark Beer.',
    abv: '5.4',
    ibu: '28',
    srm: {
      id: 41,
      hex: '000000'
    },
    available: {
      id: 8,
      name: 'Winter',
    },
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/VY8GZ0G/oatmeal-stout.jpg',
    style: {
      id: 43,
      name: 'American-Style Imperial Stout',
      description: 'Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.',
      }
    }
  ],
  organic: [
    {
    name: 'Estate Ale',
    description: 'Here in the sun-drenched fields of California\'s North Valley, the black soil is rich with promise.\r\nIn winter, rows of barley seed are laid in the freshly tilled dirt. In spring, trellises are set for hops.\r\n\r\nFrom our fields comes a remarkable homegrown ale, made with organic wet hops and barley grown at our brewery here in Chico and one of the few estate-made ales produced anywhere in the world!\r\n\r\nThis Estate Ale is rich with the flavors of the valley—featuring hops with earthy, grapefruit-like flavors and layered spicy aromas and barley with mild sweetness and smooth, toasted flavors. Together, these crops grow alongside the brewery to make a truly unique brew.',
    highlightDesc: 'Earthy Grapefruit-like flavor.',
    abv: '6.7',
    ibu: '67',
    availableId: 2,
    isOrganic: 'Y',
    isRetired: 'Y',
    label: 'https://i.ibb.co/nDbpB73/harvest-ale.jpg',
    srm: {
      id: 7,
      hex: 'F39C00'
    },
    style: {
      id: 125,
      name: 'Specialty Beer',
      description: 'These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.',
      }
    },
    {
    name: 'Green Valley Wild Hop Lager',
    description: 'Wild Hop Lager is unique and distinctive. It is made one batch at a time. It does not use any genetically modified products, pesticides or commercial fertilizers. Wild Hop Lager is made from 100% organic barley malt, certified by the USDA and the organic organization Oregon tilth.',
    highlightDesc: 'Made from 100% organic barley malt.',
    abv: '5',
    ibu: '25',
    availableId: 1,
    isOrganic: 'Y',
    isRetired: 'N',
    label: 'https://i.ibb.co/jbfcBNL/wild-hop.jpg',
    srm: {
      id: 5,
      hex: 'FBB123'
    },
    style: {
      id: 97,
      name: 'American-Style Premium Lager',
      description: 'This style has low malt (and adjunct) sweetness, is medium bodied, and should contain no or a low percentage (less than 25%) of adjuncts. Color may be light straw to golden. Alcohol content and bitterness may also be greater. Hop aroma and flavor is low or negligible. Light fruity esters are acceptable. Chill haze and diacetyl should be absent. Note: Some beers marketed as \'premium\' (based on price) may not fit this definition.',
      }
    },
    {
    name: 'CitruSinensis',
    description: 'We took some fresh Sanguinello Blood oranges, juiced \'em, concentrated that juice (without heat) and threw it into a wheatier version of our New Dogtown Pale Ale. The end result? A refreshingly hopped pale-ish ale with a huge citrus burst!',
    highlightDesc: 'Organic Citrus Burst!',
    abv: '7.9',
    ibu: '49',
    isOrganic: 'Y',
    isRetired: 'N',
    label: 'https://i.ibb.co/zSKFFgq/citrusinensis.jpg',
    srm: {
      id: 9,
      hex: 'E58500'
    },
    style: {
      id: 112,
      name: 'American-Style Pale Ale',
      description: 'American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.',
      }
    }
  ],
  casual: [
    {
    name: 'Kaliber',
    description: 'Pours a clear golden amber. Aromas of sweet grains, honey, caramel malts and toasted bread. A predominantly sweet taste with a caramel and grain backbone and hints of corn and cooked vegetables. Finishes with a slight bitterness.',
    abv: '0.5',
    highlightDesc: 'Alcohol Content',
    highlightNum: '0.5%',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/GvnhSdx/kaliber.jpg',
    available: {
      id: 1,
      name: 'Year Round',
      description: 'Available year round as a staple beer.'
      },
    style: {
      id: 139,
      name: 'Non-Alcoholic (Beer) Malt Beverages',
      description: 'Non-alcoholic (NA) malt beverages should emulate the character of a previously listed category/subcategory designation but without the alcohol (less than 0.5 percent). Non-alcoholic (beer) malt beverages will inherently have a profile lacking the complexity and balance of flavors which can be attributed to alcohol. They should accordingly not be assessed negatively for reasons related to the absence of alcohol.',
      }
    },
    {
    id: 'yagN3u',
    name: 'Miller64',
    description: 'Miller64 was introduced as the perfect choice for consumers striving to maintain a sense of healthy balance in their busy lifestyles. Combining a fresh, crisp flavor with only 64 calories and 2.4 carbohydrates, Miller64 is a guiltless pleasure for moments of relaxation.',
    abv: '2.8',
    ibu: '7',
    highlightDesc: 'Alcohol Content',
    highlightNum: '2.8%',
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/gmGvPZs/miller64.png',
    available: {
      id: 1,
      name: 'Year Round',
      description: 'Available year round as a staple beer.'
      },
    style: {
      id: 94,
      name: 'American-Style Light (Low Calorie) Lager',
      description: 'These beers are extremely light colored, light in body, and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn, rice, or other grain or sugar adjuncts are often used. Flavor is mild and hop bitterness and aroma is negligible to very low. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.',
      }
    },
    {
    id: 'Dvucvo',
    name: 'Bud Light Blends Lemon',
    description: 'Introducing Bud Light Blends Lemon: A unique twist on America’s favorite light lager. It’s brewed on real lemon peels and then aged on real tea leaves for a refreshing lemon tea taste in every sip.',
    abv: '3.5',
    highlightDesc: 'Alcohol Content',
    highlightNum: '3.5%',
    srm: {
      id: 6,
      hex: 'F8A600'
    },
    isOrganic: 'N',
    isRetired: 'N',
    label: 'https://i.ibb.co/FKXM5YW/bud-light-blends.png',
    style: {
      id: 119,
      name: 'Fruit Beer',
      description: 'Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.',
      }
    }
  ],
  new: [
    {
    id: 'sAQpBR',
    name: 'Hoptimum',
    description: 'A whole-cone hurricane of flavor. Our brewers selected the finest, most flavorful hops, pushed them beyond their limits and forged them into this all-new triple IPA. This reimagined Hoptimum is our hoppiest beer yet, providing a blend of tropical and citrus hop aroma that delivers a refined yet aggressive character.',
    abv: '9.6',
    ibu: '68',
    isOrganic: 'N',
    isRetired: 'N',
    year: 2018,
    highlightDesc: 'Aggressively Tasty.',
    highlightNum: 'Estd. 2018',
    label: 'https://i.ibb.co/S7XMjxN/beer-11810-7ddcc-hd.jpg',
    style: {
      id: 31,
      name: 'Imperial or Double India Pale Ale',
      description: 'Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it\'s balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.',
      }
    },
    {
    id: 'z8iAm9',
    name: 'Beer Camp: East Meets West IPA',
    nameDisplay: 'Beer Camp: East Meets West IPA',
    description: 'An IPA, of course. We\'re blending our two approaches to the IPA in this East Meets West IPA. Sierra Nevada\'s malt body and profile was blended with the heavy-handed, very late hopping schedule employed by Tree House to create a new, hybrid IPA. Lightly bitter and heavy with citrus-like hop flavor.',
    abv: '7',
    ibu: '40',
    availableId: 2,
    styleId: 30,
    isOrganic: 'N',
    isRetired: 'N',
    year: 2017,
    highlightDesc: 'East Meets West. Hybrid IPA.',
    highlightNum: 'Estd. 2017',
    label: 'https://i.ibb.co/jG4YskY/east-meets-west.jpg',
    available: {
      id: 2,
      name: 'Limited',
      description: 'Limited availability.'
      },
    style: {
      id: 30,
      name: 'American-Style India Pale Ale',
      description: 'American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale',
      }
    },
    {
    id: 'x7GusT',
    name: 'Barleywine',
    nameDisplay: 'Barleywine',
    description: 'Despite its name, a Barleywine (or Barley Wine) is very much a beer, albeit a strong and often intense beer. In fact, it\'s one of the strongest styles. Lively and fruity, sometimes sweet, sometimes bittersweet, but always alcoholic. A brew of this strength and complexity can be a challenge to the palate. Expect anything from an amber to a dark brown color, with aromas ranging from rich fruits to bold hops. The body is typically thick, alcohol will definitely be perceived, and flavors range from dominant dark fruits to palate smacking, resiny hops. English varieties are quite different from American efforts, which are often heavily hopped with high alpha oil American hops to create a more bitter brew. English versions tend to be more rounded and balanced with a slightly lower alcohol content, though this is not always the case. Most Barleywines can be cellared for years and will age much like wine.',
    isOrganic: 'N',
    isRetired: 'N',
    year: 2016,
    highlightDesc: 'Bold Aroma. Strong Beer.',
    highlightNum: 'Estd. 2016',
    label: 'https://i.ibb.co/92MgL2h/barleywine.png',
    available: {
      id: 2,
      name: 'Limited',
      description: 'Limited availability.'
      },
    style: {
      id: 34,
      name: 'American-Style Barley Wine Ale',
      description: 'American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.',
      }
    }
  ]
}

module.exports = {
  HIGHLIGHTS
};
