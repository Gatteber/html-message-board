const express = require('express');
const router = express.Router();
const moment = require('moment');

//sample message
const messages = [
  {
    text: 'Hello there!',
    user: 'Obi-Wan',
    added: moment(new Date()).format('MM-D-YYYY, h:mm:ss a'),
  },
  {
    text: 'General Kenobi.',
    user: 'Grevious',
    added: moment(new Date()).format('MM-D-YYYY, h:mm:ss a'),
  },
  {
    text: 'LOL',
    user: 'Anonymous',
    added: moment(new Date()).format('MM-D-YYYY, h:mm:ss a'),
  },
];

//home page route
router.get('/', (req, res) => {
  res.render('index', {title: 'Mini Message Board', messages: messages});
});

module.exports = router;
