import React, { useEffect, useRef } from 'react';
import "./Home.css";
import Typed from 'typed.js';
import splitting from "splitting";

const links = [
  { name: "Listen Podcasts", href: "/podcasts" },
  { name: "Explore Playlists", href: "/playlists" },
  { name: "Our values", href: "#" },
];
const stats = [
  { name: 'Podcasts', value: '10' },
  { name: 'Subscribers', value: '1.3K+' },
  { name: 'Videos ', value: '215' },
]


const Home = () => {

  const textRef = useRef(null);

  useEffect(() => {
    // Typed.js initialization for typing effect
    const options = {
      strings: ['', 'Coding.', 'Tech.', 'Podcasts.'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    };
    const typed = new Typed('.text', options);

    // GSAP animation using SplitText
    if (textRef.current) {
      splitting({ target: textRef.current });
    }
    

  }, []);

  return (
    <div>
      <section className="info-section">
        <div className="left-part">
          <h1 ref={textRef}>
            <span className="d-flex">Coding Adda</span>{' '}
            <span className="text"></span>
          </h1>
          <p>Awesome Tutorials, Podcasts every Tuesday and Friday.</p>
          <a href="https://www.youtube.com/@Coding_adda" className="book-link">
            <span className="linktext">Watch Now</span>
            <span className="arrow">
              <span></span>
            </span>
          </a>
        </div>
        <div className="right-part">
          <div className="bg-line">
            <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" className='text-[#1b80c8]' alt="Line" />
            <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line" />
          </div>

          <div className="main-grid d-flex">
            <div className="box">
              <span>Photography</span>
            </div>
            <div className="box">
              <div className="bg-img">
                <img src="https://www.yudiz.com/codepen/photography-banner/photography.png" alt="Photography" />
              </div>
            </div>
            <div className="box">
              <span>Under Water</span>
            </div>
            <div className="box">
              <span>VFX</span>
            </div>
            <div className="box">
              <div className="bg-img">
                <img src="https://www.yudiz.com/codepen/photography-banner/VFX.png" alt="VFX" />
              </div>
            </div>
            <div className="box">
              <div className="bg-img">
                <img src="https://www.yudiz.com/codepen/photography-banner/under-water.png" alt="Under Water" />
              </div>
            </div>
            <div className="box">
              <span>Videography</span>
            </div>
            <div className="box">
              <div className="bg-img">
                <img src="https://www.yudiz.com/codepen/photography-banner/Videography.png" alt="Videography" />
              </div>
            </div>
          </div>

          <div className="bg-circle-h-line">
            <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle" />
            <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle" />
            <img src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg" alt="Horizontal-circle" />
          </div>
          <div className="bg-dash-circle">
            <img src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg" alt="Dash-circle" />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1610351038317-1baed1ec74e7?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="podcast-bg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center sm:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Listen to Our Podcasts</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Learn about the recent trends for any of the domains by listening to our Podcasts wherein we talk with experts from the industry of different domains.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Playlist section option1 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore Our Playlists</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/playlists" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch Courses
            </a>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;

// text-[210px]
