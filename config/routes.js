const router = require('express').Router();
const sneakerController = require('../controllers/sneakerController');

router.get('/', function(req, res) {
  res.send('Welcome to Sneaker Freaker');
});

router.get('/sneakers', sneakerController.index);

router.get('/sneakers/new', sneakerController.new);
router.post('/sneakers', sneakerController.create);

router.get('/sneakers/:sneakerId', sneakerController.show);

router.get('/sneakers/:sneakerId/edit', sneakerController.edit);
router.put('/sneakers/:sneakerId', sneakerController.update);
module.exports = router;
