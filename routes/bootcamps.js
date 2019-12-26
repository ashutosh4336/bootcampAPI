const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

// router.get('/', (req, res) => {
//   // res.send('hello from express');
//   // res.json({ name: 'Ashutosh' });
//   // res.status(200).json({ success: true, msg: 'Show all Bootcamp' });
// });

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
