import { Typography } from "@mui/material";
import InputTask from "./InputTask.jsx";
import Task from "./Task.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
const Tasks = () => {
  const currentUser = localStorage.getItem("CurrentUser");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [Tasks, setTasks] = useState([]);

  Array.prototype.myFilter = function (callback) {
    const trueArray = [];
    const falseArray = [];

    this.forEach((element, index, array) => {
      if (callback(element, index, array)) {
        trueArray.push(element);
      } else {
        falseArray.push(element);
      }
    });

    return [trueArray, falseArray];
  };

  function onDelete(title) {
    setTasks(
      Tasks.filter((elem) => {
        return elem.title !== title;
      })
    );
  }
  function handleTick(title) {
    let task = Tasks.find((task) => task.title === title);
    task.completed = true;
    setTasks(Tasks.map((elem) => elem));
  }
  async function postTask(task) {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts',task, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
      
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
    const addTask = () => {
      if (input!="") {
        postTask({user_id:1,title:input,completed:false});
        
        setTasks([{user_id:input,title:input,completed:false},...Tasks]);
        setInput("");
      }
    }
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${currentUser[4]}/todos`
      );
      if (response.status == 200) {
        setTasks(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
    console.log(Tasks);
  }, []);

  const [completed, pending] = Tasks.myFilter((elem) => {
    return elem.completed;
  });

  return (
    <>
      <div className="tasks-container" style={{ margin: "10" }}>
        <InputTask input={input} setInput={setInput} addTask={addTask}/>

        <Typography variant="h5" sx={{ mt: 2 }}>
          Pending
        </Typography>
        {pending.map((elem) => (
          <Task
            key={elem.title}
            completed={elem.completed}
            title={elem.title}
            handleTick={handleTick}
            onDelete={onDelete}
          />
        ))}
        <Typography variant="h5" sx={{ mt: 2 }}>
          Completed
        </Typography>
        {completed.map((elem) => (
          <Task
            key={elem.title}
            completed={elem.completed}
            title={elem.title}
            handleTick={handleTick}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
