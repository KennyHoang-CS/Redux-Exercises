

function Todo({ taskName, id, deleteTask }) {
    
    const handleDeleteTask = (id) => {
        deleteTask(id);
    }
    
    return (
        <div>
            <li>{taskName}</li>
            <button onClick={() => handleDeleteTask(id)}>Delete Task</button>
        </div>
    )
}

export default Todo;