import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from 'lucide-react';
const app = express();
// const cookieParser = require('cookie-parser');

import UserController from './controllers/usercontroller.js'
import ApplicationController from './controllers/applicationController.js';

const { getApplications } = ApplicationController;
const { createApplication } = ApplicationController;
const { createUser, verifyUser, loggedIn, resetPassword } = UserController
// import { createUser, verifyUser, loggedIn, resetPassword } from './controllers/usercontroller.js'

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
app.post('/applications', createApplication);
app.get('/applications', getApplications);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;