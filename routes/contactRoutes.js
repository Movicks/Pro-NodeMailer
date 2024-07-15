// routes/contactRoutes.js
const express = require('express');
const { sendContactEmail } = require('../controllers/contactcontroller');
const contactFormValidator = require('../utils/validator');
const refererChecker = require('../middleware/refererChecker');
const router = express.Router();

router.post('/contact', refererChecker, contactFormValidator, sendContactEmail);

module.exports = router;
