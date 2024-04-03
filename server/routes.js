import express from 'express';
import cors from 'cors';
// import { createUser, verifyUser, loggedIn, resetPassword } from './controllers/usercontroller.js'
import UserController from './controllers/usercontroller.js'
const { createUser, verifyUser, loggedIn, resetPassword } = UserController
import mongoose from 'mongoose';
import { User } from 'lucide-react';
const app = express();
// const cookieParser = require('cookie-parser');


mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  dbName: "Career-Compass"
})
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});
// Middleware
// app.use(cookieParser())
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.post('/register', createUser)
app.post('/login', verifyUser, loggedIn);
app.post('/ForgotPassword', resetPassword)

// Route handler
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;