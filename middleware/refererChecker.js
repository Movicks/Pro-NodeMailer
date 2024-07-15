// middleware/refererChecker.js
const refererChecker = (req, res, next) => {
    const allowedReferer = 'https://movic-xpro.vercel.app';
    const referer = req.get('Referer');

    if (referer === allowedReferer) {
        return next();
    } else {
        return res.status(403).json({ error: 'Forbidden: Invalid Referer' });
    }
};

module.exports = refererChecker;
