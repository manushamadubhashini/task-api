import mongoose from "mongoose"

// Database Connection Function

export const DBConnection =  async () =>{
    try  {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully connected to the database", connection.connection.host);
        return connection;

    }catch (error) {
        console.log("Error while connecting to the database", error);
        throw error;
    }
}
