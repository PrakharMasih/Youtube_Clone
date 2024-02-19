import React from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({videoData}) => {
    const { snippet, statistics } = videoData;
    const { title, thumbnails, channelTitle } = snippet;
    const { viewCount, likeCount } = statistics;

    const boolSideBar = useSelector((store) => store.app.isMenuOpen)

    return (
            <div className={boolSideBar ? 'w-96 h-80 m-2 mb-10 mt-2' : 'w-96 h-80 mt-4 mb-10 ml-6 ' } >
                <img src={thumbnails?.medium?.url} alt="thumbnail" className='w-full bg-black h-52 rounded-2xl' />
                <h2 className='font-semibold m-2 mb-0 p-1' >{title}</h2>
                <h3 className='ml-2 p-1 pb-0 pt-0 text-gray-500' >{channelTitle}</h3>
                <h3 className='ml-2 p-1 pt-0 font-normal text-gray-500'>{viewCount} views - {likeCount} likes</h3>
            </div>
    )
}

export default VideoCard