const express = require('express');
const router = express.Router();
const {list ,detail} = require('../../controllers/api/actorsControllers');

router.get('/',list);
router.get('/:id',detail);


module.exports = router;