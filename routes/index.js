const express = require('express');
const router = express.Router();
const moment = require('moment');

//decode url form
router.use(express.urlencoded({extended: true}));
router.use(express.json());

//sample message
let messages = [
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

router
  .get('/new', (req, res) => {
    res.render('form', {title: 'Create a new Post'});
  })
  .post('/new', (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: moment(new Date()).format('MM-D-YYYY, h:mm:ss a'),
    });
    res.redirect('/');
  });

module.exports = router;
