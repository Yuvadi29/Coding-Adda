import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className="w-full max-w-md mx-auto">
                <div>
                    <h2>Get in Touch</h2>
                    <p>
                        Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
                        possible.
                    </p>
                </div>
                <div>
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="name">Name</label>
                            <input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Tell us how we can help" className="min-h-[120px]" />
                        </div>
                        <button type="submit" className="w-full">
                            Submit
                        </button>
                    </form>
                </div>
                <footer className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2" prefetch={false}>
                        Terms of Service
                    </Link>
                    and{" "}
                    <Link href="#" className="underline underline-offset-2" prefetch={false}>
                        Privacy Policy
                    </Link>
                    .
                </footer>
            </div>
        </div>
    )
}

export default Contact