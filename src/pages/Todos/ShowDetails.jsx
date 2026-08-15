import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router";

const ShowDetails = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState(null);
  const [error, setError] = useState("");

  const fetchTodo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PHP_API}/todos/find/?id=${id}`,
      );

      if (res.data.success) {
        setTodo(res.data.data);
        console.log(res.data);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!todo) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
        Loading task...
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Task Details</h1>

          <p className="mt-1 text-sm text-gray-500">
            View the details and current status of your task.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/todos"
            className="flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            <FaArrowLeft className="text-xs" />
            Back to Tasks
          </Link>
          <Link
            to={`/todos/edit/${id}`}
            className="flex items-center gap-2 rounded-sm bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 active:bg-gray-900 cursor-pointer"
          >
            <FiEdit size={16} />
            Edit Task
          </Link>
        </div>
      </div>

      {/* Details Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {/* Title + Badges */}
        <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
              Task
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              {todo.title}
            </h2>
          </div>

          <div className="flex gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                todo.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : todo.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
              }`}
            >
              {todo.priority}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                todo.status === "completed"
                  ? "bg-green-100 text-green-600"
                  : todo.status === "in_progress"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              {todo?.status?.replace("_", " ")}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="py-6">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Description
          </h3>

          <p className="text-sm leading-6 text-gray-500">
            {todo.description || "No description available."}
          </p>
        </div>

        {/* Date Information */}
        <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-gray-400">
              <FaCalendarAlt className="text-sm" />
              <span className="text-xs font-medium">Created</span>
            </div>

            <p className="text-sm font-medium text-gray-700">
              {todo.created_at}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-gray-400">
              <FaClock className="text-sm" />
              <span className="text-xs font-medium">Due Date</span>
            </div>

            <p className="text-sm font-medium text-gray-700">
              {todo.due_time || "No due date"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-gray-400">
              <FaCalendarAlt className="text-sm" />
              <span className="text-xs font-medium">Last Updated</span>
            </div>

            <p className="text-sm font-medium text-gray-700">
              {todo.updated_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
