const express = require('express');
const router = express.Router();
const {list,news,recomended,detail,create,edit,update,destroy} = require('../../controllers/api/moviesControllers');

router.get('/',list);
router.get('/new',news);
router.get('/recommended',recomended);
router.get('/detail/:id',detail);
//Rutas exigidas para la creación del CRUD
router.post('/create',create);
router.get('/edit/:id',edit);
router.put('/update/:id',update);
router.delete('/delete/:id',destroy);

module.exports = router;