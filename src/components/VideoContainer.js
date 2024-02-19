import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videodata, setVideodata] = useState({});

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    const resp = await fetch(URL);
    const data = await resp.json();
    // console.log(data.items)
    setVideodata(data.items)
    // console.log("stste", videodata)
  }

  return (
    <div className='block' >
      <ButtonList />
      <div className='flex flex-wrap' >
        {
          videodata.length &&
          videodata?.map((curr, i) => {
            return <Link to={"/watch?v="+ curr.id } key={curr.id}>
              <VideoCard videoData={curr} />
            </Link>

          })
        }
      </div>

    </div>
  )
}

export default VideoContainer