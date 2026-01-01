"use client";

import useAuth from "@/hooks/api/use-auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayoutInner = ({ children }: Props) => {
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
        {/* <p className="text-sm text-gray-600 ml-2">Checking authentication...</p> */}
      </div>
    );
  }

  if (!user || isError) {
    return <div>{children}</div>;
  }

  return null;
};

export default AuthLayoutInner;
