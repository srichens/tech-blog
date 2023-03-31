const router = require('express').Router();
const { Blogpost, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
    return res.status(201).json()
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});




// router.get('/:id', async (req, res) => {
//   try {

//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

   
//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     res.render('blogpost', { 
//       comments, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlogpost = await Blogpost.update({
      ...req.body,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }
    );

    res.status(200).json(updatedBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
