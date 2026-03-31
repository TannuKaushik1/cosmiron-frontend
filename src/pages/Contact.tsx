import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your R&D needs and innovation goals
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Get in Touch</h2>
                <p className="text-slate-300 mb-8">
                  We're here to answer your questions and discuss how Cosmiron can help bring your innovative ideas to life. Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-slate-400">operations@arorainnovation.com (General)</p>
                    <p className="text-slate-400">operations@integritypathsystems.com (Staffing)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Address</h3>
                    <p className="text-slate-400">
                      750 N. Saint Paul St., Ste. 250 #744032<br />
                      Dallas, Texas 75201<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20">
                <h3 className="text-xl mb-4">Office Hours</h3>
                <div className="space-y-2 text-slate-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-br from-blue-950/30 to-purple-950/30 flex items-center justify-center p-0">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=750+N.+Saint+Paul+St.,+Dallas,+Texas+75201&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Google Maps Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
