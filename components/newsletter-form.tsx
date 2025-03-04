"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  )
}

export function NewsletterForm() {
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await subscribeToNewsletter(formData)
    setMessage({
      text: result.message,
      type: result.success ? "success" : "error",
    })

    if (result.success) {
      // Reset the form
      const form = document.getElementById("newsletter-form") as HTMLFormElement
      form.reset()
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form id="newsletter-form" action={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            aria-describedby="newsletter-error"
          />
        </div>
        <SubmitButton />
      </form>
      {message && (
        <p
          id="newsletter-error"
          className={`mt-2 text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}
        >
          {message.text}
        </p>
      )}
    </div>
  )
}

