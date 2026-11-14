import { connectToDB } from "./config/db";
import dotenv from 'dotenv'
import http, { createServer } from 'http'
import app from "./app";


dotenv.config();


async function serverStart() {
    await connectToDB()
    const server = http.createServer(app)
    server.listen(process.env.PORT,()=>{
        console.log(`server running on port ${process.env.PORT}`)
    })
}


serverStart().catch(err=>{
    console.error("error while starting the server",err);
    process.exit(1)
})