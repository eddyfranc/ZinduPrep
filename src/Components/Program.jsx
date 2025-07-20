import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const modules = [
  {
    title: 'Self-Assessment & Personal Branding',
    icon: '🌱',
  },
  {
    title: 'Compensation & Negotiation',
    icon: '💲',
  },
  {
    title: 'Profile Optimization',
    icon: '👤',
  },
  {
    title: 'AI-Powered Mock Interviews',
    icon: '🎤',
  },
  {
    title: 'Impactful Resume',
    icon: '📄',
  },
  {
    title: 'Empowered Mindset',
    icon: '🧠',
  },
];

const Program = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-teal-700 mb-4">Program Overview</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our program is designed for junior software engineers, developers, and recent graduates who are
        ready to jump into their career journey. Over the course of 8 weeks, you will learn the essential
        skills and knowledge to start your job search with confidence. With a structured curriculum, peer
        learning sessions, and a robust accountability support, you will have everything you need to succeed!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {modules.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg"
            onClick={() => toggle(index)}
          >
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
            <ChevronDown
              className={`text-teal-600 mt-1 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
