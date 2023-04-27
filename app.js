require('dotenv').config();
const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const index = require('./routes/index.js');

const app = express();

//setup express
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname + 'public/css')));

//setup templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

//refactored index page
app.use('/', index);

//404 handler, leave as last route
app.use((req, res, next) => {
  res.status(404);
  res.render('404', {title: '404: Page not found'});
});

//start server, check that .env is working
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
