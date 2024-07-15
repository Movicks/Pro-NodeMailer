//contactcontroller.js
const transporter = require('../config/nodemailer');

exports.sendContactEmail = (req, res) => {
    const { fullName, email, phone, title, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.RECEIVING_EMAIL, // your email address where you want to receive the messages
        subject: `Contact Form Submission: ${title}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
};
