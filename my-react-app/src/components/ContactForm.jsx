import React, { useState } from 'react';
import Button from './ui/Button';
import styles from '../sections/Contact.module.scss';

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const endpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/xanbnewg';
const fallbackEmail = 'mihretabtesfahun2124@gmail.com';

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please add a valid email address.';
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Please write a short message.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    if (!validate()) return;

    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\nFrom: ${values.name} <${values.email}>`
      );
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      setStatus({ type: 'success', message: 'Opening your email app to send the message directly.' });
      return;
    }

    setSubmitting(true);
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');
      setValues(initialValues);
      setStatus({ type: 'success', message: 'Thanks. Your message has been sent.' });
    } catch {
      setStatus({
        type: 'error',
        message: (
          <>
            Something went wrong. You can{' '}
            <a href={`mailto:${fallbackEmail}`}>email me directly</a> instead.
          </>
        )
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={updateField}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={updateField}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="6"
          value={values.message}
          onChange={updateField}
          placeholder="Tell me what you want to build, improve, or hire for."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <Button type="submit" icon="fas fa-paper-plane" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send enquiry'}
      </Button>

      {status && (
        <div className={`${styles.toast} ${styles[status.type]}`} role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
