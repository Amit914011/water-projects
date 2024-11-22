import React from 'react'
import banner from '../assets/hall_of_fame_main_desktop_banner.webp'
import pic from '../assets/Picture.png'
import video from '../assets/video.png'

export default function HallofFame() {
  return (
    <div>
      <div className='mt-36'>
            <img src={banner} alt="" className='m-auto' />
      </div>
      <div className='w-full px-10 my-10'>
        <div>
            <h1 className='text-3xl font-bold my-10 text-gray-700'>Meet Our Winners</h1>
        </div>
        <div>
            <p className='my-10'>Mahzooz's Hall of Fame celebrates our winners who dared to dream big! Let their incredible wins inspire you, as every Saturday with Mahzooz is a chance for your story to shine next in our Hall of Fame. Discover more about our winners by browsing the tabs below.</p>
        </div>
      </div>
      <div className='mt-16 grid lg:grid-cols-2 px-10 gap-5 my-16'>
        <div className='h-[500px] bc flex justify-center items-center flex-col'>
            <div><img src={video} alt="" /></div>
            <div className='mt-20 hover:bc w-[70%] text-center cursor-pointer'><p></p>Video</div>
        </div>
        <div className='h-[500px] bc flex justify-center items-center flex-col'>
            <div><img src={pic} alt="" /></div>
            <div className='mt-20 hover:bc w-[70%] text-center cursor-pointer'><p>Picture</p></div>
        </div>
       
      </div>
    </div>
  )
}
