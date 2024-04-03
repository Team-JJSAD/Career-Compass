import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from '../components/ui/toaster.jsx';

// Import your page components
import Splash from "./Splash.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import CurrentApps from "./CurrentApps.jsx";
import MoreInfo from "./MoreInfo.jsx";
import AddApp from "./AddApp.jsx"
// ... import other page components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/CurrentApps" element={<CurrentApps />} />
        <Route path="/MoreInfo" element={<MoreInfo />} />
        <Route path="/AddApp" element={<AddApp />} />
        {/* Add more routes for other pages */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
