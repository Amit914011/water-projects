import React from "react";
import blogimage1 from '../assets/Living_with_Cerebral_Palsy_9d9f4205a2.jpg'
import blogimage2 from '../assets/draw_161_winner_c57e0a8b94.jpg'
import blogimage3 from '../assets/draw_161_6209075bbf.jpg'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
    //   title: "Understanding React.js",
      description: "EWINGS announces sponsorship of Bilal Hafeez's inspiring autobiography, 'An Extraordinary Life: Living with Cerebral Palsy'",
      image: blogimage1,
    },
    {
      id: 2,
    //   title: "Mastering Tailwind CSS",
      description: "Meet the latest Mahzooz multi-millionaires",
      image: blogimage2,
    },
    {
      id: 3,
    //   title: "JavaScript Tips and Tricks",
      description: "Mahzooz crowns two new multi-millionaires at final draws for 2023",
      image: blogimage3,
    },
  ];

  return (
    <div className="bg-gray-10 mt-36">
      {/* Header */}
     

      {/* Blog Posts */}
      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Latest Blogs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
};

export default Blogs;
