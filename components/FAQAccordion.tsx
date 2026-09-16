'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

function FAQItemComponent({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-zinc-900/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-white text-sm sm:text-base pr-2">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-180 bg-brand-gold/20' : ''
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-3.5 h-3.5 ${isOpen ? 'text-brand-gold' : 'text-zinc-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
        >
          <div className="px-5 pb-5">
            <div className="w-10 h-0.5 bg-brand-gold mb-3" />
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <FAQItemComponent
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
