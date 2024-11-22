import React, { useState } from "react";
import bannerImage from "../assets/mahzooz_millionaires_club_desktop_en_f13fb03374.webp";
import milli1 from "../assets/milli 1.jpg";
import milli2 from "../assets/milli 2.jpg";
import milli3 from "../assets/mill3.jpg";
import milli4 from "../assets/mill4.jpg";
import milli5 from "../assets/mill5.jpg";
import milli6 from "../assets/mill6.jpg";
import milli7 from "../assets/mill7.jpg";
import milli8 from "../assets/milli8.jpg";
import milli9 from "../assets/mill9.jpg";
import milli10 from "../assets/mill10.jpg";
import milli11 from "../assets/milli11.jpg";
import milli12 from "../assets/milli12.jpg";
import milli13 from "../assets/milli13.jpg";
import milli14 from "../assets/milli14.jpg";
import milli15 from "../assets/mill15.jpg";
import milli16 from "../assets/milli16.jpg";
import milli17 from '../assets/milli17.jpg'
import milli18 from '../assets/milli18.jpg'
import milli19 from '../assets/milli19.jpg'


export default function Millionaires() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      images: [
        {
          src: milli1,
          name: "Zenobia",
          paragraph: "30 December Draw ",
          paragraph2: "Winner of AED 10 Million",
        },
        {
          src: milli2,
          name: "Serhii",
          paragraph: "30 December Draw",
          paragraph2: " Winner of AED 10 Million",
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          src: milli3,
          name: "Omar",
          paragraph: "9 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli4,
          name: "Chanikarn",
          paragraph: "2 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli5,
          name: "Sayed",
          paragraph: "T2 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli6,
          name: "Reymund",
          paragraph: "25 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli7,
          name: "Sudarshan",
          paragraph: "25 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          src: milli8,
          name: "Faisal",
          paragraph: "25 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli9,
          name: "Yvonne",
          paragraph: "18 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli10,
          name: "Jeevitha",
          paragraph: "18 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli11,
          name: "Suresh",
          paragraph: "18 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli12,
          name: "Balkrishna",
          paragraph: "11 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli14,
          name: "Mohamed",
          paragraph: "4 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli15,
          name: "Sherien",
          paragraph: "4 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli16,
          name: "Bhagavath",
          paragraph: "4 November Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        
      ],
    },
    {
      id: 4,
      images: [
        {
          src: milli17,
          name: "Abdul Gafoor",
          paragraph: "28 October Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli18,
          name: "Sathiya",
          paragraph: "28 October Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: milli19,
          name: "Pratik",
          paragraph: "28 October Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        
      ],
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="mt-36">
        <img src={bannerImage} alt="" className="m-auto" />
      </div>
      <div className="min-h-screen  flex flex-col items-center py-10">
        <div className="w-full bg-white rounded-lg p-5 px-12 mb-16">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">
            Join the Club
          </h1>
          <p className="mb-16">
            Mahzooz has transformed the lives of over 64 millionaires, and we're
            just getting started! Participate every Saturday for a chance to
            steal the spotlight as our next inspiring winner.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pages[currentPage - 1].images.map((image, index) => (
              <div key={index} className="flex flex-col ">
                <img
                  src={image.src}
                  alt={image.name}
                  className="rounded-lg shadow-md w-full"
                />
                <h2 className="mt-2 text-2xl font-bold text-[#12A8E1]">{image.name}</h2>
                <p className="mt-1 text-gray-600">{image.paragraph}</p>
                <p className="mt-1 text-gray-600">{image.paragraph2}</p>
                <p className="mt-1 text-gray-600">{image.paragraph3}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700">{pages[currentPage - 1].content}</p>
        </div>
        <div className="flex flex-wrap justify-center mt-5 space-x-2">
          <button
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`px-3 py-2 border rounded-lg transition-all ${
                currentPage === page.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => handlePageChange(page.id)}
            >
              {page.id}
            </button>
          ))}
          <button
            className={`px-4 py-2 border rounded-lg ${
              currentPage === pages.length
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={handleNext}
            disabled={currentPage === pages.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
