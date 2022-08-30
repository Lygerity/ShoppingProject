import express from 'express';

import { getItemsAvailable, getItem, postItems, updateItem, getCart } from '../controllers/items';
//import { postItems } from '../controllers/items';

const router =express.Router();

router.get('/', getItemsAvailable);
router.get('/:id', getItem);
router.get('/cart', getCart);

router.post('/', postItems);
router.post('/update', updateItem);

export default router;