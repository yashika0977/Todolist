// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleAddTask = () => {
//     if (task.trim() !== '') {
//       setTodos([...todos, task]);
//       setTask('');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>📝 To-Do List</h1>
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter a task"
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>

//       <ul>
//         {todos.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(index)}
              className="checkbox"
            />
            <span className={t.completed ? 'completed' : ''}>{t.text}</span>
            <button onClick={() => removeTask(index)} className="remove-btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
