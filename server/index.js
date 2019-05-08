const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

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

app.get('/api', (req, res) => {
  res.send({
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  });
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
