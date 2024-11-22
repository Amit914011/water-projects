import React from 'react'
import aboutBanner from '../assets/about_us_desktop_en_13c4eba97d.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function About() {
   
      
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} bg-white hover:bg-gray-200 rounded-full p-2 shadow-md`}
            style={{
              ...style,
              display: "block",
              right: "10px",
              zIndex: 10,
              width: "50px",
              height: "50px",
            }}
            onClick={onClick}
          >
            <i className="fas fa-chevron-right" style={{ color: "black", fontSize: "24px" }}></i>
          </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} bg-white hover:bg-gray-200 rounded-full p-2 shadow-md`}
            style={{
              ...style,
              display: "block",
              left: "10px",
              zIndex: 10,
              width: "100px",
              height: "100px",
            }}
            onClick={onClick}
          >
            <i className="fas fa-chevron-left" style={{ color: "black", fontSize: "24px" }}></i>
          </div>
        );
      }
       
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };
    
      const videos = [
        {
          id: 1,
          url: "https://www.youtube.com/embed/ScMzIvxBSi4",
          title: "Video 1",
        },
        {
          id: 2,
          url: "https://www.youtube.com/embed/tgbNymZ7vqY",
          title: "Video 2",
        },
        {
          id: 3,
          url: "https://www.youtube.com/embed/KM4Xe6Dlp0Y",
          title: "Video 3",
        },
      ];
    
  return (
    <div>
      <div className='mt-36'>
        <img src={aboutBanner} alt="" className='m-auto mb-20'/>
      </div>
      <div className=" px-5">
      <div className=" mx-auto  rounded-lg p-6">
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Celebrate life-changing possibilities with Mahzooz – the UAE’s first
            and leading weekly draw known for its consistent and highest
            payouts, offering participants the chance to win big. We've made it
            easy to unlock millions of dirhams every Saturday, turning Saturday
            into the best – and luckiest – day of the week!
          </p>
          <p>
            In line with its mission to change people’s lives, Mahzooz has not
            only awarded millions to thousands of winners since 2021, but has
            also actively pursued positive social change through its community
            outreach programme. In partnership with a growing network of
            reputable NGOs and not-for-profit organisations, Mahzooz has
            impacted the lives of over 10,000 beneficiaries to date.
          </p>
        </div>
      </div>
      <div>
      <div className="py-10 bg-[#EAF7FC] px-5 rounded-lg mb-10">
      <div className="mx-auto rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Video</h2>
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={video.id} className="flex justify-center items-center p-3">
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
      </div>
    </div>
    </div>
  )
}
