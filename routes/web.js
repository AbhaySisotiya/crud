import express from 'express';
const router = express.Router();
import student from '../controllers/student.js';



router.get('/', student.getdata);
router.post('/', student.create);
router.get('/edit/:id', student.edit);
router.post('/update/:id', student.update);
router.post('/delete/:id', student.delete);


export default router;