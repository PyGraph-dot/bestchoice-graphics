import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  projectType: z.string().min(2, "Choose a project type"),
  message: z.string().min(10, "Tell me a bit more about your project"),
})

const resendApiKey = process.env.RESEND_API_KEY
const resendFrom = process.env.RESEND_FROM_EMAIL || "BestChoice Graphics <noreply@bestchoicegraphics.com>"
const resendTo = process.env.CONTACT_INBOX || "info@bestchoicegraphics.com"
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const data = contactSchema.parse(payload)

    if (!resend) {
      console.warn("Contact form submission blocked: missing RESEND_API_KEY")
      return NextResponse.json(
        { error: "Contact service is not configured. Please try again later." },
        { status: 500 },
      )
    }

    await resend.emails.send({
      from: resendFrom,
      to: resendTo,
      replyTo: data.email,
      subject: `New inquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Project type: ${data.projectType}`,
        "",
        data.message,
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form submission failed", error)

    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0]
      return NextResponse.json(
        { error: firstIssue?.message ?? "Please double-check the form fields." },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    )
  }
}

