const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
    });

    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render('dashboard', {
      comments,
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
