import mongoose, { isObjectIdOrHexString } from "mongoose";

const itemsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    size: [String],
    url: String
})

var itemsModel = mongoose.model('Item', itemsSchema);
export default itemsModel;