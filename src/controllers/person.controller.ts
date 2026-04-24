import { Request, Response } from "express";
import {data} from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";

// const data=[
//     {id:1, name:"John", age:30},
//     {id:2, name:"Sohn", age:20},
//     {id:3, name:"Don", age:80},
//     {id:4, name:"Shyam", age:12},
//     {id:5, name:"Ram", age:45},
// ]



export class PersonController{
    //GET -All oersin
    async getAllPersons(req:Request, res:Response){
        try{
            const someVar:any = {}
            //implement exception handling
            if(!someVar.name){
                throw new HttpException(400, "Name is required");
            }
            //semulate exception error {server error}
            someVar.name.getAll();
            return res.status(200).json(data);
            //return res.status(202).json(data);
            return ApiResponseHelper.success(res,data, 200, "Success");

        } catch (err:Error|unknown |any){
            // return res.status(500).json({message:"failed to get "});
            return ApiResponseHelper.error(
                res,
                err?.message || "Failed to get",
                err.status || 500
            );
        }
        
    }
    //effecient api design
    //1. logic through exception handeling
    //2. consistent api response
    //3. Global error handeling
    async createPerson(req:Request, res:Response){
        const {name, age} = req.body;// clint request body/input
        if(!name){
            throw new HttpException(400, "Name is required");
        } if (!age){
            throw new HttpException(400, "Age is required");

        }
        //database operation
        const newPerson = {
            id: data.length +1,
            name,
            age
        }
        data.push(newPerson);
        return ApiResponseHelper.success(res, newPerson,201, "Person is successfully created");
    }

    async updatePerson(req:Request, res:Response){
        const {id} = req.params;
        const {name, age} = req.body;
        if(!name){
            throw new HttpException(404, "Person  not found");
        }
        const findPerson = data.findIndex(p=>p.id===parseInt(id as string));

        const updatePerson = {
            name,
            age
        }
        data[findPerson] = {...data[findPerson],...updatePerson};
        return res.status(200).json(updatePerson);
    }
}


