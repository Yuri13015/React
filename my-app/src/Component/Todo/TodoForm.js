import React, {useState} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState('');

    const handleSubmit = e=>{
        e.preventdefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input 

        });
    };
  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
             type="text"
             placeholder='Add a todo' 
             value={input}
             name='text'
             className='todo-input'/>
             <button className='todo-button'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm