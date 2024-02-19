import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div className='flex mb-4 mt-2 ml-5 w-full'>
      <img className='h-8 w-8 m-1' src="https://cdn.iconscout.com/icon/free/png-512/free-user-573-130413.png?f=webp&w=256" alt="user-icon" />
      <div className="font-normal">
        {
          comments.name
        } <br />
        {comments.comment}
        <div className=" -ml-6 border border-l-black">
          {comments.replies.map((curr, i) => <Comments key={i} comments={curr} /> ) }
        </div>
      </div>
    </div>
  )
}

export default Comments