import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Finish Book for Book Club",
      day: "February 28th at 6:00pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Brunch with Mother-in-Law",
      day: "February 19th at 11:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Give Cricket his Sentinel",
      day: "February 20th at 9:00am",
      reminder: true,
    },
    {
      id: 4,
      text: "Take Cricket to Day Camp",
      day: "February 23rd at 8:00am",
      reminder: false,
    },
    {
      id: 5,
      text: "Axe Throwing in Loveland",
      day: "February 19th at 3:00pm",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminders
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "You finished everything! Go play with the dog. :)"
      )}
    </div>
  );
};

export default App;
