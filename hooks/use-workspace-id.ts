import { useSearchParams } from "next/navigation";

const useWorkspaceId = () => {
  const searchParams = useSearchParams();
  return searchParams.get("workspaceId") as string;
};

export default useWorkspaceId;
