import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodosTable = ({ todos }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {todos?.map((todo, index) => {
            const priority =
              todo.priority === "high"
                ? "bg-red-100 text-red-600"
                : todo.priority === "medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600";
            return (
              <tr key={todo.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500">{index + 1}</td>

                <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                  {todo.title}
                </td>

                <td className="px-4 py-3 text-gray-500">{todo.description}</td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs capitalize ${
                      priority
                    }`}
                  >
                    {todo.priority}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 whitespace-nowrap text-xs capitalize ${
                      todo.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : todo.status === "in_progress"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {todo.status.replace("_", " ")}
                  </span>
                </td>

                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                  {todo.created_at}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button className="rounded p-2 text-blue-500 hover:bg-blue-50">
                      <FaEdit />
                    </button>

                    <button className="rounded p-2 text-red-500 hover:bg-red-50">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
