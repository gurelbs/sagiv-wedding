import { config } from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

export function connectMongoose(){
    config();
    if (process.env['NODE_ENV'] !== 'production'){
        config({ path: `.env.local`, override: true });
    }
    const { MONGODB_URI } = process.env;    
    try {
        mongoose.connect(MONGODB_URI ?? '', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions).then(() => console.log('connected to MongoDB server successfully'))
        .catch((error) => console.log('failed to connect to MongoDB server', {error}))
    } catch (error) {
        console.log('failed to connect to MongoDB server. error: ' + error)
    }
}