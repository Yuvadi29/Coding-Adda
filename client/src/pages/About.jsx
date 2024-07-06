import React from 'react'
import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Acme Inc: Innovating the Future
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Acme Inc is a leading technology company dedicated to revolutionizing the way the world interacts with
                                    the web. Founded in 2010, we have been at the forefront of innovation, providing cutting-edge solutions
                                    that empower businesses and individuals to thrive in the digital age.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/logo.png"
                                    width="200"
                                    height="200"
                                    alt="Coding Adda Logo"
                                    className="w-full max-w-[200px]"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                            <div className="flex justify-center">
                                <img
                                    src="/logo.png"
                                    width="400"
                                    height="400"
                                    alt="Acme Inc Values"
                                    className="w-full max-w-[400px]"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission &amp; Values</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Empowering Businesses to Thrive</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Acme Inc, our mission is to empower businesses of all sizes to thrive in the digital landscape. We
                                    are driven by a set of core values that guide our every decision: innovation, integrity, and a
                                    relentless commitment to customer success.
                                </p>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our history is one of continuous growth and evolution, adapting to the ever-changing needs of the
                                    market. From our humble beginnings as a small startup, we have grown to become a trusted partner for
                                    businesses around the world, helping them navigate the complexities of the digital age.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Coding Adda Team</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our talented team of experts is dedicated to delivering exceptional results for our clients.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar >
                                        <img src="/host-1.png" />
                                        <span>Aditya</span>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">Aditya Trivedi</h3>
                                        <p className="text-sm text-muted-foreground">Co-Founder</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar>
                                        <img src="/host-1.png" />
                                        <span>Aditya</span>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">Harikrishnan Prassanakumar</h3>
                                        <p className="text-sm text-muted-foreground">Co-Founder</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar>
                                        <img src="../../public/host-1.png" />
                                        <span>Aditya</span>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">Michael Johnson</h3>
                                        <p className="text-sm text-muted-foreground">Head of Engineering</p>
                                    </div>
                                </div>
                                {/* <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>ED</AvatarFallback>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">Emily Davis</h3>
                                        <p className="text-sm text-muted-foreground">Head of Design</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>DL</AvatarFallback>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">David Lee</h3>
                                        <p className="text-sm text-muted-foreground">Head of Product</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <RxAvatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>SW</AvatarFallback>
                                    </RxAvatar>
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium">Sarah Wilson</h3>
                                        <p className="text-sm text-muted-foreground">Head of Marketing</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>

        </div>
    )
}

export default About