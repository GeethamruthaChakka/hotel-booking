// import express from "express"
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import { clerkMiddleware } from '@clerk/express'
// import clerkWebhooks from "./controllers/clerkWebhooks.js";
// import bookingRouter from "./routes/bookingRoutes.js";
// import connectCloudinary from './configs/cloudinary.js';
// import hotelRouter from "./routes/hotelRoutes.js";
// import roomRouter from './routes/roomRoutes.js';
// import userRouter from './routes/userRoutes.js';
// // import { getAuth } from "@clerk/express";

// connectDB()
// connectCloudinary();
// const app=express()
// // app.use(getAuth);
// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())
// app.use("/api/clerk",clerkWebhooks);
// app.get('/',(req,res)=>res.send("API IS WORKING"))
// app.use('/api/user',userRouter)
// app.use('/api/hotels',hotelRouter)
// app.use('/api/rooms',roomRouter)
// app.use('/api/bookings',bookingRouter)
// const PORT=process.env.PORT || 3000;
// app.listen(PORT,()=>{
//     console.log("server is running");
// })
import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import bookingRouter from "./routes/bookingRoutes.js";
import connectCloudinary from './configs/cloudinary.js';
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from './routes/roomRoutes.js';
import userRouter from './routes/userRoutes.js';

connectDB();
connectCloudinary();

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware()); // ✅ Clerk middleware before your routes!

app.use("/api/clerk", clerkWebhooks);
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

app.get('/', (req, res) => res.send("API IS WORKING"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
