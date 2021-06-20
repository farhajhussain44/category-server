import express from 'express';
import {
  createRootCategory,
  createSubCategory,
  getAllCategory,
  getCurentCategory,
  editCategory,
  deleteCategorySubCategory,
} from '../controllers/treeController.js';

const router = express.Router();

router.post('/createRootCategory', createRootCategory);
router.post('/createSubCategory', createSubCategory);
router.get('/getAllCategory', getAllCategory);
router.get('/getCurentCategory/:id', getCurentCategory);
router.patch('/editCategory/:id', editCategory);
router.delete('/deleteCategorySubCategory/:id', deleteCategorySubCategory);

export default router;
