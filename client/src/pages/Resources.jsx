import React, { useEffect, useState } from 'react';
import axios from "axios";
import ResourceCard from "../components/ResourceCard";

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:1337/api/resources?populate=*");
                setResources(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6'>
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white'>Our Resources</h2>
                <p className="font-light text-gray-500 sm:text-xl">Some of Our Resources</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {resources.map((resource) => (
                    <div key={resource?.id}>
                        <ResourceCard resource={resource} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resources;
