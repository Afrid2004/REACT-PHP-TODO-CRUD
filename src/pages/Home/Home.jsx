import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaEdit,
  FaPlus,
  FaTasks,
} from "react-icons/fa";
import { FiActivity, FiAlertCircle } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import DashboardSkeleton from "../../components/Loadings/DahboardSkeleton";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    summary: {
      total: 0,
      pending: 0,
      in_progress: 0,
      completed: 0,
    },
    recent_tasks: [],
  });

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PHP_API}/todos/dashboard/`,
      );

      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const getPriorityStyle = (priority) => {
    if (priority === "high") {
      return "bg-red-100 text-red-600";
    }

    if (priority === "medium") {
      return "bg-yellow-100 text-yellow-600";
    }

    return "bg-green-100 text-green-600";
  };

  const getStatusStyle = (status) => {
    if (status === "completed") {
      return "bg-green-100 text-green-600";
    }

    if (status === "in_progress") {
      return "bg-blue-100 text-blue-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  if (loading) {
    return <DashboardSkeleton></DashboardSkeleton>;
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

          <h2>CI/CD pipeline added</h2>

          <p className="mt-1 text-sm text-gray-500">
            Here's an overview of your tasks.
          </p>
        </div>

        <Link
          to="/todos/create"
          className="flex w-fit items-center gap-2 rounded-sm bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          <FaPlus className="text-xs" />
          Create New Task
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Tasks</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                {data.summary.total}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
              <FaTasks />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            All tasks in your workspace
          </p>
        </div>

        {/* Pending */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                {data.summary.pending}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <FiAlertCircle />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Tasks waiting to be started
          </p>
        </div>

        {/* In Progress */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">In Progress</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                {data.summary.in_progress}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FiActivity />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Tasks currently being worked on
          </p>
        </div>

        {/* Completed */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                {data.summary.completed}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <FaCheckCircle />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Successfully completed tasks
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Tasks */}
        <div className="xl:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <h2 className="text-base font-semibold text-gray-800">
                  Recent Tasks
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Your latest tasks and updates
                </p>
              </div>

              <Link
                to="/todos"
                className="flex items-center gap-1 text-xs font-medium text-gray-600 transition hover:text-gray-900"
              >
                View All
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            {/* Tasks */}
            {data.recent_tasks.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {data.recent_tasks.map((todo) => (
                  <div
                    key={todo.id}
                    onClick={() => navigate(`/todos/details/${todo.id}`)}
                    className="cursor-pointer px-5 py-4 transition hover:bg-gray-50"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      {/* Task Info */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate text-sm font-medium text-gray-800">
                            {todo.title}
                          </h3>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-medium capitalize ${getPriorityStyle(
                              todo.priority,
                            )}`}
                          >
                            {todo.priority}
                          </span>
                        </div>

                        <p className="mt-1 line-clamp-1 text-xs text-gray-400">
                          {todo.description}
                        </p>

                        <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                          <FaClock className="text-[10px]" />

                          <span>{todo.due_time || "No due date"}</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex shrink-0 items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${getStatusStyle(
                            todo.status,
                          )}`}
                        >
                          {todo.status?.replace("_", " ")}
                        </span>

                        <FaArrowRight className="text-xs text-gray-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-5 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <FaClipboardList />
                </div>

                <h3 className="mt-3 text-sm font-medium text-gray-700">
                  No tasks yet
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Create your first task to get started.
                </p>

                <Link
                  to="/todos/create"
                  className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
                >
                  <FaPlus className="text-[10px]" />
                  Create Task
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-4">
              <h2 className="text-base font-semibold text-gray-800">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Quickly manage your tasks
              </p>
            </div>

            <div className="space-y-3 p-5">
              {/* Create */}
              <Link
                to="/todos/create"
                className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <FaPlus className="text-xs" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Create Task
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
                      Add a new task
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-xs text-gray-300 transition group-hover:translate-x-1" />
              </Link>

              {/* All Tasks */}
              <Link
                to="/todos"
                className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <FaClipboardList className="text-sm" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      View All Tasks
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
                      Manage your tasks
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-xs text-gray-300 transition group-hover:translate-x-1" />
              </Link>

              {/* In Progress */}
              <Link
                to="/todos"
                className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FaEdit className="text-xs" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      In Progress
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
                      Continue working
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-xs text-gray-300 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
