import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import { Container } from 'react-bootstrap';

function App() {

  const [todo, setTodo] = useState([])

  return (
    <div className='App'>
        <Header />
        <Container>
          <AddTask todo={todo} setTodo={setTodo}/>
          <TaskList todo={todo} setTodo={setTodo} />
        </Container>
    </div>
    
  );
}

export default App;
