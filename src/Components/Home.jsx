import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const modules = [
    {
      title: "Self-Assessment & Personal Branding",
      icon: "🌱",
    },
    {
      title: "Compensation & Negotiation",
      icon: "💲",
    },
    {
      title: "Profile Optimization",
      icon: "👤",
    },
    {
      title: "AI-Powered Mock Interviews",
      icon: "🎤",
    },
    {
      title: "Impactful Resume",
      icon: "📄",
    },
    {
      title: "Empowered Mindset",
      icon: "🧠",
    },
    {
    title: "How It Works",
    icon: "⚙️",
  },
  {
    title: "Time Commitment",
    icon: "⏱️",
  },
  {
    title: "Weekly Breakdown",
    icon: "🗓️",
  },
  {
    title: "Company Research",
    icon: "🏢",
  },
  {
    title: "Networking",
    icon: "🤝",
  },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">
            Get Ready. Get Hired.
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Unlock your potential: Prep, Practice and Succeed!
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md">
            Enroll Now
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Next start date – August 1st, 2025
          </p>
        </div>

        <div className="w-full lg:w-auto mb-10 lg:mb-0 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="public/profileiamge.png"
              alt="Celebrating students"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">
          Program Overview
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our program is designed for junior software engineers, developers, and
          recent graduates who are ready to jump into their career journey. Over
          the course of 8 weeks, you will learn the essential skills and
          knowledge to start your job search with confidence. With a structured
          curriculum, peer learning sessions, and a robust accountability
          support, you will have everything you need to succeed!
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
                className={`text-teal-600 mt-1 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-row items-center gap-8">
        <div>
          <img
            src="public/Images/unnamed.jpg"
            className="rounded sm shadow-md w-64 h-64"
            alt="Image"
          />
        </div>
        {/* <div className="bg-white flex flex-col items-center p-2 rounded-sm shadow relative transition-all duration-300 ease-in-out">
            fefs sdvxwesdhzxbnvc esjhnmfcekjfmnjehfbkjembf jevhnsbd fjcnv jesfdbvc j
        </div> */}
        <div>
            <button className="bg-white items-center p-2 rounded sm transition-all duration-300 ease-in-out ">How it works</button>
        </div>
       
        
        </div>
      </section>

</>

     
  );
}
export default Home;
