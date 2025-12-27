import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AuthProvider } from "@/context/auth-provider";
import { ReactNode } from "react";
import Header from "@/components/common/header";
import CreateWorkspaceDialog from "@/components/workspace/create-workspace-dialog";
import CreateProjectDialog from "@/components/workspace/project/create-project-dialog";
import Asidebar from "@/components/asidebar/asidebar";

interface Props {
  children?: ReactNode;
}

const RootLayoutInner = ({ children }: Props) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Asidebar />
        <SidebarInset className="overflow-x-hidden">
          <div className="w-full">
            <>
              <Header />
              <div className="px-3 lg:px-20 py-3">{children}</div>
            </>
            <CreateWorkspaceDialog />
            <CreateProjectDialog />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default RootLayoutInner;
