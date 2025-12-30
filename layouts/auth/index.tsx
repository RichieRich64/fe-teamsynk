"use client";

import useAuth from "@/hooks/api/use-auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayoutInner = ({ children }: Props) => {
  const router = useRouter();

  const { data: authData, isLoading } = useAuth();
  const user = authData?.user;

  useEffect(() => {
    if (!isLoading && user) {
      router.replace(`/workspace/${user.currentWorkspace?._id}`);
    }
  }, [router, user]);

  return <div>{children}</div>;
};

export default AuthLayoutInner;
