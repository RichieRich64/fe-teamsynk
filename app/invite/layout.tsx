import BaseLayoutInner from "@/layouts/base";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return <BaseLayoutInner>{children}</BaseLayoutInner>;
};

export default BaseLayout;
