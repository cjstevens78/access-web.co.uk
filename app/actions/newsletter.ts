"use server"

import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const validatedFields = newsletterSchema.parse({
      email: formData.get("email"),
    })

    // For now, we'll just log the email
    // In production, you would want to:
    // 1. Store this in a database (e.g., PostgreSQL with Supabase)
    // 2. Send a confirmation email
    // 3. Add to your email marketing platform
    console.log("Newsletter subscription:", validatedFields.email)

    return { success: true, message: "Thanks for subscribing!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

