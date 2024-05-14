import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected successfully! 👨‍💻')
    } catch (error) {
        throw new Error("Database connection error: " + error)
    }
}

export default connectToDatabase;