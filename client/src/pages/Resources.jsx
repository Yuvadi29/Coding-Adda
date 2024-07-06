import React, { useEffect, useState } from 'react';
import axios from "axios";
import ResourceCard from "../components/ResourceCard";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
        // <div className='py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6'>
        //     <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        //         <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white'>Our Resources</h2>
        //         <p className="font-light text-gray-500 sm:text-xl">Some of Our Resources</p>
        //     </div>
        //     <div className="grid grid-cols-1 lg:grid-cols-2">
        //         {resources.map((resource) => (
        //             <div key={resource?.id}>
        //                 <ResourceCard resource={resource} />
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className="flex flex-col min-h-dvh">
            <main className="flex-1 py-12 md:py-16 lg:py-20 ">
                <div className="container mx-auto px-4 md:px-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        <div className='border bg-black '>
                            <h2>
                                <h3>CSS Cheatsheet</h3>
                                <p>
                                    A comprehensive cheatsheet covering all the essential CSS properties and their usage.
                                </p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border bg-black'>
                            <h2>
                                <h3>JavaScript Fundamentals</h3>
                                <p>A beginner-friendly guide to the core concepts of JavaScript.</p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Access
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border bg-black'>
                            <h2>
                                <h3>React Cheatsheet</h3>
                                <p>
                                    A quick reference guide to the most commonly used React concepts and APIs.
                                </p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border bg-black'>
                            <h2>
                                <h3>Git Cheatsheet</h3>
                                <p>A handy reference for the most common Git commands and workflows.</p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border bg-black'>
                            <h2>
                                <h3>Figma Design Basics</h3>
                                <p>A beginner's guide to the essential tools and features in Figma.</p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Access
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border bg-black'>
                            <h2>
                                <h3>Accessibility Checklist</h3>
                                <p>
                                    A comprehensive checklist to ensure your web projects are accessible to all users.
                                </p>
                            </h2>
                            <div>
                                <div className="flex justify-end">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Resources;
