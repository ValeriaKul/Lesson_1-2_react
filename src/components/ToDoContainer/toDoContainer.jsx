import React from 'react'
import ToDo from '../ToDo';


export default function ToDoContainer() {
    const todos = [
        {id: 1, title: 'run', done: false},
        {id: 2, title: 'eat', done: false},
        {id: 3, title: 'sleep', done: false},
        {id: 4, title: 'train', done: false},
        {id: 5, title: 'paint', done: false},
    ];

  return (
    <div>ToDo:
        {todos.map(todo => <ToDo key={todo.id} {...todo}/>)}
    </div>
  )
}
