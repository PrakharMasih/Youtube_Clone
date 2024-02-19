import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const title = [
        'All',
        'JavaScript',
        'React',
        'Music',
        'Jazz',
        'Gaming',
        '4K resolution',
        'Computer Programming',
        'Algorithm',
        'English Grammer',
        'Coding'
        
    ]
  return (
    <div className='flex sticky top-20 bg-white ' >
        {
            title.map((curr,i) => <Button title={curr} key={i}/>)
        }
    </div>
  )
}

export default ButtonList