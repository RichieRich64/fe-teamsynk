import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

export function DashboardSkeleton() {
  return (
    <div className="p-4">
      <div className="absolute inset-0 z-50 flex items-start pt-18 justify-center bg-[rgba(255,255,255,.01)]">
        <div className="flex items-center space-x-2">
          <Loader size="25px" className="animate-spin" />
          <span className="text-sm font-medium">TeamSynk...</span>
        </div>
      </div>

      <div className="flex space-x-4 mt-14">
        <div className="flex-1 space-y-6">
          <Skeleton className="h-12 w-64" />

          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-10 w-64" />
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between">
                  <Skeleton className="h-10 w-96" />
                  <Skeleton className="h-10 w-24 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
