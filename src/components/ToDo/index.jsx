import React from 'react'
import s from './style.module.css';

export default function ToDo({id, title, done}) {
    const doneStyle = {
        color: 'grey',
        textDecoration: 'line-through'
    }
  return (
    <div>
    <div style={done ? doneStyle : {}} className={s.toDoCard}>
        <input type="radio" id= "radioButton" value={title}/>
        <p>{title}</p>
    </div>
    </div>
  )
}
