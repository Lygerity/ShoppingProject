"use strict";
// import express, {Express, Request, Response} from 'express';
// import dotenv from 'dotenv';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app: Express = express();
// const port = process.env.PORT;
// app.get('/', (req, res) => {
//   res.send('Express + TypeScript Server is Running');
// });
// app.listen(port, () => {
//   console.log(`[server]: Server is running at https://localhost:${port}`);
// });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const items_1 = __importDefault(require("../routes/items"));
const PORT = process.env.SERVER_PORT || 9000;
const app = (0, express_1.default)();
const cors = require('cors');
const MongoUrl = "mongodb://localhost:27017/project";
require('dotenv').config();
app.use(express_1.default.json({ limit: '30mb' }));
app.use(express_1.default.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/items', items_1.default);
app.get('/hello', (req, res) => res.send('Hello'));
const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.4jdrsto.mongodb.net/?retryWrites=true&w=majority';
//app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
mongoose_1.default.connect(MongoUrl)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));