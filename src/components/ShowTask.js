const ShowTask = (props) => {
    function handleClearAll(){
        props.setTaskList([]);
    }

    function handleDelete(id){
        props.setTaskList(props.taskList.filter((task)=>(task.id !== id)));
    }

    function handleEdit(id){
        props.setTaskEdit(props.taskList.find((task)=>task.id === id));
    }

    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{props.taskList.length}</span>
                </div>
                <span className="clearAll" onClick={handleClearAll}>Clear All</span>
            </div>
            <ul>
                {props.taskList && props.taskList.map((task)=>
                    (<li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>                
                        
                        <span className='edit' onClick={()=>handleEdit(task.id)}>Edit</span>
                        <span className='delete' onClick={()=>handleDelete(task.id)}>Delete</span>
                    </li>
                ))}
                
            </ul>
        </section>
    );
}

export default ShowTask;