import AuthLayoutInner from "@/layouts/auth";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <AuthLayoutInner>{children}</AuthLayoutInner>;
};

export default AuthLayout;
