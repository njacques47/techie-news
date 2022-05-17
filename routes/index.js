const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// error handling for any invalid requests
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;