import RootLayoutInner from "@/layouts/root";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const WorkspaceLayout = ({ children }: Props) => {
  return <RootLayoutInner>{children}</RootLayoutInner>;
};

export default WorkspaceLayout;
