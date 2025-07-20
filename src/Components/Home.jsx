import { ChevronDown } from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left py-6 lg:py-0">
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
              src="/Images/profileiamge.png"
              alt="Celebrating students"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Program Section */}
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
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            {/* self assessment and personal branding grid */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🌱
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Self-Assessment & Personal Branding
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Compensation and negotiation */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                💲
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Compensation & Negotiation
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Profile optimization */}

          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                👤
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Profile Optimization
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* AI-Powered Mock Interviews    */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🎤
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  AI-Powered Mock Interviews
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Impactful Resume */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                📄
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Impactful Resume
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Empowered Mindset */}

          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🧠
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Empowered Mindset
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="gap-4">
          <div>
            <img
              src="public/Images/unnamed.jpg"
              className="rounded sm shadow-md w-64 h-64"
              alt="Image"
            />
          </div>

          {/* How it works*/}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                ⚙️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  How it Works
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Time Commitment*/}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                ⏱️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Time Commitment
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Weekly Breakdown*/}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🗓️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Weekly Breakdown
                </h1>
              </div>
            </div>
            <ChevronDown className="text-teal-600 mt-1 transition-transform duration-300"></ChevronDown>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
