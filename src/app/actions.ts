"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  organization: z.string().optional(),
  inquiry: z.string().min(10, "Inquiry must be at least 10 characters long."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    inquiry: formData.get("inquiry"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // In a real application, you would send this data to your backend,
  // save it to a database, or send an email.
  // For this example, we'll just log it.
  console.log("Form submitted successfully!");
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you soon.",
    success: true,
  };
}
