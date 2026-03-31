import { useState } from 'react';
import api from '../utils/api';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const { data } = await api.post('/api/contact', form);
      setStatus({ type: 'success', text: data.message || 'Message sent successfully!' });
      setForm(initialForm);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again.';
      setStatus({ type: 'error', text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <h1 className="section-title">Contact Us</h1>
      <p className="mb-8 text-slate-300">Tell us about your project and we will get back to you within 24 hours.</p>

      <div className="glass p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="min-h-36 w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300"
            name="message"
            placeholder="Project details"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-cyan-400 px-6 py-2 font-semibold text-slate-950 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.text && (
          <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
            {status.text}
          </p>
        )}
      </div>

      <div className="mt-8 space-y-2 text-slate-300">
        <p>Email: team@mernduo.dev</p>
        <a href="https://wa.me/15550001111" target="_blank" rel="noreferrer" className="inline-block rounded-full border border-green-500 px-4 py-2 text-green-400">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
