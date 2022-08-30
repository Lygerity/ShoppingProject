// import express, {Express, Request, Response} from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;

// app.get('/', (req, res) => {
//   res.send('Express + TypeScript Server is Running');
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at https://localhost:${port}`);
// });

import express, {Express, Request, Response} from 'express';
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
app.get('/hello', (req, res)=> res.send('Hello'));
const CONNECTION_URL= 'mongodb+srv://admin:admin@cluster0.4jdrsto.mongodb.net/?retryWrites=true&w=majority';
//app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
mongoose.connect(MongoUrl)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
