import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex != index));
  };

  const list = tasks.map((task, index) => {
    return (
      <div className="row justify-content-center my-2" key={index}>
        <h1 className="col-md-6 text-start">
          {index + 1} {task}
        </h1>
        <button
          className="col-md-2 btn btn-warning"
          onClick={() => deleteTask(index)}
        >
          Usuń
        </button>
      </div>
    );
  });

  return (
    <div className="App container-fluid">
      <h1>Moje zadania</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Wpisz zadanie"
            className="form-control"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
        </div>

        <button className="col-md-2 btn btn-success" onClick={addTask}>
          Dodaj
        </button>
      </div>
      {list}
      <h5>Liczba zadań: {tasks.length}</h5>
    </div>
  );
};

export default App;
