import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments';

const WatchPage = () => {

  const commentsData = [
    {
      name: 'User Name',
      comment: 'An amazing comment',
      replies: []
    },
    {
      name: 'User Name',
      comment: 'An amazing comment',
      replies: [
        {
          name: 'User Name',
          comment: 'An amazing comment',
          replies: [
            {
              name: 'User Name',
              comment: 'An amazing comment',
              replies: []
            },
            {
              name: 'User Name',
              comment: 'An amazing comment',
              replies: [
                {
                  name: 'User Name',
                  comment: 'An amazing comment',
                  replies: []
                },
              ]
            },
          ]
        },
        {
          name: 'User Name',
          comment: 'An amazing comment',
          replies: []
        },
        {
          name: 'User Name',
          comment: 'An amazing comment',
          replies: []
        },
      ]
    },
    {
      name: 'User Name',
      comment: 'An amazing comment',
      replies: []
    },
    {
      name: 'User Name',
      comment: 'An amazing comment',
      replies: []
    },
  ]

  const [searchParams] = useSearchParams();

  return (
    <div className='flex flex-col'>
      <div>
        <iframe className='rounded-2xl ml-10 mt-5' width="853" height="480"
          src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="TypeScript Tutorial #2 - Compiling TypeScript"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
      <div className='m-10 ml-10 mt-5 bg-gray-200  rounded-lg p-5'>
        <h2 className='font-semibold text-2xl mb-4'>Comments Section:</h2>
        {
          commentsData.map((curr, i) => <Comments key={i} comments={curr} />)
        }

      </div>
    </div>
  )
}

export default WatchPage