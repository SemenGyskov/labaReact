import { useState } from 'react';
import React from 'react';

function Todo(){
const initTasks=[
    'Task1','Task2','Task3'
  ] //переменная с массивом
  const [edit,setEdit]=useState(null)
  const[tasks,setTasks]=useState(initTasks)

  const result = tasks.map((task,index) =>{
    return <li key={index} onClick={()=> startEdit (index)} className=""><input type='checkbox' className='check' />{task} <button className='btn' onClick={()=> remItem(index)}>Delete</button><hr></hr></li>
  })
  function remItem(index){  //Функция для удаления элемента
    setTasks([...tasks.slice(0, index), ...tasks.slice(index +1)])
  }
  function startEdit(index){
    setEdit(index)
  }
  function editItem(event){
    setTasks([...tasks.slice(0, edit), event.target.value, ...tasks.slice(edit +1)])
  }
  function createItem(){ //Функция для создания элемента
    if (!edit){
      const res = [...tasks, '']
      setTasks(res)
      setEdit(res.length -1)
    }
  }
  function stopEdit(){
    setEdit(null)
  }
  return (
    <div className="App">
      <h1 className='titles'>todos</h1>
      <input value={edit ? tasks[edit] : ''} className='inp' onChange={editItem} onFocus={createItem} onBlur={stopEdit} placeholder="Add Todo..." />{/* Инпут, для добавления и изменения элементов */}
     {result} {/* вывод результата */}
    </div>
  );}
  export default Todo;