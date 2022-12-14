import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import itemsRoute from '../routes/items';

const PORT = process.env.SERVER_PORT || 9000;
const app = express();
const cors = require('cors');
const MongoUrl = "mongodb://localhost:27017/project";
require('dotenv').config();
app.use(express.json({limit:'30mb'}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors());


app.use('/items', itemsRoute);
mongoose.connect(MongoUrl)
  .then(() => app.listen(PORT))
  .catch((error) => console.log(`${error} did not connect`));

