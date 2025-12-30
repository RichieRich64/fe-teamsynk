"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PermissionType } from "@/constant";
import { useAuthContext } from "@/context/auth-provider";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withPermission = (
  WrappedComponent: React.ComponentType,
  requiredPermission: PermissionType
) => {
  const WithPermission = (props: any) => {
    const router = useRouter();

    const { user, hasPermission, isLoading } = useAuthContext();
    const workspaceId = useWorkspaceId();

    useEffect(() => {
      if (!user || !hasPermission(requiredPermission)) {
        router.push(`/workspace/${workspaceId}`);
      }
    }, [user, hasPermission, router, workspaceId]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Check if user has the required permission
    if (!user || !hasPermission(requiredPermission)) {
      return;
    }

    // If the user has permission, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return WithPermission;
};

export default withPermission;
