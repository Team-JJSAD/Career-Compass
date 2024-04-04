// import User from './userModel.js'
import User from './models/userModelMongo.js'
// import db from './models/userModel.js'

const UserController = {};

// const insertUserIntoPostgreSQL = (firstName, lastName, email) => {
//   const queryText = `INSERT INTO Users(FirstName, LastName, Email)
//                      VALUES($1, $2, $3)
//                      RETURNING UserID;`; // Return the generated UserID

//   return db.query(queryText, [firstName, lastName, email])
//     .then(res => res.rows[0].UserID) // Extract UserID from the result
//     .catch(err => {
//       console.error('Error inserting user into PostgreSQL:', err);
//       throw err;
//     });
// };



// usercontroller.js

UserController.createUser = async (req, res, next) => {
  console.log('in UserController.createUser');
  console.log('req.body: ', req.body);
  try {
    const { email, password } = req.body;
    // Create a new user in the database
    console.log(email)
    const user = await User.create({ email, password });
    return res.status(200).json({ user: user });
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};




// UserController.createUser = async (req, res, next) => {
//     // testing
//     console.log('In UserController.createUser');
    
//     // const { username, password } = req.body;
//     let { firstName, lastName, email, password } = req.body;
//     // console.log(req.body)
//     try {
//       const postgresUserId = await insertUserIntoPostgreSQL(firstName, lastName, email);

//       const user = await User.create({ email, password, postgresUserId });
//       console.log('User created: ', user);

//       // res.cookie("userID", postgresUserId, { httpOnly: true })
//       // res.cookie("SSID", user._id, { httpOnly: true });
//       return res.status(200).json({ user: user });
//       // return res.status(200).json({ message: 'User created successfully' });
//     } catch (err) {
//       return next({
//         message: "Error in the userController.createUser",
//         log: "Error",
//       });
//     }
//   };

  UserController.verifyUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ username: email });
  
      if (!user) return res.status(404).json({ error: "User not in database" });
      else if(user.password !== password){
        res.status(404).json({error: 'User password is incorrect'})
       }else {
        // Return the username in the response
        res.cookie("SSID", user._id, { httpOnly: true });
        return res.status(200).json({ username: user.email });
      }
    } catch (err) {
      return next({
        log: "An Error occurred in the UserController.VerifyUser",
        status: 500,
        message: { err: "An error occured" },
      });
    }
  };

  UserController.loggedIn = async (req, res, next) => {
    const SSID = req.cookies["SSID"];
    console.log('SSID', SSID)
    try{
      const user = await User.findById(SSID);
      if(!user) res.redirect('/Login');
      else return next();
    } catch(err){
      return next({
          log: "User  Not Logged in",
          status: 500,
          message: { err: "An error occured in the loggedIn function" },
        });
    }
  };

  UserController.resetPassword = async (req, res, next) => {
    const { username, newPassword } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { username: username },
        { password: newPassword },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "Password reset successful" });
    } catch (err) {
      return next({
        log: "An Error occurred in the UserController.resetPassword",
        status: 500,
        message: { err: "An error occurred" },
      });
    }
  };

 export default UserController