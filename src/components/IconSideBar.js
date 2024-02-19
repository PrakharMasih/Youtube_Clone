import React from "react";
import homeIcon from '../static/image/icons/home-page.png'
import you from '../static/image/icons/movie.png'
import subscribeIcon from '../static/image/icons/subscribe.png'
import shortsIcon from '../static/image/icons/video.png'

const IconSideBar = () => {
    return (
        <>
            <div className="w-24 h-100 sticky top-10">
                <div className=" w-20 ml-2 flex flex-col sticky top-20 ">
                    <button className=" flex flex-col justify-center w-full h-20 rounded-lg self-center p-1 z-10 hover:bg-gray-100 cursor-pointer" >
                        <img className="w-6 h-6 self-center" src={homeIcon} alt="homeicon" name='homeicon' />
                        <label className="text-xs self-center cursor-pointer" htmlFor="homeicon">Home</label>
                    </button>
                    <button className="flex flex-col justify-center w-full h-20 rounded-lg self-center p-1 z-10 hover:bg-gray-100 cursor-pointer" >
                        <img className="w-6 h-6 self-center" src={shortsIcon} alt="shortsicon" name='shortsicon' />
                        <label className="text-xs self-center cursor-pointer" htmlFor="shortsicon">Shorts</label>
                    </button>
                    <button className="flex flex-col justify-center w-full h-20 rounded-lg self-center p-1 z-10 hover:bg-gray-100 cursor-pointer" >
                        <img className="w-6 h-6 self-center" src={subscribeIcon} alt="subscriptionsicon" name='subscriptionsicon' />
                        <label className="text-xs self-center cursor-pointer" htmlFor="subscriptionsicon">Subcriptions</label>
                    </button>
                    <button className="flex flex-col justify-center w-full h-20 rounded-lg self-center p-1 z-10 hover:bg-gray-100 cursor-pointer" >
                        <img className="w-6 h-6 self-center" src={you} alt="youicon" nmae='youicon' />
                        <label className="text-xs self-center cursor-pointer" htmlFor="youicon">You</label>
                    </button>



                </div>
            </div>
        </>
    )
}

export default IconSideBar;