import {DBConnection} from "./config/dbConnection.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();


const port  = process.env.PORT || 3000;
DBConnection().then(result => console.log(result));

app.listen(port,() => console.log(`server is running on port ${port}`));
