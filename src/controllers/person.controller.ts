import { Request, Response } from "express";
import {data} from "../models/person.model";

// const data=[
//     {id:1, name:"John", age:30},
//     {id:2, name:"Sohn", age:20},
//     {id:3, name:"Don", age:80},
//     {id:4, name:"Shyam", age:12},
//     {id:5, name:"Ram", age:45},
// ]

export class PersonController{
    
    async getAllPersons(req:Request, res:Response){
        try{
            const someVar:any = {}
            //semulate exception error {server error}
            someVar.name.getAll();
            return res.status(200).json(data);

        } catch (err:Error|unknown){
            return res.status(500).json({message:"failed to get "});
        }
        
    }
}