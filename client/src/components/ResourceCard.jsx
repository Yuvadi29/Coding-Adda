import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {
    if (!resource) {
        return null;
    }

    const { id, attributes } = resource;
    const { Title, publishedAt, slug, category, CoverImage } = attributes;


    const getDaysCount = (publishedDate) => {
        const currentDate = new Date();
        const publishDateObj = new Date(publishedDate);
        const timeDiff = currentDate.getTime() - publishDateObj.getTime();
        const daysCount = Math.floor(timeDiff / (1000 * 3600 * 24));
        return daysCount;
    };

    return (
        <div className="grid gap-8 lg:grid-cols-2 mb-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[27rem]">
                <img
                    src={`http://localhost:1337${CoverImage?.data?.attributes?.url}`}
                    alt='CoverImage'
                    className='rounded-t-lg'
                />
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        {category}
                    </span>
                    <span className="text-sm">{`${getDaysCount(publishedAt)} days ago`}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{Title}
                </h2>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{slug}</p>
                <div className="p-2">
                    <Link to={`/resource/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
