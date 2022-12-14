"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_1 = require("../controllers/items");
const router = express_1.default.Router();
router.get('/', items_1.getItemsAvailable);
router.get('/:id', items_1.getItem);
router.get('/cart', items_1.getCart);
router.post('/', items_1.postItems);
router.post('/update', items_1.updateItem);
router.delete('/:id', items_1.deleteItem);
router.patch('/:id', items_1.updateItem);
exports.default = router;
