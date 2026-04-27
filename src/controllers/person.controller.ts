// import { Request, Response } from "express";
// import {data} from "../models/person.model";
// import { HttpException } from "../exceptions/http-exception";
// import { ApiResponseHelper } from "../utils/api-response";
// import {z} from "zod";
// import { PersonSchema } from "../types/person.type";
// import { CreatePersonDTO } from "../dtos/person.dto";

// // export const PersonSchema = z.object(
// //     {
// //     id: z.number(),
// //     name:z.string().min(1, "Nmae is required"),
// //     age: z.number().min(0," Age must be positive number")
// //     }
// // )

// // //domain model -person
// // export type Person = z.infer<typeof PersonSchema>;
// // //DTO - Data transfer object[can be input/output to client]
// // export const CreatePersonDTO = PersonSchema.omit({id: true});
// // //fro create id is not required
// // export type CreatePersonDTO  = z.infer<typeof CreatePersonDTO>;


// export class PersonController{
//     //GET -All oersin
//     async getAllPersons(req:Request, res:Response){
//         try{
//             const someVar:any = {}
//             //implement exception handling
//             if(!someVar.name){
//                 throw new HttpException(400, "Name is required");
//             }
//             //semulate exception error {server error}
//             someVar.name.getAll();
//             return res.status(200).json(data);
//             //return res.status(202).json(data);
//             return ApiResponseHelper.success(res,data, 200, "Success");

//         } catch (err:Error|unknown |any){
//             // return res.status(500).json({message:"failed to get "});
//             return ApiResponseHelper.error(
//                 res,
//                 err?.message || "Failed to get",
//                 err.status || 500
//             );
//         }
        
//     }
//     //effecient api design
//     //1. logic through exception handeling
//     //2. consistent api response
//     //3. Global error handeling
//     async createPerson(req:Request, res:Response){
//         // const {name, age} = req.body;
//         const parseResult = CreatePersonDTO.safeParse(req.body);// clint request body/input
//         if(!parseResult.success){
//             throw new HttpException(
//                 400,
//                 z.prettifyError(parseResult.error)
//             );
//         }
//         const {name, age} = parseResult.data;
//         // const {name, age} = req.body;
//         // if(!name){//logic throw exception handeling
//         //     throw new HttpException(400, "Name is required");
//         // } if (!age){
//         //     throw new HttpException(400, "Age is required");

//         // }
//         //database operation
//         const newPerson = {
//             id: data.length +1,
//             name,
//             age
//         }
//         data.push(newPerson);
//         return ApiResponseHelper.success(res, newPerson,201, "Person is successfully created");
//     }

//     async updatePerson(req:Request, res:Response){
//         const {id} = req.params;
//         const {name, age} = req.body;
//         if(!name){
//             throw new HttpException(404, "Person  not found");
//         }
//         const findPerson = data.findIndex(p=>p.id===parseInt(id as string));

//         const updatePerson = {
//             name,
//             age
//         }
//         data[findPerson] = {...data[findPerson],...updatePerson};
//         return res.status(200).json(updatePerson);
//     }
// }









import { Request, Response } from "express";
import {data} from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";
import {z} from "zod";
import { PersonSchema } from "../types/person.type";
import { CreatePersonDTO } from "../dtos/person.dto";

// export const PersonSchema = z.object(
//     {
//     id: z.number(),
//     name:z.string().min(1, "Nmae is required"),
//     age: z.number().min(0," Age must be positive number")
//     }
// )

// //domain model -person
// export type Person = z.infer<typeof PersonSchema>;
// //DTO - Data transfer object[can be input/output to client]
// export const CreatePersonDTO = PersonSchema.omit({id: true});
// //fro create id is not required
// export type CreatePersonDTO  = z.infer<typeof CreatePersonDTO>;


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
            // BUG #1: someVar.name is undefined after the throw above, so .getAll()
            // would throw a TypeError — and the lines below it are dead code.
            // someVar.name.getAll();

            // BUG #2: Dead code — this return was placed before ApiResponseHelper,
            // so ApiResponseHelper.success() was never reached.
            // return res.status(200).json(data);

            //return res.status(202).json(data);

            // FIX #1 & #2: Use only ApiResponseHelper for consistent API response
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
        // BUG #3: No try/catch — any thrown HttpException was unhandled inside this method.
        // FIX #3: Wrap entire method body in try/catch for consistent error handling.
        try{
            // const {name, age} = req.body;
            const parseResult = CreatePersonDTO.safeParse(req.body);// clint request body/input
            if(!parseResult.success){
                throw new HttpException(
                    400,
                    z.prettifyError(parseResult.error)
                );
            }
            const {name, age} = parseResult.data;
            // const {name, age} = req.body;
            // if(!name){//logic throw exception handeling
            //     throw new HttpException(400, "Name is required");
            // } if (!age){
            //     throw new HttpException(400, "Age is required");

            // }
            //database operation
            const newPerson = {
                id: data.length +1,
                name,
                age
            }
            data.push(newPerson);
            return ApiResponseHelper.success(res, newPerson,201, "Person is successfully created");
        } catch(err:Error|unknown|any){
            return ApiResponseHelper.error(
                res,
                err?.message || "Failed to create person",
                err.status || 500
            );
        }
    }

    async updatePerson(req:Request, res:Response){
        const {id} = req.params;
        const {name, age} = req.body;

        // BUG #4: Wrong status code and wrong message — this check is for a missing
        // request body field, not a missing person in the database.
        // if(!name){
        //     throw new HttpException(404, "Person  not found");
        // }

        // FIX #4: Correct status (400) and message for missing name field
        if(!name){
            throw new HttpException(400, "Name is required");
        }

        const findPerson = data.findIndex(p=>p.id===parseInt(id as string));

        // BUG #5: No check for findIndex returning -1 (person not found).
        // data[-1] is undefined in JS — silently corrupts the array.
        // FIX #5: Throw 404 if person does not exist
        if(findPerson === -1){
            throw new HttpException(404, "Person not found");
        }

        const updatePerson = {
            name,
            age
        }
        data[findPerson] = {...data[findPerson],...updatePerson};

        // BUG #6: Returns only partial object {name, age} — missing id field.
        // return res.status(200).json(updatePerson);

        // FIX #6: Return the full updated person object using ApiResponseHelper
        return ApiResponseHelper.success(res, data[findPerson], 200, "Person successfully updated");
    }
}