import { Skeleton } from "./shadcn-ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}
