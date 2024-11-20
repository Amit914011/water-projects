import React from 'react'
import image from '../assets/support_initiatives_desktop_en_8dbd279ea5.webp'
import image2 from '../assets/csr_framework_8b5d1310a3.png'
import image3 from '../assets/Comm_Colab_ec5fd6a2b4.png'
import image4 from '../assets/Comm_projects_b4f4f2bfb1.png'
import image5 from '../assets/CSR_videos_f38fb85868.png'
import { Link } from 'react-router-dom'

export default function SupportInitiatives() {
    const data=[
        {image:image2,para:'CSR FRAMEWORK',linkUrl:'/'},
        {image:image3,para:'COMMUNITY COLLABORATIONS',linkUrl:'/'},
        {image:image4,para:'COMMUNITY PROJECTS',linkUrl:'/'},
        {image:image5,para:'CSR VIDEOS',linkUrl:'/'},
       
    ]

  return (
    <div className='pb-10'>
    <div className='m-auto mt-10'>
        <img src={image} alt="" className='m-auto'/>
    </div>
    <div className='p-10'>
        <h1 className='text-2xl text-black font-bold mb-2'>OUR SOCIAL RESPONSIBILITY</h1>
        <p>Corporate Social Responsibility is at the heart of everything [companyName]does. Guided by four inter-connected pillars, Mahzooz's CSR impact contributes to a better society and to creating a positive change.</p> <br />
        <p>Whether dealing with the community, its employees, its business practices, or its environmental initiatives, [companyName]operates in a transparent and a responsible manner and is passionate about making a social impact, both in the local community and beyond.</p> <br />
        <p>In addition to making winners every week, Mahzooz, through its social responsibility, continues to collaborate with several non-profit partners on projects that make a difference in people's lives.</p>
    </div>
    <div className='px-10 flex gap-3 '>
       {
        data.map((data,index)=>(
            <div className='bc w-[25%] h-[400px] flex flex-col justify-start items-center pt-10' key={index}>
            <img src={data.image} alt="" className='w-[180px]' />
            <Link to={data.linkUrl} className='pt-10'>{data.para}</Link>
        </div>
        ))
       }
    </div>
    </div>
  )
}
