"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Loader2, CheckCircle } from "lucide-react"
import { track } from "@vercel/analytics/react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      setStatus("success")
      setFormData({ name: "", email: "", projectType: "", message: "" })

      track("contact_form_submitted", {
        projectType: formData.projectType,
      })

      setTimeout(() => setStatus("idle"), 4000)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message right now."
      setErrorMessage(message)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const projectTypes = ["Logo Design", "Brand Identity", "Flyer Design", "Mockups", "Other"]

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Name */}
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-sm"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-sm"
          placeholder="your@email.com"
        />
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-2">Project Type</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          title="Project Type"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer text-sm"
        >
          <option value="">Select a project type...</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none text-sm"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 bg-secondary/20 border border-secondary rounded-md flex items-center gap-3 text-secondary text-xs sm:text-sm"
        >
          <CheckCircle size={18} />
          <p className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 bg-red-500/20 border border-red-500 rounded-md text-red-500 text-xs sm:text-sm"
        >
          {errorMessage}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-accent transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        ) : (
          <>
            <Mail size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
