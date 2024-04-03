// Aesthetically correct, but broke the buttons
// import { Link } from "react-router-dom";
// import { Button } from "./button.jsx";
// import { cn } from "../../lib/utils";

// export function RegisterPage({ children, onLoginClick }) {
//   return (
//     <div>
//       {/* Nav Bar */}
//       <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
//         {/* Invisible Spacer */}
//         <div className="flex">
//           {/* Empty div for balancing the space */}
//         </div>

//         {/* Title Centered */}
//         <h1 className="text-2xl font-bold text-white absolute inset-0 flex justify-center mt-4">Career Compass</h1>

//         {/* Buttons on the Right */}
//         <div className="flex">
//           <Button asChild>
//             <Link to="/" className="text-sm">
//               Home
//             </Link>
//           </Button>
//           <Button asChild onClick={onLoginClick} className="ml-4">
//             <Link to="/Login" className="text-sm">
//               Login
//             </Link>
//           </Button>
//         </div>
//       </nav>
      
//       {/* Everything else */}
//       <div
//         className={cn("flex flex-col items-center justify-center min-h-screen")}
//       >
//         <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
//         {children}
//       </div>
//     </div>
//   );
// }


// Not working, trying to fix
// import { Link } from "react-router-dom";
// import { Button } from "./button.jsx";
// import { cn } from "../../lib/utils";

// export function RegisterPage({ children, onLoginClick }) {
//   return (
//     <div>
//       {/* Nav Bar */}
//       <nav className="flex justify-between bg-gray-800 py-4 px-6">
//       <h1 className="text-2xl font-bold text-white text-center">Career Compass</h1>
//         <div className="flex justify-right">
//           <Button asChild>
//             <Link to="/" className="text-sm">
//               Home
//             </Link>
//           </Button>
//           <Button asChild onClick={onLoginClick} className="ml-4">
//             <Link to="/Login" className="text-sm">
//               Login
//             </Link>
//           </Button>
//         </div>
//       </nav>
      
//       {/* Everything else */}
//       <div
//         className={cn("flex flex-col items-center justify-center min-h-screen")}
//       >
//         <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
//         {children}
//       </div>
//     </div>
//   );
// }


// Claude 
// import { Link } from "react-router-dom";
// import { Button } from "./button.jsx";
// import { cn } from "../../lib/utils";

// export function RegisterPage({ children, onLoginClick }) {
//   return (
//     <div>
//       {/* Nav Bar */}
//       <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
//         <div className="flex-grow text-center">
//           <h1 className="text-2xl font-bold text-white">Career Compass</h1>
//         </div>

//         <div className="flex justify-end">
//           <Button asChild>
//             <Link to="/" className="text-sm">
//               Home
//             </Link>
//           </Button>
//           <Button asChild onClick={onLoginClick} className="ml-4">
//             <Link to="/Login" className="text-sm">
//               Login
//             </Link>
//           </Button>
//         </div>
//       </nav>

//       {/* Everything else */}
//       <div
//         className={cn("flex flex-col items-center justify-center min-h-screen")}
//       >
//         <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
//         {children}
//       </div>
//     </div>
//   );
// }


// // GPT3.5
// import { Link } from "react-router-dom";
// import { Button } from "./button.jsx";
// import { cn } from "../../lib/utils";

// export function RegisterPage({ children, onLoginClick }) {
//   return (
//     <div>
//       {/* Nav Bar */}
//       <nav className="flex justify-between bg-gray-800 py-4 px-6">
//         <h1 className="text-2xl font-bold text-white text-center flex-1">Career Compass</h1>
//         <div className="flex items-center justify-end flex-1">
//           <Button asChild>
//             <Link to="/" className="text-sm">
//               Home
//             </Link>
//           </Button>
//           <Button asChild onClick={onLoginClick} className="ml-4">
//             <Link to="/Login" className="text-sm">
//               Login
//             </Link>
//           </Button>
//         </div>
//       </nav>

//       {/* Everything else */}
//       <div className={cn("flex flex-col items-center justify-center min-h-screen")}>
//         <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
//         {children}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { cn } from "../../lib/utils";

export function RegisterPage({ children, onLoginClick }) {
  return (
    <div>
      {/* Nav Bar */}
      <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold text-white ml-44">Career Compass</h1>
        </div>
        <div className="flex justify-end">
          <Button asChild>
            <Link to="/" className="text-sm">
              Home
            </Link>
          </Button>
          <Button asChild onClick={onLoginClick} className="ml-4">
            <Link to="/login" className="text-sm">
              Login
            </Link>
          </Button>
        </div>
      </nav>

      {/* Everything else */}
      <div
        className={cn("flex flex-col items-center justify-center mt-20")}
      >
        <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
        {children}
      </div>
    </div>
  );
}