import React from "react";

const TodosDetailsSkeleton = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 animate-pulse">
      {/* Title + Badges */}
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full">
          {/* Task label */}
          <div className="mb-2 h-3 w-10 rounded bg-gray-200"></div>

          {/* Title */}
          <div className="h-6 w-64 rounded bg-gray-200"></div>
        </div>

        {/* Badges */}
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-gray-200"></div>
          <div className="h-6 w-20 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* Description */}
      <div className="py-6">
        <div className="mb-3 h-4 w-24 rounded bg-gray-200"></div>

        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-5/6 rounded bg-gray-200"></div>
          <div className="h-3 w-2/3 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Date Information */}
      <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">
        {/* Created */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200"></div>
            <div className="h-3 w-12 rounded bg-gray-200"></div>
          </div>

          <div className="h-4 w-36 rounded bg-gray-200"></div>
        </div>

        {/* Due Date */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>

          <div className="h-4 w-36 rounded bg-gray-200"></div>
        </div>

        {/* Last Updated */}
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200"></div>
            <div className="h-3 w-24 rounded bg-gray-200"></div>
          </div>

          <div className="h-4 w-36 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default TodosDetailsSkeleton;
