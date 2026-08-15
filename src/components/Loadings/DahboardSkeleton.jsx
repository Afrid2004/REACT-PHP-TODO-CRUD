import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Header */}
      <div className="mb-6">
        <div className="h-7 w-32 rounded-md bg-gray-200" />

        <div className="mt-2 h-4 w-64 rounded bg-gray-100" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-8 w-14 rounded bg-gray-200" />
              </div>

              <div className="h-10 w-10 rounded-lg bg-gray-100" />
            </div>

            <div className="mt-5 h-3 w-28 rounded bg-gray-100" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Tasks */}
        <div className="rounded-xl border border-gray-200 bg-white xl:col-span-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div className="space-y-2">
              <div className="h-5 w-32 rounded bg-gray-200" />
              <div className="h-3 w-48 rounded bg-gray-100" />
            </div>

            <div className="h-9 w-20 rounded-lg bg-gray-100" />
          </div>

          {/* Task List */}
          <div className="divide-y divide-gray-100">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-gray-100" />

                  <div className="min-w-0 space-y-2">
                    <div className="h-4 w-40 rounded bg-gray-200" />
                    <div className="h-3 w-56 rounded bg-gray-100" />
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <div className="h-6 w-20 rounded-full bg-gray-100" />

                  <div className="h-8 w-8 rounded-lg bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="space-y-2">
            <div className="h-5 w-28 rounded bg-gray-200" />
            <div className="h-3 w-44 rounded bg-gray-100" />
          </div>

          <div className="mt-5 space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
              >
                <div className="h-10 w-10 rounded-lg bg-gray-100" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-28 rounded bg-gray-200" />
                  <div className="h-3 w-36 rounded bg-gray-100" />
                </div>

                <div className="h-4 w-4 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
