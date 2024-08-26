import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected using mongoose");
    } catch (err) {
        console.log("Error while connecting to db", err);
    }
    
}