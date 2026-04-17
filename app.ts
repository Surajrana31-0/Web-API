import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get(
    '/',
    (req: Request, res:Response) =>{
        return res.send("Hello World");

    }

);


const PORT: number = 8088;//port is defined
app.listen(
    PORT,
    ()=>{
        console.log(`Server running: ${PORT}`);
        console.log(`I'm comming on: ${PORT}`);
    }
);

//execute script:npx tsx --watch app.ts