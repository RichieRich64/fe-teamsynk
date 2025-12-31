import LoginScreen from "@/screens/auth/login";
import { Suspense } from "react";

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginScreen />
    </Suspense>
  );
};

export default Login;
