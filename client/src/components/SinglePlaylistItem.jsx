import React from 'react';

const SinglePlaylistItem = ({ id, title, description, thumbnailUrl }) => {
    return (
        <div className='border border-white rounded-lg'>
            <div className="h-auto w-full overflow-hidden rounded-lg bg-gray-200">
                <a href={`https://www.youtube.com/watch?v=${id}`} target='_blank' rel="noreferrer">
                    <img
                        className="object-contain h-full w-full object-center group-hover:opacity-75"
                        src={thumbnailUrl}
                        alt="videoThumbnail"
                    />
                </a>
            </div>
            <h3 className="mt-4 text-2xl text-white font-bold">{title}</h3>
            <div className="mt-1 text-md font-normal text-gray-300 flex" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                {description}
            </div>
            <a href={`https://www.youtube.com/watch?v=${id}`} target='_blank' rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Watch Now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    );
}

export default SinglePlaylistItem;
