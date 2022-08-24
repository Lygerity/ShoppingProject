"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
require('dotenv').config();
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(process.env.SERVER_PORT, () => {
    return console.log(`server is listening on ` + process.env.SERVER_PORT);
});
//# sourceMappingURL=app.js.map