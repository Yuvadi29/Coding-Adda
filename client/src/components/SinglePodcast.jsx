import React from 'react';

const SinglePodcast = ({ title, thumbnailUrl, videoId, publishedAt, description }) => {
  console.log(videoId);

  const getDate = (publishedAt) => {
    const newDate = new Date(publishedAt);
    // Using toLocaleString for better formatting
    const date = newDate.toLocaleString();
    return date;
  }

  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src={thumbnailUrl} alt="Thumbnail URL" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">PODCAST</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
      <div className="my-4">
        {/* <div className="flex space-x-1 items-center">
          <p className='text-black line-clamp-4'>{description}</p>
        </div> */}
        {/* <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 mb-1.5" fill="" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l4-4m0 0l4 4m-4-4v7m0 0V3m0 7H8m0 0h8"></path>
            </svg>
            <p className='text-black'>{getDate(publishedAt)}</p>
          </span>
        </div> */}

        <a href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel="noopener noreferrer">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default SinglePodcast;
