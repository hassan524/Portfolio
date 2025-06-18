'use client';

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.custom(
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 shadow-md text-sm">
            Thanks for contacting me
          </div>
        );
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      toast.error('Failed to send message.');
    }

    setLoading(false);
  };

  return (
    <div
      id="Contact"
      className="flex-col lg:flex gap-[3rem] text-slate-900 py-10 px-6 md:px-12 sm:px-12 overflow-x-hidden"
    >
      <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1500">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">
          Contact Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Left: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[50%] flex flex-col gap-5 justify-center lg:items-start items-center"
        >
          {/* <div className="flex flex-col sm:flex-row gap-4">  */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="sm:w-[80%] w-[95%] border border-slate-300 px-5 py-3 rounded-full outline-none text-gray-800 text-base tracking-wide"
            type="text"
            placeholder="Your Name"
            maxLength={50}
            required
            data-aos="fade-down" data-aos-duration={1000}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="sm:w-[80%] w-[95%] border border-slate-300 px-5 py-3 rounded-full outline-none text-gray-800 text-base tracking-wide"
            type="email"
            placeholder="Your Email"
            maxLength={50}
            required
            data-aos="fade-down" data-aos-duration={1000}
          />
          {/* </div>  */}

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="sm:w-[80%] w-[95%] border border-slate-300 px-5 py-3 rounded-full outline-none text-gray-800 text-base tracking-wide"
            type="tel"
            placeholder="Your Phone Number"
            maxLength={20}
            required
            data-aos="fade-down" data-aos-duration={1000}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="sm:w-[80%] w-[95%] border border-slate-300 px-5 py-3 rounded-3xl outline-none text-gray-800 text-base tracking-wide"
            placeholder="Your Message"
            maxLength={400}
            rows={6}
            required
            data-aos="fade-down" data-aos-duration={1000}
          />

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-900  hover:bg-slate-800 font-medium text-white px-10 py-3 rounded-xl tracking-wide transition duration-300"
            data-aos="fade-down" data-aos-duration={1000}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Right: Image */}
        <div className="w-full lg:w-[50%] lg:flex hidden justify-center items-center">
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="w-[280px] sm:w-[360px] md:w-[400px] object-contain"
            data-aos="fade-down" data-aos-duration={1000}
          />
        </div>
      </div>

    </div>
  );

};

export default Contact;
