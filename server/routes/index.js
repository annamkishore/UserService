const router = require('express').Router();
const userController = require('../controllers/userController');
const validation = require('../middlewares/validation');

router.post('/login', validation.validateLogin, userController.login);
router.post('/register', validation.validateRegistration, userController.register);

module.exports = router;
