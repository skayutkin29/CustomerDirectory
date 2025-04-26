const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.getCustomers);
router.post('/', controller.addCustomer);
router.delete('/:id', controller.deleteCustomer);

module.exports = router;