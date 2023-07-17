import React, { useState } from 'react'
import { styled } from 'styled-components';

const Input = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


const input = (e) =>{
  setTodo(e.target.value)
}

const addTodo = () =>{
  if (todo !== ''){
    setTodos([...todos, todo])
    setTodo('')
  }
}

const dalete = (text) =>{
  const newTodos = todos.filter((todo)=>{
    return todo !== text
  })
  setTodos(newTodos)
}

  
  return (
    <div>
      <input type='text' placeholder='Name' value={todo} onChange={input}/>
      <button className='add-button' onClick={addTodo}>add</button>

      <ul>
        {todos.map((todo, index) =>(
          <div style={{display:'flex', flexDirection:'row', marginTop:'10px', width:'200px', justifyContent:'space-between'}}>
            <Li col={todo} style={{listStyle:"none"}} key={index}>{todo}</Li>
            <button  onClick={()=>{dalete(todo)}}>dalete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Input



const Li = styled.li`
    color: ${props => props.col};
`

