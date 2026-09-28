"use server";

import { Resend } from "resend";
import { business } from "@/data/business";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !email || !projectType || !message) {
    return { status: "error", message: "Please fill in every field and try again." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL || business.email;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.error(
      "Contact form submitted but RESEND_API_KEY is not set. See .env.example.",
    );
    return {
      status: "error",
      message:
        "Sorry, something went wrong on our end. Please call or text us directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend returned an error sending the contact form:", error);
      return {
        status: "error",
        message:
          "Sorry, something went wrong on our end. Please call or text us directly instead.",
      };
    }

    return {
      status: "success",
      message: `Thanks, ${name}. We got your message and will be in touch soon.`,
    };
  } catch (err) {
    console.error("Unexpected error sending the contact form:", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong on our end. Please call or text us directly instead.",
    };
  }
}
