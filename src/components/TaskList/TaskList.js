import React from "react"

function TaskList({ todo, setTodo }) {

    function statusTodo(id) {
        let newTodo = [...todo].filter( item => {
            if (item.id == id) {
                item.status = !item.status
            }
        })
        setTodo(newTodo)
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }


    return (
        <div>
            {
                todo.map( item => (
                    <div key={item.id}>
                        <button onClick={ () => statusTodo(item.id)}>закрыть</button>
                        <div>{ item.title }</div>
                        <button onClick={ () => deleteTodo(item.id)}>удалить</button>
                    </div>
                ))
            }
        </div>
        
    )
}

export default TaskList;