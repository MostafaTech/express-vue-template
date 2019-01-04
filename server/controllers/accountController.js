const router = require('express').Router();

router.post('/login', function(req, res) {
    res.json({ success: true })
})


router.get('/register', function(req, res) {
    res.json({ success: true })
})

module.exports = router;