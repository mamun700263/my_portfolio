'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '',subject:'',company:'' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('Sending...');
  try {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, subject: 'Portfolio Contact Form' }),
    });
    const data = await res.json();
    console.log(data)
    if (res.ok) {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '',subject:'',company:''});
    } else {
      setStatus(`Error: ${data.error}`);
    }
  } catch (err) {
    setStatus('Something went wrong.');
  }
};

  return (
    <form
    className="flex flex-col gap-4"
    onSubmit={handleSubmit}
    >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-400 resize-none h-32"
          ></textarea>
      <input type="text" name="company" style={{ display: 'none' }} onChange={handleChange}/>
      <button
        type="submit"
        disabled={status === 'Sending...'}
        className={`px-6 py-3 font-semibold rounded-lg text-white ${
          status === 'Sending...' ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500'
        }`}
      >
        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
      </button>
        {status && (
        <p
          className={`mt-4 ${
            status.includes('Error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {status}
        </p>
      )}
        </form>

  );
}