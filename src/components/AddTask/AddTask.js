import React, {useState} from 'react'
import {v4} from 'uuid'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './AddTask.module.css'

function AddTask({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if (value === '') return

        let newTodo = [...todo, {
            id: v4(),
            title: value,
            status: true
        }]
        setTodo(newTodo)
        setValue('')
    }

    return (
        <Row>
            <Col className={s.addTaskForm}>
                <FormControl placeholder='Добавить задачу' 
                    value={value} 
                    onChange={ (e) => 
                    setValue(e.target.value)} 
                    onKeyDown={ (e) => { if (e.key === 'Enter') saveTodo() }}
                />
                <Button className={s.btn} variant="outline-primary" onClick={saveTodo}>сохранить</Button>
            </Col>
        </Row>
    )
}

export default AddTask