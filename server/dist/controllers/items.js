"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.postItems = exports.getCart = exports.getItem = exports.getItemsAvailable = void 0;
const express_1 = __importDefault(require("express"));
const itemsModel_1 = __importDefault(require("../models/itemsModel"));
const router = express_1.default.Router();
const getItemsAvailable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemsModel_1.default.find();
        res.json({ data: items });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getItemsAvailable = getItemsAvailable;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield itemsModel_1.default.findById(id);
        res.status(200).json({ data: post });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getItem = getItem;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemsModel_1.default.find();
        res.json({ data: items });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCart = getCart;
const postItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let itemField = {};
    if (req.body.name)
        itemField.name = req.body.name;
    if (req.body.price)
        itemField.price = req.body.price;
    if (req.body.size)
        itemField.size = req.body.size;
    if (req.body.url)
        itemField.url = req.body.url;
    new itemsModel_1.default(itemField)
        .save()
        .then((itemField) => res.json(itemField))
        .catch((err) => console.log(err));
});
exports.postItems = postItems;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let itemField = {};
    if (req.body.name)
        itemField.name = req.body.name;
    if (req.body.price)
        itemField.price = req.body.price;
    if (req.body.size)
        itemField.size = req.body.size;
    if (req.body.url)
        itemField.url = req.body.url;
    itemField.id = req.body._id;
    itemsModel_1.default
        .updateOne({ _id: itemField.id }, itemField)
        .then((itemField) => res.json(itemField));
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield itemsModel_1.default.findByIdAndDelete(id);
        res.json({ message: "Item deleted sucsessfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteItem = deleteItem;
