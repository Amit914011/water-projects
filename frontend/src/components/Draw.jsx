import React from 'react'
import image from '../assets/mahzooz_lucky_draw_desktop_en_3f186c2bc6.webp'
import image2 from '../assets/Watch_the_draw_3de5f390d3.png'
import image3 from '../assets/Previous_draw_results_3adb076bb0.png'
import image4 from '../assets/Previous_draw_shows_76e486fd2b.png'
import image5 from '../assets/Winners_5ff9f739ad.png'
export default function Draw() {
  return (
    <div>
      <div className='mt-36 px-14'>
        <img src={image} className='m-auto' alt="" />
      </div>
      <div className='px-14 my-14'>
        <h1 className='text-3xl font-bold mb-2'>Tune in Every Saturday</h1>
        <p className='text-gray-600'>Watch the live stream of Mahzooz Saturday Millions every Saturday at 9:00 pm (UAE time) to find out if you’ve won a prize! Stream the live show from the Mahzooz website, our <span className='hover:text-blue-600 text-black cursor-pointer font-bold'><a href="https://www.facebook.com/MyMahzooz">Facebook page</a></span>, or <span className='text-black hover:text-blue-600 cursor-pointer font-bold'><a href="https://www.youtube.com/c/mymahzooz">our YouTube channel.</a></span> </p>
        <br />
        <h1 className='text-3xl font-bold mb-2'>Discover the Winning Numbers</h1>
        <p className='text-gray-600 mb-3'>We will display the winning numbers on our website homepage directly after every draw and send them to participants via email. To verify that you have won a prize, check the <u> Winnings Balance</u> section under <u>My Account.</u></p>
        <p className='text-gray-600'>*Terms and Conditions apply</p>
      </div>
      <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 px-14 gap-5 mb-10'>
        <div className='w-full h-[300px] bc flex flex-col justify-center items-center'>
            <img src={image2} alt="" />
            <p>WATCH THE DRAW</p>
        </div>
        <div className='w-full h-[300px] bc flex flex-col justify-center items-center'>
            <img src={image3} alt="" />
            <p>PREVIOUS DRAW RESULTS</p>
        </div>
        <div className='w-full h-[300px] bc flex flex-col justify-center items-center'>
            <img src={image4} alt="" />
            <p>PREVIOUS LIVE DRAWS</p>
        </div>
        <div className='w-full h-[300px] bc flex flex-col justify-center items-center'>
            <img src={image5} alt="" />
            <p>WINNERS</p>
        </div>
        
        
      </div>
    </div>
  )
}
