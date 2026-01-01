"use client";

import { useEffect } from "react";
import LoginScreen from "../auth/login";
import useAuth from "@/hooks/api/use-auth";
import { useRouter } from "next/navigation";

const HomeScreen = () => {
  const router = useRouter();

  const { data: authData, isLoading, isError } = useAuth();
  const user = authData?.user;

  useEffect(() => {
    if (!isLoading && !isError && user) {
      router.replace(`/workspace/${user.currentWorkspace?._id}`);
    }
  }, [isError, isLoading, router, user]);

  if (isLoading && !isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user || isError) {
    return <LoginScreen />;
  }

  return null;
};

export default HomeScreen;
