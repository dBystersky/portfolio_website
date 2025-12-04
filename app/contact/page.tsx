"use client";
import { ChangeEvent, useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

import WebsiteHeader from "../components/header";
import WebsiteFooter from "../components/footer";


export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Need to set-up enquiry email
  const emailAddress = "test";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields'});
      return;
    }

    setIsSubmitting(true);
    setStatus({type: '', message: ''});

    

  }

  return (   
    
    <>
      <WebsiteHeader />

      <main className="min-h-screen from-indigo-50 via-white to-purple-50 py-12 px-4 bg-gradient-to-br text-black">
          <h1>This is the contact page</h1>
      </main>

      <WebsiteFooter />
  
    </>
  );
}