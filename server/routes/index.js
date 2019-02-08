const router = require('express').Router();
const userController = require('../controllers/userController');
const validation = require('../middlewares/validation');

/**
 * Routing for the application services.
 *  - URL Mapping to the required controller services
 */

router.post('/login', validation.validateLogin, userController.login);
router.post('/register', validation.validateRegistration, userController.register);

module.exports = router;
