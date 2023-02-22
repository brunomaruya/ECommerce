import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  if (process.env.DB_URI) {
    mongoose.connect(process.env.DB_URI);
  }
};

export default dbConnect;
