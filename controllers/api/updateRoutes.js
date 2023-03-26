// const router = require('express').Router();
// const { Blogpost } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/:id', async (req, res) => {
//   try {
//     const updateData = await Blogpost.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const updates = updateData.get({ plain: true });

//     res.render('update', {
//       ...updates,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const updatedBlogpost = await Blogpost.update({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(updatedBlogpost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const blogpostData = await Blogpost.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogpostData) {
//       res.status(404).json({ message: 'No blog post found with this id!' });
//       return;
//     }

//     res.status(200).json(blogpostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
