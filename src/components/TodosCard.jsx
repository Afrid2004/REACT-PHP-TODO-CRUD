import { FaEdit, FaTrash, FaClock } from "react-icons/fa";
import { formatDateTime } from "../lib/formateDate";
import { Link, replace, useNavigate } from "react-router";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import TodosCardSkeleton from "./Loadings/TodosCardSkeleton";

const TodosCard = ({ todos, setTodos, loading }) => {
  const navigate = useNavigate();
  console.log(todos);
  const handleDetails = (id) => {
    return navigate(`/todos/details/${id}`, { replace: true });
  };

  const handleDelete = async (id) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#101828",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed)
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_PHP_API}/todos/delete?id=${id}`,
          );
          if (res.data.success) {
            await Swal.fire({
              title: "Success!",
              text: res.data?.message,
              icon: "success",
            });
            setTodos((prev) => prev.filter((item) => item.id !== id));
          } else {
            await Swal.fire({
              title: "Error!",
              text: res.data?.message,
              icon: "error",
            });
          }
        } catch (error) {
          await Swal.fire({
            title: "Failed!",
            text: error.response?.data?.message || "Something went wrong",
            icon: "error",
          });
        }
    });
  };

  if (loading) {
    return <TodosCardSkeleton></TodosCardSkeleton>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
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
            className="flex gap-4 cursor-pointer rounded-lg border border-gray-200 hover:-translate-y-1 bg-white duration-200 p-4"
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
                  <h3 className="font-semibold text-gray-800">{todo.title}</h3>

                  <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                    {todo.description || "No description"}
                  </p>
                </div>

                {/* Actions */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex shrink-0 gap-1"
                >
                  <Link
                    to={`/todos/edit/${todo.id}`}
                    className="rounded-md p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    type="button"
                    className="rounded-md cursor-pointer p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
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
