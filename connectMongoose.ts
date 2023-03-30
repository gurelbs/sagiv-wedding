import { config } from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

export function connectMongoose(){
    config()
    const { USER, PASSWORD } = process.env;    
    try {
        mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.rmxncwd.mongodb.net/test`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions).then(() => console.log('connected to MongoDB server successfully'))
        .catch((error) => console.log('failed to connect to MongoDB server', {error}))
    } catch (error) {
        console.log('failed to connect to MongoDB server. error: ' + error)
    }
}