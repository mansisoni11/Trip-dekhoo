import React, { useState } from 'react'
import './Faq.css'
const faqs = [
    {
      name: "Akash",
      question: "What is the inclusion of my trip?",
      answer:
        "Tripdekhoo :- Your package is included stay with breakfast, sightseeing and flight or visa.",
    },
    {
      name: "Ishika",
      question: "On Ground, if I need help so what all options you are giving me?",
      answer:
        "TripDekhoo: - Don’t worry, Ishika! We’re assigning you a virtual tour guide who’ll be with you throughout your journey to ensure everything goes smoothly.",
    },
    {
      name: "Kamal",
      question: "Which time is best to visit Bali?",
      answer:
        "TripDekhoo: - The best time to visit Bali is from April to October during the dry season for sunny weather and outdoor activities. For fewer crowds and lush scenery, consider the shoulder months like April, May, or September.",
    },
    {
      name: "Memo",
      question: "If we book package from you what things is beneficial for us?",
      answer:
        "Tripdekhoo :- We are giving you a POC, better discount or a further promise to take care your trip like a our family trip",
    },
    {
      name: "Mansi",
      question: "What payment method I have to book this package?",
      answer:
        "TripDekhoo: - You can pay us on official account number, in INR or USD. However you can pay via cards, online NEFT/IMPS.",
    },
  ];

const Faq = () => {
 
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container my-5">
    <h2 className="text-center font-weight-bold Faq_heading mb-1">Frequently Questions Asked</h2>
    <p className="text-center faq_subheading mb-5">By our customers</p>
    {faqs.map((faq, index) => (
      <div className="card mb-3 shadow-sm border-0 rounded-lg" key={index}>
        <div
          className="card-header bg-white"
          onClick={() => toggle(index)}
          style={{ cursor: 'pointer' }}
        >
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            {faq.question}
            <span className="faq_opener display-5">{openIndex === index ? '−' : '+'}</span>
          </h5>
        </div>
        <div
          className={`card-body pt-2 pb-3 px-4 text-muted ${openIndex === index ? 'show' : 'collapse'}`}
          style={{ display: openIndex === index ? 'block' : 'none' }}
        >
          <p>{faq.answer}</p>
          <p className="text-right small font-italic text-secondary">– {faq.name}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Faq
