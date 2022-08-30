import express, {Express, Request, Response} from 'express';

import itemsModel from '../models/itemsModel';

const router = express.Router();

export const getItemsAvailable =async (req: Request, res: Response) => {
    try{
        const total = await itemsModel.countDocuments({});
        const items = await itemsModel.find();

        res.json({data: items});
    }catch(error){
        //res.status(404).json({message: error.message});
        console.log(error);
    }
}

export const getItem = async (req: Request, res: Response)=>{
    const {id} = req.params;

    try{
        const post = await itemsModel.findById(id);
        res.status(200).json({data: post});
    }catch(error){
        //res.status(404).json({message: error.message});
        console.log(error);

    }
}

export const getCart = async(req: Request, res: Response) =>{
    try{
        const items = await itemsModel.find();
        res.json({data: items});
    }catch(error){
        console.log(error);
    }
}

export const postItems = async(req: Request, res: Response)=>{
    let itemField: any = {};
    if (req.body.name) itemField.name = req.body.name;
    if (req.body.price) itemField.price = req.body.price;
    if (req.body.size) itemField.size = req.body.size;
    if (req.body.url) itemField.url = req.body.url;

 

    new itemsModel(itemField)
        .save()
        .then(itemField => res.json(itemField))
        .catch(err => console.log(err));
}

export const updateItem = async(req: Request, res: Response) =>{
    let itemField: any = {};
    if (req.body.name) itemField.name = req.body.name;
    if (req.body.price) itemField.price = req.body.price;
    if (req.body.size) itemField.size = req.body.size;
    if (req.body.url) itemField.url = req.body.url;
    itemField.id = req.body._id;

    itemsModel.updateOne({_id: itemField.id}, itemField)
    .then(itemField => res.json(itemField));
}

export const deleteItem = async(req: Request, res: Response)=>{
    const {id} = req.params;
    try{
        await itemsModel.findByIdAndDelete(id);
        res.json({message: "Item deleted sucsessfully"});
    }catch(error){
console.log(error);
    }
}