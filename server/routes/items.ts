import express from 'express';

import { getItemsAvailable, getItem, postItems, updateItem, getCart, deleteItem } from '../controllers/items';

const router =express.Router();

router.get('/', getItemsAvailable);
router.get('/:id', getItem);
router.get('/cart', getCart);

router.post('/', postItems);
router.post('/update', updateItem);

router.delete('/:id', deleteItem);
router.patch('/:id', updateItem);

export default router;