var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.localtest = "this-is-local";
  res.render('users', {
      "title" : "Express Handlebars Users",
      "username" : "Lester",
      photos: [
          { title: "My First Photo Title",  description: "All about my first photos"  },
          { title: "My Second Photo Title",  description: "All about my second photos"  },
          { title: "My Third Photo Title",  description: "All about my third photos"  },
      ]
  });
});

module.exports = router;

