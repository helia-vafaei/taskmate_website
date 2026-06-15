import React from 'react';
import { useState } from 'react'; 


const AddTask = (props) => {     
    
    const [taskName, setTaskName] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        const date = new Date();

        if(props.taskEdit.id){
            const updatedTaskList = props.taskList.map((task)=>
                task.id === props.taskEdit.id
                ? { ...task, name: props.taskEdit.name, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` }
                : task
            );

            props.setTaskList(updatedTaskList);
            props.setTaskEdit({});
        }
        else {
            if(!taskName.trim())
                return;
            const newTask = {
                id: Math.floor(Math.random()*1000),
                name: taskName,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            };

            props.setTaskList(prev => [...prev, newTask]);
            setTaskName('');
        }
    }

    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="task"
                autoComplete="off"
                placeholder="add task"
                maxLength="25"
                value={props.taskEdit.id ? props.taskEdit.name : taskName}
                onChange={(e) => {
                    if (props.taskEdit.id) 
                        props.setTaskEdit({ ...props.taskEdit, name: e.target.value });
                    
                    else 
                        setTaskName(e.target.value);
                    
                }}
                />
                <button type="submit">{props.taskEdit.id ? 'Edit Task' : 'Add Task'}</button>
            </form>
        </section>
    );
}

export default AddTask;