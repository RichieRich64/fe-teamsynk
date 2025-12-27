import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayoutInner = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AuthLayoutInner;
