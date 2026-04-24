import express, { Application, NextFunction, Request, Response } from "express";
import { title } from "node:process";
// import { router } from "./routes/person.route";
import personRoutes from "./routes/person.route";
import { error } from "node:console";
import { HttpException } from "./exceptions/http-exception";
import { ApiResponseHelper } from "./utils/api-response";
const app: Application = express();
app.use(express.json());//use json as request
app.use(express.urlencoded({extended:true}));//usse form-urlencoded as a request

app.use ("/api/person", personRoutes); 



const data=[
    {id:1, name:"John", age:30},
    {id:2, name:"Sohn", age:20},
    {id:3, name:"Don", age:80},
    {id:4, name:"Shyam", age:12},
    {id:5, name:"Ram", age:45},
]

// //5 major api endpoint
// //1. Get all
app.get(
    "/api/person",
    ( req:Request, res:Response) =>{ //http://localhost:8088/api/person
        //later paginated result
        return res.status(200).json(data);
    }
);


// //2. get by ID -get one
// app.get(
//     "/api/person/:id",
//     (req:Request, res:Response)=>{//http://localhost:8088/api/person/2
//         const{id}= req.params;//id
//         const person = data.find(p=>p.id === parseInt(id as string));
//         return res.status(200).json(person);
//     }
// );

// //3.POST --create
// app.post(
//     "/api/person",
//     (req:Request, res:Response)=>{
//         const {name, age} = req.body;//client request body
//         const newPerson ={
//             id:data.length+1,
//             name,
//             age
//         }
//         data.push(newPerson);
//         return res.status(201).json(newPerson);
//     }
// );



// app.put(
//     "/api/person/:id",
//     (req:Request, res:Response)=>{
//         const { id}= req.params;
//         const { name, age}= req.body;//client request body
//         const personIndex = data.findIndex(p=>p.id===parseInt(id as string));


//         const updatePerson = {
//             name,
//             age
//         }
//         data[personIndex]= {...data[personIndex],...updatePerson};
//         return res.status(200).json(updatePerson);
//     }
// )

// //delete one
// app.delete(
//     "/api/person/:id",
//     (req:Request, res:Response)=>{
//         const{ id} = req.params;
//         const personIndex = data.findIndex(p=>p.id===parseInt(id as string));
//         data.splice(personIndex,1);
//         return res.status(204).json({message:"Persion is successfully deleted."});
//     }
// )
























// app.get(
//     '/',
//     (req: Request, res:Response) =>{
//         return res.send("Hello Sathi");

//     }

// );

// app.get(
//     '/hello/:name',
//     (req:Request, res:Response) =>{
//         //const name = req.params.name
//         const{name} = req.params;//:name Dynamic place holder --http://localhost:808/hello/123
//         const{title} = req.query;//?title=Dr  http://localhost:808/hello/123?title=Mr
//         return res.send(`hello, ${title} ${name}!`);
//     }
// )


// app.get(
//     '/hello/:name/:age/', //http://localhost:808/hello/John/30/?title=Dr.&category=doctor
//     (req:Request, res:Response) =>{
//         //const name = req.params.name
//         const{name, age} = req.params;//:name Dynamic place holder --http://localhost:808/hello/123
//         const{title, category} = req.query;//?title=Dr, category=doctor  http://localhost:808/hello/123?title=Mr
//         return res.send(`hello, ${title}. ${category}, Your are ${age} years old and your category is ${category}!`);
//     }
// )

//global handler if no router match return 404
app.use(
    (req:Request, res:Response)=>{
        return res.status(404).json({message:"router not found"});
    }
);

//global error handler
app.use(
    (err:Error, req:Request, res:Response, next:NextFunction)=>{
        if(err instanceof HttpException){
            return ApiResponseHelper.error(
                res,
                err.message,
                err.status
            );
        }
        return ApiResponseHelper.error(
            res,
            err?.message||"Internal Server error",
            500
        )
    }
)


// app.use(
//     (err:Error, req:Request, res:Response, next:NextFunction)=>{
//         return res.status(500).json({
//             message:err.message ?? " Internal server error"
//         });
//     }
// );

const PORT: number = 8088;
const dummy: String = "Dummy";
export {
    PORT,
    dummy
}

export default app;


//const PORT: number = 8088;//port is defined  


// app.listen(
//     PORT,
//     ()=>{
//         console.log(`Server running: ${PORT}`);
//         // console.log(`I'm comming on:!01`);
//     }
// );

//execute script:npx tsx --watch app.ts
// http:/localhost/808/dashboard



