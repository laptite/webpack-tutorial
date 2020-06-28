const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Some dynamic content')
});

app.listen(3000, function() {
  console.log('App is running on http://localhost:3000/');
});