"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();

  return (
    <div className="flex gap-3">
      <Button
        onClick={() => router.push("/sign-up")}
        className="cursor-pointer"
      >
        Get Started
      </Button>
      <Button onClick={() => router.push("/login")} className="cursor-pointer">
        Sign In
      </Button>
    </div>
  );
};

export default AuthButtons;
