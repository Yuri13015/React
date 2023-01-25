import React from 'react'
import './Task.css'

function Task() {
  const liste=[{
    id:'l1',
    tache:"Faire les courses",
    budget:"148.99$"
  },{
    id:'l2',
    tache:"Mettre l'essence",
    budget:"50$",
  },{
    id:'l3',
    tache:"Loisir",
    budget:"190$",
  }];
  return (
    <div>
         {liste.map((tache,index)=>{
          return(<h1 className='list' key={tache.id} >{tache.tache} {tache.budget} </h1>)
         })}
    </div>
 
  )
}

export default Task