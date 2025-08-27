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
  // Keep track of all messages exchanged between the bot and the user.
  const [messages, setMessages] = useState([]);
  // Indicates whether the bot is "typing" a response.
  const [typing, setTyping] = useState(false);
  // Tracks the conversation phase: askName → awaitingQuestion → askEmail → completed
  const [phase, setPhase] = useState('askName');
  // Bound to the input field; cleared after each submission.
  const [inputValue, setInputValue] = useState('');
  // Collects the user's name and email so they can be sent via Formspree.
  const [formData, setFormData] = useState({ name: '', email: '' });
  // Submission status: null, 'SUCCESS' or 'ERROR'.
  const [status, setStatus] = useState(null);

  // On mount, greet the visitor and ask for their name.
  useEffect(() => {
    addBotMessage("Hi, welcome! What's your name?");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Append a message from the bot to the conversation.  If the user
   * prefers reduced motion we skip the typing delay, otherwise a
   * small pause is inserted for a more conversational feel.
   * @param {string} text The message to display
   */
  const addBotMessage = (text) => {
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

  /**
   * Append a user message to the conversation.  Messages are stored
   * verbatim; validation happens in the submission handler.
   * @param {string} text
   */
  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
  };

  /**
   * Handle submission of the input field.  Behaviour depends on the
   * current conversation phase.  Name is collected first, followed
   * by free‑form questions.  If the visitor asks about the
   * developer's capabilities we answer immediately.  Otherwise we
   * treat the query as detailed and request an email to follow up.
   */
  const handleInputSubmit = () => {
    const value = inputValue.trim();
    if (!value) return;
    addUserMessage(value);
    setInputValue('');
    switch (phase) {
      case 'askName': {
        // Capture the visitor's name and transition to the question phase.
        setFormData((prev) => ({ ...prev, name: value }));
        addBotMessage(
          `Nice to meet you, ${value}! I'm here to help. Try asking me what I can do or tell me more about your project.`
        );
        setPhase('awaitingQuestion');
        break;
      }
      case 'awaitingQuestion': {
        const lower = value.toLowerCase();
        // If the visitor asks about capabilities, answer based on the CV/skills.
        if (lower.includes('what can you do')) {
          addBotMessage(
            "I build full‑stack apps with React, Spring Boot, MySQL and more. I'm experienced in API development, microservices and cloud deployments."
          );
          addBotMessage(
            "If you have a specific question or project in mind, feel free to ask!"
          );
        } else {
          // Treat any other question as detailed.  Let the visitor know we'll follow up via email.
          addBotMessage(
            "That’s a great question — I’ll get back to you by email with a full answer."
          );
          addBotMessage(
            'Could you please provide your email so I can follow up?'
          );
          setPhase('askEmail');
        }
        break;
      }
      case 'askEmail': {
        // Validate email format
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!emailValid) {
          addBotMessage("Hmm, that email doesn't look valid. Could you try again?");
          break;
        }
        setFormData((prev) => ({ ...prev, email: value }));
        addBotMessage("Thanks! I'll reach out to you soon.");
        // After capturing the email, send the conversation log to the configured endpoint.
        // We include the entire conversation so that Mihretab has context for the inquiry.
        const conversationLog = [...messages, { sender: 'user', text: value }]
          .map((msg) => `${msg.sender === 'bot' ? 'Bot' : 'You'}: ${msg.text}`)
          .join('\n');
        handleSubmit(conversationLog);
        setPhase('completed');
        break;
      }
      default:
        break;
    }
  };

  /**
   * Submit the collected data to Formspree.  The message includes the
   * conversation log so the developer can see the full context of
   * the interaction.  Status flags drive success and error
   * feedback within the UI.
   * @param {string} conversationLog Full transcript of the chat
   */
  const handleSubmit = async (conversationLog) => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', conversationLog || '');
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

  // Intercept the form submit event and delegate to our handler.
  const onSubmit = (e) => {
    e.preventDefault();
    handleInputSubmit();
  };

  return (
    <div className={styles.chatbot} aria-live="polite">
      {/* Message bubbles */}
      <div className={styles.messages} id="chatbot-messages">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={msg.sender === 'bot' ? styles.botBubble : styles.userBubble}
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
      {/* Input area: show only while the conversation is active and there is no submission status */}
      {status === null && phase !== 'completed' && (
        <form className={styles.inputArea} onSubmit={onSubmit}>
          <label htmlFor="chatbot-input" className="sr-only">
            chat input
          </label>
          <input
            id="chatbot-input"
            type={phase === 'askEmail' ? 'email' : 'text'}
            name="chatbot-input"
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
      {/* Feedback after sending */}
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