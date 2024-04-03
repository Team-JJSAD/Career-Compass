import express from 'express';
import cors from 'cors';
import { createUser, verifyUser, loggedIn, resetPassword } from './controllers/usercontroller.js'
import mongoose from 'mongoose';
const app = express();


mongoose.connect('mymongodb', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
// Middleware
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