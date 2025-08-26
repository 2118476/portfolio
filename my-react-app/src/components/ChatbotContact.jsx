import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import styles from './ChatbotContact.module.scss';

/*
 * Chatbot‑style contact form.  This component guides the user
 * through a multi‑step conversation: asking for their name,
 * email and message, then summarising and submitting the data via
 * Formspree.  Messages appear as bubbles with a typing indicator
 * between steps.  Input fields are validated (email format) and
 * the whole flow is keyboard accessible.  When the user opts out
 * of animations via `prefers‑reduced‑motion` the typing delays
 * are removed for a snappier experience.
 */
const ChatbotContact = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const steps = [
    { question: "What's your name?", field: 'name' },
    { question: "What's your email?", field: 'email' },
    { question: 'What can I help with?', field: 'message' }
  ];

  // Push the first bot question on mount
  useEffect(() => {
    addBotMessage(steps[0].question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper to push a bot message and optionally show typing delay
  const addBotMessage = (text) => {
    // Immediately add the message if reduced motion; otherwise show typing
    if (prefersReducedMotion) {
      setMessages((prev) => [...prev, { sender: 'bot', text }]);
    } else {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { sender: 'bot', text }]);
      }, 600);
    }
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
  };

  // Handle input submission for each step
  const handleInputSubmit = () => {
    const value = inputValue.trim();
    if (!value) return;
    // push user message bubble
    addUserMessage(value);
    const currentField = steps[step].field;
    setFormData((prev) => ({ ...prev, [currentField]: value }));
    setInputValue('');
    // Validate email format when on email step
    if (
      currentField === 'email' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      addBotMessage("Hmm, that email doesn't look valid. Could you try again?");
      return;
    }
    // Move to next step or to summary
    const nextStep = step + 1;
    if (nextStep < steps.length) {
      setStep(nextStep);
      addBotMessage(steps[nextStep].question);
    } else {
      setStep(nextStep);
      // summary
      const summary = `Thanks, ${formData.name || value}! I'll email you at ${currentField === 'email' ? value : formData.email} once I've read your message. Ready to send?`;
      addBotMessage(summary);
    }
  };

  // Submit to Formspree
  const handleSubmit = async () => {
    // Build form data for POST
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    try {
      const res = await fetch('https://formspree.io/f/xanbnewg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        setStatus('SUCCESS');
        addBotMessage("Your message has been sent! I'll get back to you soon.");
      } else {
        setStatus('ERROR');
        addBotMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('ERROR');
      addBotMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  // Form submission handler for the input form
  const onSubmit = (e) => {
    e.preventDefault();
    handleInputSubmit();
  };

  return (
    <div className={styles.chatbot} aria-live="polite">
      {/* Progress indicator */}
      <div className={styles.progress} aria-hidden="true">
        <div
          className={styles.progressBar}
          style={{ width: `${(Math.min(step, steps.length) / (steps.length + 1)) * 100}%` }}
        ></div>
      </div>
      {/* Message bubbles */}
      <div className={styles.messages} id="chatbot-messages">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={
              msg.sender === 'bot' ? styles.botBubble : styles.userBubble
            }
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            {msg.text}
          </motion.div>
        ))}
        {typing && (
          <motion.div
            className={styles.botBubble}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
          </motion.div>
        )}
      </div>
      {/* Input area or confirmation */}
      {status === null && step < steps.length && (
        <form className={styles.inputArea} onSubmit={onSubmit}>
          <label htmlFor="chatbot-input" className="sr-only">
            {steps[step].field}
          </label>
          <input
            id="chatbot-input"
            type={steps[step].field === 'email' ? 'email' : 'text'}
            name={steps[step].field}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="off"
            disabled={typing}
          />
          <Button type="submit" variant="primary" disabled={typing}>
            Send
          </Button>
        </form>
      )}
      {status === null && step >= steps.length && (
        <div className={styles.confirmArea}>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Submit
          </Button>
        </div>
      )}
      {status === 'SUCCESS' && (
        <div className={styles.result} role="alert">
          Thank you! Your message has been sent.
        </div>
      )}
      {status === 'ERROR' && (
        <div className={`${styles.result} ${styles.error}`} role="alert">
          Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
};

export default ChatbotContact;