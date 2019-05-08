const express = require('express');
const path = require('path');
const fetch = require('isomorphic-unfetch');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const baseUrl = 'https://api.brewerydb.com/v2';
const apiKey = 'key=ea2b62597b2a7489427894a88c9fca06';
const sortBy = 'order=updateDate&sort=DESC';

const mockData = require('./mock.js');

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.use(express.static(DIST_DIR));
app.use(express.json());

// Handle 404 and 500
app.use((err, req, res, next) => {
  res.status(404).send('404: Page not Found');
  res.status(500).send('500: Internal Server Error');
});

app.get('/search', async (req, res) => {
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
});

/* Method to get related beers.
  Sample API formats:
  http://api.brewerydb.com/v2/beers?abv=4,6&key=***
  http://api.brewerydb.com/v2/beers?srmId=7&key=***
  http://api.brewerydb.com/v2/beers?ibu=35,45&key=***
*/
app.get('/more/:key/:values', async (req, res) => {
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

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
