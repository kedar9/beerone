const express = require('express');
const fetch = require('isomorphic-unfetch');

// const app = express();
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

const baseUrl = 'https://api.brewerydb.com/v2';
const apiKey = 'key=ea2b62597b2a7489427894a88c9fca06';
const sortBy = 'order=updateDate&sort=DESC';

const mockData = require('./src/static/mock.js');
// const data = require('./data.js');

const server = express();
server.use(express.json());

const mapBeerData = (beerObj) => {
  const { srm, labels, style } = beerObj;

  return {
    name: beerObj.nameDisplay || beerObj.name || '',
    description: beerObj.description,
    abv: beerObj.abv,
    ibu: beeObj.ibu,
    srm: srm && {
      id: srm.id,
      hex: srm.hex
    }
    label: labels && labels.contentAwareMedium,
    availableId: beerObj.availableId,
    isOrganic: beerObj.isOrganic,
    style: style && {
      id: style.id,
      name: style.name || style.shortName || '',
      description: style.description
    },
    isRetired: beerObj.isRetired
  }
}

server.get('/search', async (req, res) => {
  const { q } = req.query;
  if (q) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const responseObj = await response.json();
      res.send(mockData.SEARCH_RESULTS);
    } catch (e) {
      res.status(500).send('500: Internal Server Error');
    }
  }
  res.send(mockData.SEARCH_RESULTS);
  // res.status(404).send('404: Page not Found');
})

/* Method to get related beers.
  Sample API formats:
  http://api.brewerydb.com/v2/beers?abv=4,6&key=***
  http://api.brewerydb.com/v2/beers?srmId=7&key=***
  http://api.brewerydb.com/v2/beers?ibu=35,45&key=***
*/
server.get('/more/:key/:values', async (req, res) => {
  const { key, values } = req.params;
  if (key && values) {
    try {
      console.log('\n\n calling: ', `${baseUrl}/beers/?${key}=${values}&${apiKey}&${sortBy}`);
      const response = await fetch(`${baseUrl}/beers/?${key}=${values}&${apiKey}&${sortBy}`);
      const responseObj = await response.json();
      res.send(responseObj);
    } catch (e) {
      res.status(500).send('500: Internal Server Error');
    }
  }
  res.status(404).send('404: Page not Found');
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on http://localhost:${port}`);
});
