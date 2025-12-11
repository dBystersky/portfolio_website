"use client";
import { ChangeEvent, useState } from "react";
import { Mail, User, MessageSquare, PenLine, Send } from "lucide-react";

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

      <div className="min-h-screen from-indigo-50 via-white to-purple-50 py-12 px-4 bg-gradient-to-br text-black">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 font-bold">Contact Me</h1>
            <p className="text-lg text-gray-700">Have a question? I'm always interested in new projects and opportunities!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-8 border border-gray-300 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="What's your name?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Subject
              </label>
              <input 
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's the subject?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                <PenLine className="inline w-4 h-4 mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg transition resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>

            {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )
            }

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gray-200 text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <WebsiteFooter />
  
    </>
  );
}