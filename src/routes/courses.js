const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.use('/create', courseController.create);
router.use('/store', courseController.store);
router.use('/:id/edit', courseController.edit);
router.use('/:id', courseController.update);
router.use('/:slug', courseController.show);


module.exports = router;
