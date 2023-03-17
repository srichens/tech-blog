const router = require('express').Router();
const { Dashboard } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbDashboardData = await Dashboard.findAll({
    });

    const dashboard = dbDashboardData.map((dashboard) =>
      dashboard.get({ plain: true })
    );

    res.render('dashboard', {
      dashboard,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
