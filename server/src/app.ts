import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({limit:'30mb'}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors());

require('dotenv').config();
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(process.env.SERVER_PORT, ()=> {
  return console.log(`server is listening on `+process.env.SERVER_PORT);
});

const CONNECTION_URL= 'mongodb+srv://admin:admin@cluster0.4jdrsto.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.SERVER_PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
                .then(() => app.listen(PORT, ()=> console.log(`Server Running on Port: http://localhosy:${PORT}`)))
                .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);