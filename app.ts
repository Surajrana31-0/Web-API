import express, { Application, Request, Response } from "express";
import { title } from "node:process";
const app: Application = express();

app.get(
    '/',
    (req: Request, res:Response) =>{
        return res.send("Hello Sathi");

    }

);

app.get(
    '/hello/:name',
    (req:Request, res:Response) =>{
        //const name = req.params.name
        const{name} = req.params;//:name Dynamic place holder --http://localhost:808/hello/123
        const{title} = req.query;//?title=Dr  http://localhost:808/hello/123?title=Mr
        return res.send(`hello, ${title} ${name}!`);
    }
)


app.get(
    '/hello/:name/:age/', //http://localhost:808/hello/John/30/?title=Dr.&category=doctor
    (req:Request, res:Response) =>{
        //const name = req.params.name
        const{name, age} = req.params;//:name Dynamic place holder --http://localhost:808/hello/123
        const{title, category} = req.query;//?title=Dr, category=doctor  http://localhost:808/hello/123?title=Mr
        return res.send(`hello, ${title}. ${category}, Your are ${age} years old and your category is ${category}!`);
    }
)

const PORT: number = 808;//port is defined  
app.listen(
    PORT,
    ()=>{
        console.log(`Server running: ${PORT}`);
        console.log(`I'm comming on:!01`);
    }
);

//execute script:npx tsx --watch app.ts
// http:/localhost/808/dashboard



