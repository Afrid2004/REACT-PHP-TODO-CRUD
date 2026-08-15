import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CreateTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    due_time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!todos.title.trim()) {
      setError("Title is required");
      return;
    }
    if (todos.title.trim().length < 3) {
      setError("Title must be at least 3 characters long");
      return;
    }
    if (!todos.description.trim()) {
      setError("Description is required");
      return;
    }
    if (todos.description.trim().length < 3) {
      setError("Description must be at least 3 characters long");
      return;
    }
    if (!todos.priority.trim()) {
      setError("Please select priority");
      return;
    }
    if (!todos.status.trim()) {
      setError("Please select status");
      return;
    }
    if (!todos.due_time.trim()) {
      setError("Please select date and time");
      return;
    }

    const newTodo = {
      title: todos.title.trim(),
      description: todos.description.trim(),
      priority: todos.priority,
      status: todos.status,
      due_time: todos.due_time,
    };

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_PHP_API}/todos/create`,
        newTodo,
      );
      if (res.data.success) {
        await Swal.fire({
          title: "Success!",
          text: res.data?.message,
          icon: "success",
        });
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      await Swal.fire({
        title: "Failed!",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Create New Task
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Add a new task and keep track of your work.
          </p>
        </div>
        <Link
          to={"/todos"}
          className="rounded-lg flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          <FaArrowLeft className="text-xs" />
          Back to Tasks
        </Link>
      </div>

      {/* Form Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 bg-red-500/5 text-red-400 border border-red-400/20 rounded-sm mb-5">
              {error}
            </div>
          )}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Task Title
              </label>

              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="desc"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Description
              </label>

              <textarea
                rows="5"
                onChange={handleChange}
                name="description"
                id="desc"
                placeholder="Write a short description..."
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Priority
                </label>

                <select
                  name="priority"
                  id="priority"
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                >
                  <option value="" selected disabled>
                    Select priority
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Status
                </label>

                <select
                  name="status"
                  id="status"
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                >
                  <option value="" selected disabled>
                    Select status
                  </option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="due_time"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>

              <input
                name="due_time"
                id="due_time"
                onChange={handleChange}
                type="datetime-local"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>
          </div>

          <div className="mt-7 flex justify-end gap-3 border-t border-gray-100 pt-5">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg cursor-pointer bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
