"use client"

import { useState } from "react"

export default function ContactForm() {
    const [status, setStatus] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        })

        if (res.ok) {
            setStatus("Message sent!")
            form.reset()
        } else {
            setStatus("Something went wromg.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <input
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Send Message
            </button>
            {status && <p className="text-center text-gray-700 dark:text-gray-300 mt-2">{status}</p>}
        </form>
    )
}