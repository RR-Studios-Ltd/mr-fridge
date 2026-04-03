'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion__item">
      <button
        className="accordion__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion__question">{question}</span>
        <svg
          className={`accordion__chevron${isOpen ? ' accordion__chevron--open' : ''}`}
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`accordion__panel${isOpen ? ' accordion__panel--open' : ''}`}
        role="region"
      >
        <p className="accordion__answer">{answer}</p>
      </div>
    </div>
  );
}
