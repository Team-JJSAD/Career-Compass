import { Link } from "react-router-dom";

export function ForgotPasswordPage({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        {children}
        <div className="mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}