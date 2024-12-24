'use server'

import { siteConfig } from '@/lib/site-config'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { z } from 'zod'

export async function subscribe(formData: FormData) {
  'use server'
  const rawFormData = Object.fromEntries(formData.entries())

  const schema = z.object({
    email: z.string().email(),
  })
  const validatedFields = schema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY as string)

  try {
    await resend.contacts.create({
      email: validatedFields.data.email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })
  } catch (error) {
    return {
      errors: [error],
    }
  }

  redirect(siteConfig.link.thankYou)
}
