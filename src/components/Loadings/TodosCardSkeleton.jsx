import React from "react";

const TodosCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex justify-between">
            <div className="h-5 w-3/5 rounded bg-gray-200" />
            <div className="h-5 w-14 rounded-full bg-gray-200" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-3 w-full rounded bg-gray-200" />
            <div className="h-3 w-4/5 rounded bg-gray-200" />
            <div className="h-3 w-2/5 rounded bg-gray-200" />
          </div>

          <div className="mt-5 border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div className="h-3 w-28 rounded bg-gray-200" />
              <div className="h-7 w-7 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosCardSkeleton;
