import './App.css';
import NewTaskForm from './NewTaskForm';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';

function App() {

  const dispatch = useDispatch();
  const todosRef = useSelector(st => st.todos);

  function addTask(newTodo) {
    dispatch({ type: 'ADD_TASK', todo: newTodo });
  }

  function deleteTask(id) {
    dispatch({ type: 'DELETE_TASK', id: id });
  }

  const tasks = todosRef.map(t => 
    <Todo 
      key={t.id}
      id={t.id}
      taskName={t.taskName}
      deleteTask={deleteTask}
    />
  )

  return (
    <div className="App">
      <NewTaskForm addTask={addTask}/>
      {tasks}
    </div>
  );
}

export default App;
