'use server'

import { siteConfig } from '@/lib/site-config'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { z } from 'zod'

export type SubscribeResponse = {
  errors: { email?: string[] } | null
  message: string | null
  payload?: FormData
}

// Zed is being obnoxious with the formatting
// prettier-ignore
type FormPromise = Promise<SubscribeResponse>

export async function subscribe(
  state: SubscribeResponse,
  formData: FormData,
): FormPromise {
  'use server'
  const rawFormData = Object.fromEntries(formData.entries())

  const schema = z.object({
    email: z.string().email(),
  })
  const validatedFields = schema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: null,
      payload: formData,
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
    console.error(String(error))
    return {
      message: 'Failed to create contact',
      errors: null,
      payload: formData,
    }
  }

  redirect(siteConfig.link.thankYou)
}
