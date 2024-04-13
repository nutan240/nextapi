import mongoose from 'mongoose'


export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error while connecting to database:', error);
    }
}

