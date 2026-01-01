import { getCurrentUserQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: getCurrentUserQueryFn,
    staleTime: 0,
    gcTime: 0,
    // retry: 2,
    retry: (failureCount, error) => {
      // Don't retry on 401 error (unauthorized)
      if (error.message === "Unauthorized") {
        return false;
      }
      return failureCount < 2;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useAuth;
