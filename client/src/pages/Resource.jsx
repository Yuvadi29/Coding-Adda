import React, { useEffect, useState } from 'react';
import ResourceDetail from '../components/ResourceDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Resource = () => {
    const { id } = useParams();
    const [resource, setResource] = useState(""); 

    console.log(id);

    useEffect(() => {
        console.log(`Resource id: ${id}`);

        const getIndividualResource = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/resources/${id}?populate=*`);
                console.log(response.data.data);
                setResource(response.data.data); // Set state with response data
            } catch (error) {
                console.error('Error fetching resource:', error);
            }
        };

        getIndividualResource();
    }, [id]);

    return (
        <div>
            {resource && <ResourceDetail resource={resource} />}
        </div>
    );
}

export default Resource;
