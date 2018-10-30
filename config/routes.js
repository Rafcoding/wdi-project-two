const router = require('express').Router();
const sneakerController = require('../controllers/sneakerController');
const commentsController = require('../controllers/commentsController');
const authController = require('../controllers/authController');

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/sneakers', sneakerController.index);

router.get('/sneakers/new', sneakerController.new);
router.post('/sneakers', sneakerController.create);

router.get('/sneakers/:sneakerId', sneakerController.show);

router.get('/sneakers/:sneakerId/edit', sneakerController.edit);
router.put('/sneakers/:sneakerId', sneakerController.update);

router.delete('/sneakers/:id', sneakerController.delete);

router.post('/sneakers/:id/comments', commentsController.create);
router.delete('/sneakers/:sneakerId/comments/:commentId', commentsController.delete);


router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

//
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);


router.get('/logout', authController.logoutRoute);





module.exports = router;
