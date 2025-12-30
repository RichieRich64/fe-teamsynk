import AuthLayoutInner from "@/layouts/auth";
import BaseLayoutInner from "@/layouts/base";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <AuthLayoutInner>
      <BaseLayoutInner>{children}</BaseLayoutInner>
    </AuthLayoutInner>
  );
};

export default AuthLayout;
