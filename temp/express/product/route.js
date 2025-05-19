import express from 'express'

import productController from './controller.js';

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:prodId', productController.getProductById);
router.post('/', productController.save);
router.put('/:prodId', productController.update);
router.delete('/:prodId', productController.deleteById);

export default router;