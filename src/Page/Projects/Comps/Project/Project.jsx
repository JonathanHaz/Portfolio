import React from 'react'
import './Project.css'

export default function Project({index, title, setModal,link}) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className='project' onClick={handleClick}
    onMouseLeave={()=>{setModal({active:false, index:index})}}
    onMouseEnter={()=>{setModal({active:true, index:index})}}>
      <h2>{title}</h2>
      <p>Web Designer</p>
    </div>
  )
}
