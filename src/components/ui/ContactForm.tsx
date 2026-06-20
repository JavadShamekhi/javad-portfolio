"use client"

import toast from "react-hot-toast";
import {Dictionary} from "@/lib/i18n/types";

export default function ContactForm({dict}: { dict: Dictionary }) {

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				message: formData.get("message"),
			}),
		})

		if (res.ok) {
			toast.success(dict.contactForm.successToast)
			form.reset()
		} else {
			toast.error(dict.contactForm.errorToast)
		}
	}

	return (
			<form onSubmit={handleSubmit} className="space-y-5">
				<input
						name="name"
						placeholder={dict.contactForm.namePlaceholder}
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark: placeholder:text-gray-500"
						required
				/>
				<input
						type="email"
						name="email"
						placeholder={dict.contactForm.emailPlaceholder}
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark: placeholder:text-gray-500"
						required
				/>
				<textarea
						name="message"
						placeholder={dict.contactForm.messagePlaceholder}
						rows={5}
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark: placeholder:text-gray-500"
						required
				/>
				<button
						type="submit"
						className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
				>
					{dict.contactForm.submit}
				</button>
			</form>
	)
}