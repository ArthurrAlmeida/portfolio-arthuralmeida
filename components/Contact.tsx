
import React, { useState } from 'react';
import { SITE_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-px bg-indigo-500"></span>
          04. Let's Talk
          <span className="w-8 h-px bg-indigo-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-gray-900/50 p-8 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="space-y-8 relative z-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2001/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2001/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </div>
                <span>Remote / Worldwide</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { name: 'Github', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22', href: SITE_CONFIG.github },
                { name: 'Linkedin', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2', href: SITE_CONFIG.linkedin }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2001/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2001/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
              <button 
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
