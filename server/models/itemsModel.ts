import mongoose, { isObjectIdOrHexString } from "mongoose";

const itemsSchema = new mongoose.Schema({
    _id: isObjectIdOrHexString,
    name: String,
    price: Number,
    size: [String],
    url: String
})

var itemsModel = mongoose.model('Item', itemsSchema);
export default itemsModel;