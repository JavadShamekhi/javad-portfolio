import {Resend} from "resend";
import {NextResponse} from "next/server";

const resend = new Resend('re_hKJ6hzfj_6P5MQUwkXMHPhK3euEKhof4L');

export async function POST(req: Request) {
	try {
		const {name, email, message} = await req.json()

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "javad.shamekhi.80@gmail.com",
			subject: `New Contact Form Message from ${name}`,
			html: `
                <h2>New Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
		})

		return NextResponse.json({success: true})
	} catch (error) {
		console.error(error)

		return NextResponse.json(
				{success: false},
				{status: 500}
		)
	}
}