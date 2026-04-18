import Express, { Application, Response, Request } from "express";

const app: Application = Express();
app.get(
    '/suraj',
    (req:Request, res:Response)=>{
        return res.send("Hello sathi k xha halkhabar");
    }
)


app.get(
    '/name/:name/:sathi/:muji',
    (req:Request, res:Response)=>{ 
        const{name, sathi, muji}=req.params;
        const{title, category} = req.query;
        return res.send(`Hello ${title} ${name} ${sathi} talai pakh mailey janey ko xhu`);
        return res.send(`Tw ${muji} ko ${category} vaye pani talai ${muji} ley nekalxha herdai ja`);
        //print: Hello DR. Rahul mdc talai pakh maile janey ko xhu .
        //http://localhost:8080/Rahul/mdc/coventry?title=Dr.&category=student
        //print: Tw coventry ko Student vaye pani talai coventry ley nekalxha herdai ja.  
        //http://localhost:8080/name/Rahul/mdc/coventry?title=Dr.&category=student
    }
)
const PORT:number= 8080;
app.listen(
    PORT,
    ()=>{
        console.log(`Server is running on:${PORT}`);
    }
);