import mongoose from "mongoose"
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.DATABASE_URI);
        console.log("db connected successfully ✅");
    } catch (error) {
        console.log(error, "error connected database ❌");
    }
}

export default connectDB;