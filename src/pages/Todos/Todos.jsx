import React, { useEffect, useState } from "react";
import TodosCard from "../../components/TodosCard";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const todosApi = import.meta.env.VITE_PHP_API;

  const fetchData = async () => {
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 5000)); testng loading
    try {
      const res = await axios.get(`${todosApi}/todos/`);
      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">My Tasks</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your tasks.
          </p>
        </div>
        <Link
          to={"/todos/create"}
          className="flex items-center gap-2 rounded-sm bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 active:bg-gray-900 cursor-pointer"
        >
          <FaPlus className="text-xs" />
          Create New
        </Link>
      </div>
      <TodosCard
        loading={loading}
        todos={todos}
        setTodos={setTodos}
      ></TodosCard>
    </div>
  );
};

export default Todos;
