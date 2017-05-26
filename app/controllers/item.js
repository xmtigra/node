var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/item', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('item', {
      title: 'КАЛЕНДАРЬ СТАРТОВ',
      articles: articles
    });
  });
});