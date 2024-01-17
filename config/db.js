import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

(async function main() {
    try{
        mongoose.Promise=Promise;
        mongoose.connect(process.env.DB_URI);
        mongoose.connection.once("open",() => console.log("connected to db"));
        mongoose.connection.on("error", (error) => console.log(error));

    }catch(error){
        console.log(error);
    }


})();
