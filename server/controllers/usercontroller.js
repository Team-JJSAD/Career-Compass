// import User from './userModel.js'
import User from './models/userModelMongo.js'

const UserController = {};

UserController.createUser = async (req, res, next) => {
    // testing
    console.log('In UserController.createUser');
    
    const { username, password } = req.body;
    try {
      const user = await User.create({ username, password });
      res.cookie("SSID", user._id, { httpOnly: true });
      return res.status(200).json({ success: true, user: user });
    } catch (err) {
      return next({
        message: "Error in the userController.createUser",
        log: "Error",
      });
    }
  };

  UserController.verifyUser = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
  
      if (!user) return res.status(404).json({ error: "User not in database" });
      else if(user.password !== password){
        res.status(404).json({error: 'User password is incorrect'})
       }else {
        // Return the username in the response
        res.cookie("SSID", user._id, { httpOnly: true });
        return res.status(200).json({ username: user.username });
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