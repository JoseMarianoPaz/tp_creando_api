const express = require('express');
const router = express.Router();
const {list ,detail} = require('../../controllers/api/genresControllers');

router.get('/',list);
router.get('/:id',detail);


module.exports = router;