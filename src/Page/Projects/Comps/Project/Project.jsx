import React from 'react'
import './Project.css'

export default function Project({index, title, setModal}) {
  return (
    <div className='project' 
    onMouseLeave={()=>{setModal({active:false, index:index})}}
    onMouseEnter={()=>{setModal({active: true, index:index})}}>
      <h2>{title}</h2>
      <p>Design</p>
    </div>
  )
}
