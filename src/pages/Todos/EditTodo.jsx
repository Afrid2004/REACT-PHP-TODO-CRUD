import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Spin from "../../components/Loadings/Spin";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const fetchTodo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PHP_API}/todos/find/?id=${id}`,
      );
      if (res.data.success) {
        const data = res.data?.data;
        setTodos({
          title: data.title ?? "",
          description: data.description ?? "",
          priority: data.priority ?? "",
          status: data.status ?? "",
          due_time: data.due_time
            ? data.due_time.replace(" ", "T").slice(0, 16)
            : "",
        });
        console.log(res.data);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);

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

    const updatedTodo = {
      title: todos.title.trim(),
      description: todos.description.trim(),
      priority: todos.priority,
      status: todos.status,
      due_time: todos.due_time,
    };

    setLoading(true);
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_PHP_API}/todos/update?id=${id}`,
        updatedTodo,
      );
      if (res.data.success) {
        await Swal.fire({
          title: "Success!",
          text: res.data?.message,
          icon: "success",
        });
        navigate(`/todos/details/${id}`);
      } else {
        console.log(res.data);
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
          <h1 className="text-2xl font-semibold text-gray-800">Update Task</h1>

          <p className="mt-1 text-sm text-gray-500">
            Update your task details and keep your work organized.
          </p>
        </div>
        <Link
          to={"/todos"}
          className="rounded-sm flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
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
                value={todos.title ?? ""}
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
                value={todos.description ?? ""}
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
                  value={todos.priority}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                >
                  <option value="" disabled>
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
                  value={todos.status}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                >
                  <option value="" disabled>
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
                value={todos.due_time ?? ""}
                type="datetime-local"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>
          </div>

          <div className="mt-7 flex justify-end gap-3 border-t border-gray-100 pt-5">
            <button
              type="button"
              className="rounded-sm border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-sm cursor-pointer bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              {loading && <Spin></Spin>}
              {loading ? "Updating..." : "Update Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
