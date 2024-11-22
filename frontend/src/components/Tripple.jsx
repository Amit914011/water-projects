import React, { useState } from "react";
import bannerImage from "../assets/trippel banner image.webp";
import tri1 from "../assets/tri1.jpg";
import tri2 from "../assets/tri2.jpg";
import tri3 from "../assets/tri3.jpg";
import tri4 from "../assets/tri4.jpg";
import tri5 from "../assets/tri5.jpg";
import tri6 from "../assets/tri6.jpg";
import tri7 from "../assets/tri7.jpg";
import tri8 from "../assets/tri8.jpg";
import tri9 from "../assets/tri9.jpg";
import tri10 from "../assets/tri10.jpg";
import tri11 from "../assets/tri11.jpg";
import tri12 from "../assets/tri12.jpg";
import tri13 from "../assets/tri13.jpg";




export default function Tripple() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      images: [
        {
          src: tri1,
          name: "Elmer",
          paragraph: "30 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: tri2,
          name: "Mark",
          paragraph: "30 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
        {
          src: tri3,
          name: "Oliver",
          paragraph: "23 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
        {
          src: tri4,
          name: "Rommel",
          paragraph: "23 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
        {
          src: tri5,
          name: "Arnold",
          paragraph: "23 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
        {
          src: tri6,
          name: "Christian",
          paragraph: "16 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
        {
          src: tri7,
          name: "Muhammad",
          paragraph: "16 December Triple 100",
          paragraph2: " Raffle Winner of AED",
          paragraph3: " 100,000",
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          src: tri8,
          name: "Vedula",
          paragraph: "16 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: tri9,
          name: "Aamir",
          paragraph: "9 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: tri10,
          name: "Melkamu",
          paragraph: "9 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
        {
          src: tri11,
          name: "Meenakshisundaram",
          paragraph: "2 December Triple 100",
          paragraph2: "Raffle Winner of AED",
          paragraph3: "100,000",
        },
       ],
    },
    {
      id: 3,
      images: [
        {
          src: tri12,
          name: "Sreeju",
          paragraph: "11 November Draw",
          paragraph2: "Winner of AED 20 Million",
          
        },
        {
          src: tri13,
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
          Triple the Thrills  
          </h1>
          <p className="mb-16">
          Every Saturday, three lucky champions win a spectacular AED 100,000 each in the Triple 100 Raffle draw! Will you be part of the club and stand out as one of our next inspiring winners? Simply enter on Saturday for a chance to join.
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
