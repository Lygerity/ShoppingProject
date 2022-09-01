"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
mongoose_1.default.connect(MongoUrl)
    .then(() => app.listen(PORT))
    .catch((error) => console.log(`${error} did not connect`));
