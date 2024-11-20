import React, { useState } from 'react';

// Sample Video Data (updated URLs for embedding)
const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/z92dhZHkY6k" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/-N2FrYA8khY" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/kwqb-6QyYt8" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/CZHX9rmn5fY" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/video5" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/video6" },
  { id: 7, title: "Video 7", url: "https://www.youtube.com/embed/video7" },
  { id: 8, title: "Video 8", url: "https://www.youtube.com/embed/video8" },
  { id: 9, title: "Video 9", url: "https://www.youtube.com/embed/video9" },
  { id: 10, title: "Video 10", url: "https://www.youtube.com/embed/video10" },
];

const PreviousLiveDraws = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  // Calculate the current videos to display
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Pagination Logic
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="video-gallery p-8 md:p-16">
      <h1 className="text-3xl font-bold text-center mb-6">Past Draw Shows</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-blue-100 rounded p-10">
        {currentVideos.map((video) => (
          <div key={video.id} className="video-card p-5 bg-blue-200 rounded-lg shadow-lg">
            <h3 className="text-center mt-2 font-semibold">{video.title}</h3>
            <iframe
              width="100%"
              height="215"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination mt-6 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreviousLiveDraws;
