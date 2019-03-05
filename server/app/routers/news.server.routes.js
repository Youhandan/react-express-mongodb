var NewsController = require('../controllers/news.server.controller')

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    } else {
      next()
    }
  })

  app.route('/news')
      .get(NewsController.list)
      .post(NewsController.create)

  	app.route('/news/:nid')
      .get(NewsController.get)

  	app.param('nid', NewsController.getById)
}