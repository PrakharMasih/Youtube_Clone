import React from 'react'

const Button = ({title}) => {
  return (
    <button className='pl-3 pr-3 p-1 m-2 bg-stone-100 rounded-lg text-sm font-medium hover:bg-stone-200' >{title}</button>
  )
}

export default Button