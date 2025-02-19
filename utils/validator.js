//validator.js
const { body, validationResult } = require('express-validator');

const contactFormValidator = [
    body('fullName').notEmpty().withMessage('Full name is required.'),
    body('email').isEmail().withMessage('Valid email address is required.'),
    body('title').notEmpty().withMessage('Title is required.'),
    body('message').notEmpty().withMessage('Message is required.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = contactFormValidator;
