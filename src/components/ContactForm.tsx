import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Memoize the escape handler to prevent unnecessary re-renders
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Add escape key listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was a problem submitting your form. Please try again.');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        ></div>

        <div className="relative w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close contact form"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8" role="status" aria-live="polite">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <>
              <h2 id="contact-form-title" className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Request a quote, schedule a demo, or learn more about our solutions
              </p>
              <form
                action="https://formspree.io/f/xwpodaon"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@company.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your needs - whether you're looking for a quote, want to schedule a demo, or have questions about our solutions. Please include any specific requirements or timeline considerations."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
