import Express, { Application, Request, Response } from "express";

const app: Application =Express();

const product =[

    {id:1, name: "Apple", price:2000, category:"Fruit"},
]

app.get(
    "/api/product",
    (req:Request, res:Response)=>{
        return res.status(200).json(product);
    }
)

const PORT : number = 808;
app.listen(
    PORT,
    ()=>{
        console.log(`Server is running on:${PORT}`);
    }
);