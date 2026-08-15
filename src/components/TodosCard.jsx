import React from "react";
import { FaEdit, FaTrash, FaClock } from "react-icons/fa";
import { formatDateTime } from "../lib/formateDate";
import { replace, useNavigate } from "react-router";

const TodosCard = ({ todos }) => {

  const navigate = useNavigate();

  const handleDetails = (id) => {
    return navigate(`/todos/details/${id}`, {replace: true});
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {todos?.map((todo) => {
        const priorityColor =
          todo.priority === "high"
            ? "bg-red-500"
            : todo.priority === "medium"
              ? "bg-yellow-500"
              : "bg-green-500";

        const statusColor =
          todo.status === "completed"
            ? "bg-green-100 text-green-600"
            : todo.status === "in_progress"
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-600";

        return (
          <div
            key={todo.id}
            onClick={() => handleDetails(todo.id)}
            className="flex gap-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50/20 duration-75 p-4 hover:border-gray-300"
          >
            {/* Priority */}
            <div className="pt-1">
              <span
                className={`block h-3 w-3 rounded-full ${priorityColor}`}
              ></span>
            </div>

            {/* Todo Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                
                {/* Title & Description */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-800">
                    {todo.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                    {todo.description || "No description"}
                  </p>
                </div>

                {/* Actions */}
                <div onClick={(e) => e.stopPropagation()} className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {/* Priority */}
                <span className="text-xs capitalize text-gray-500">
                  {todo.priority} priority
                </span>

                {/* Status */}
                <span
                  className={`rounded-full px-2.5 py-1 text-xs capitalize ${statusColor}`}
                >
                  {todo.status.replace("_", " ")}
                </span>

                {/* Created Date */}
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <FaClock />
                  {formatDateTime(todo.due_time)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodosCard;