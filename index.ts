import app,{PORT, dummy} from "./src/app";
import { PORT as SERVER_PORT} from "./src/config/constant";
//if same name imported then use alisa :"as" 


// const PORT: number = 8088;//port is defined  


app.listen(
    SERVER_PORT,
    ()=>{
        console.log(`Server running: ${SERVER_PORT}`);
        // console.log(`I'm comming on:!01`);
    }
);