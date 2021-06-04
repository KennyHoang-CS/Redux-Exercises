import { useState } from "react";
import uuidv4 from 'uuid-v4';

function NewTaskForm({ addTask }) {
    
    const INITIAL_STATE = {
        taskName: ''
    }

    const [form, setForm] = useState(INITIAL_STATE);

    function handleChange(e) {
        const {name, value} = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTask({ ...form, id: uuidv4() });
        setForm(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="taskName"
                    onChange={handleChange}
                    value={form.taskName}
                    placeholder="Enter new task name."
                />
                <button>Add New Task</button>
            </form>
        </div>
    )
}

export default NewTaskForm;