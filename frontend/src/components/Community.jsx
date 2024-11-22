import React from 'react'
import image from '../assets/mahzooz_community_desktop_en_650f972f87.webp'
import image2 from '../assets//Support_initiatives_9c7e405903.png'
import image3 from '../assets/Fraud_awareness_330e25e2a8.png'

export default function Community() {
  return (
    <div className='p-14'>
      <div className='mt-36'>
        <img src={image} alt="" className='m-auto mb-14' />
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-2'>Mahzooz cares</h1>
        <p className='text-gray-600'>Mahzooz plays an active role in encouraging people to achieve their dreams. Through an unwavering, long-term commitment, Mahzooz develops diverse social responsibility programs that play an integral role towards the development and well-being of communities.</p>
        <h1 className='text-3xl font-bold mb-2'>Our commitment</h1>
        <p className='text-gray-600'>We will take measures against any person found cheating or attempting to cheat or defraud us or any of our participants. This includes fraudulent payments, use of stolen cards or any other unlawful transaction.</p>
        <h1 className='text-3xl font-bold mb-2'>Reach out to us</h1>
        <p className='text-gray-600'>We are here for you and we are here for the community. Our team is available and ready to answer any questions or concerns you may have. Reach out to us anytime and we are happy to assist you.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
            <div className='w-full h-[350px] bc  flex justify-center items-center flex-col '>
                <img src={image2} alt="" className='mb-7'/>
                <a href='/support'>SUPPORT INITIATIVES</a>
            </div>
            <div className='w-full h-[350px] bc flex justify-center items-center flex-col '>
                <img src={image3} alt="" className='mb-7'/>
                <a href='/fraud-awareness'>FRAUD AWARENESS</a>
            </div>
        </div>
      </div>
    </div>
  )
}
