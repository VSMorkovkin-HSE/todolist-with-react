import React, {useState} from "react"
import Icon from '@mdi/react';
import { mdiCheckboxBlankCircleOutline } from '@mdi/js';
import { mdiCheckboxMarkedCircle } from '@mdi/js';
import { mdiPencilOutline } from '@mdi/js';
import { mdiTrashCanOutline } from '@mdi/js';
import { Button, FormControl } from 'react-bootstrap'
import s from './TaskList.module.css';

function TaskList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function statusTodo(id) {
        let newTodo = [...todo].map( item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map (item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div className={s.task} key={item.id}>
                        {
                            edit === item.id ?
                                // change task items
                                <div className={s.taskItems}>
                                    <FormControl className={s.formControl} 
                                        onChange={ (e) => setValue(e.target.value) } 
                                        value={value}
                                        onKeyDown={ (e) => { if (e.key === 'Enter') saveTodo(item.id) }}
                                    /> 
                                    <Button className={s.btn} variant="outline-primary" onClick={ () => saveTodo(item.id) }>сохранить</Button>
                                </div>
                            :
                                // display task items
                                <div className={s.taskItems} >
                                    <button className={s.btn} onClick={ () => statusTodo(item.id) }>
                                        {
                                            item.status ?
                                                <Icon className={s.status} path={mdiCheckboxBlankCircleOutline} size={0.75} />
                                            :
                                                <Icon className={s.status} path={mdiCheckboxMarkedCircle} size={0.75} />
                                        }
                                    </button>
                                    <div className={ !item.status ? s.taskNameClose : s.taskName}>{ item.title }</div>
                                    <button className={s.btn} onClick={ () => editTodo(item.id, item.title) }>
                                        <Icon className={s.change} path={mdiPencilOutline} size={1} />
                                    </button>
                                    <button className={s.btn} onClick={ () => deleteTodo(item.id) }>
                                        <Icon className={s.delete} path={mdiTrashCanOutline} size={1} />
                                    </button>
                                </div>       
                        } 
                    </div>
                ))
            }
        </div>
        
    )
}

export default TaskList;