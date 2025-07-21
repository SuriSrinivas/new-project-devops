import React, { useState } from 'react';

function JoinUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Join Us / Contact</h1>
      {submitted ? (
        <div style={{ color: 'green', marginTop: '2rem' }}>
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <button
            type="submit"
            style={{
              background: '#00bcd4',
              color: '#fff',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '5px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default JoinUs;