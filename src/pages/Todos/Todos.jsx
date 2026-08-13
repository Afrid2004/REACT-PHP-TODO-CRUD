import axios from "axios";
import React, { useEffect, useState } from "react";
import TodosTable from "../../components/TodosTable";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const todosApi = import.meta.env.VITE_PHP_API;

  const fetchData = async () => {
    setLoading(true);
    try {
        const res = await axios.get(`${todosApi}/todos/`);
        setTodos(res.data.data);
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TodosTable loading={loading} todos={todos}></TodosTable>
    </div>
  );
};

export default Todos;
