import React from 'react';
import Markdown from 'react-markdown';

const ResourceDetail = ({ resource }) => {
    const { attributes } = resource;
    const { Title, Description, publishedAt } = attributes;

    const getDate = (publishedDate) => {
        const publishDateObj = new Date(publishedDate);
        const formattedDate = publishDateObj.toLocaleDateString('en-GB');
        return formattedDate;
    }


    return (
        <div>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-900 antialiased ">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-smdark:text-white">
                                    <img class="mr-4 w-16 h-16 rounded-full" src="/logo.png" alt="Coding Adda" />
                                    <div>
                                        <p class="text-base text-gray-500 dark:text-gray-400">Coding Adda</p>
                                        <p class="text-base text-gray-500 dark:text-gray-400">
                                            {getDate(publishedAt)}
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{Title}</h1>
                        </header>
                        <p><Markdown>{Description}</Markdown></p>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default ResourceDetail