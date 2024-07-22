"use server"
import { sendMail } from "@/lib/mail";

interface FormData {
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  enquiry: string;
}

export default async function submitForm(formData: FormData) {
  await sendMail({
    to: "formosa6js@gmail.com",
    name: `${formData.name}`,
    subject: `FORMOSA Oil and Gas enquiry from ${formData.name}`,
    body: `<p>Senders Company Name: ${formData.company_name}</p><br><p>Senders Email: ${formData.email}</p><br><p>Senders Phone Number: ${formData.phone_number}</p><br><h1>${formData.enquiry}</h1>`,
  });

  
  return { success: true };
}