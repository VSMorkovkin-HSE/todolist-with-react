import React, {useState} from 'react'
import {v4} from 'uuid'

function AddTask({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        let newTodo = [...todo, {
            id: v4(),
            title: value,
            status: true
        }]
        setTodo(newTodo)
        setValue('')
    }

    return (
        <div>
            <input placeholder='введите задачу' value={value} onChange={ (e) => setValue(e.target.value)}/>
            <button onClick={saveTodo}>сохранить</button>
        </div>
    )
}

export default AddTask