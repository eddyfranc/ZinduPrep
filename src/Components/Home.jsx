import { ChevronDown } from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-3">
              Get Ready. Get Hired.
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Unlock your potential: Prep, Practice and Succeed!
            </p>
            <button className="bg-red-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm">
              Enroll Now
            </button>
            <p className="text-sm text-gray-600 mt-3">
              Next start date – August 1st, 2025
            </p>
          </div>

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
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className=" bg-white rounded-md p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            {/* self assessment and personal branding grid */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🌱
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Self-Assessment &
                  <br /> Personal Branding
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Compensation and negotiation */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                💲
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Compensation &
                  <br /> Negotiation
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Profile optimization */}

          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                👤
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Profile Optimization
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* AI-Powered Mock Interviews    */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🎤
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  AI-Powered Mock
                  <br /> Interviews
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Impactful Resume */}
          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                📄
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Impactful Resume
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>

          {/* Empowered Mindset */}

          <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🧠
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Empowered Mindset
                </h1>
              </div>
            </div>
            <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8 pt-24 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Images/unnamed.jpg"
              className="rounded sm shadow-md max-w-md w-full h-auto object-cover"
              alt="Image"
            />
          </div>

          <div className="flex flex-col gap-6 lg:gap-6">
            {/* How it works*/}
            <div className="bg-white rounded-xl p-6 gap-10 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                ⚙️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  How it Works
                </h1>
              </div>

              <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
            </div>

            {/* Time Commitment*/}
            <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                ⏱️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Time Commitment
                </h1>
              </div>

              <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
            </div>

            {/* Weekly Breakdown*/}
            <div className=" bg-white rounded-xl p-6 shadow-md text-left flex items-start justify-between cursor-pointer transition hover:shadow-lg">
              <div className="bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">
                🗓️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Weekly Breakdown
                </h1>
              </div>

              <ChevronDown className="text-red-500 mt-1 transition-transform duration-300"></ChevronDown>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="flex text-3xl font-bold text-red-500 mb-4 items-center justify-center pt-20">
          Testimonials
        </h2>
        <div className="flex flex-row justify-center items-start gap-4 mx-auto max-w-5xl px-4">
          <div className="mx-auto px-4 py-8">
            <h1 className="font-bold text-xl">Tom Mwambingu</h1>
            <h2>Senior Frontend Engineer at DevSoko</h2>
            <p>
              “Navigating the job search can be overwhelming, but the right
              guidance changes everything. I know that OctoPrep’s 8-weeks
              program covers everything needed to feel ready and highly
              motivated to start applying. I strongly believe in OctoPrep’s
              mission and can’t wait to see job seekers finding their first
              job!”
            </p>
          </div>

          <div className="max-w-sm mx-auto px-4 py-8">
            <h1 className="font-bold text-xl">Tom Mwambingu</h1>
            <h2>Senior Frontend Engineer at DevSoko</h2>
            <p>
              “This program is a great opportunity for graduates and job
              seekers. We all know that the journey can be challenging and the
              fact that OctoPrep offers a well structured program and
              peer-learning support is definitely a game changer. Relying on my
              own experience and Sophie's expertise, it will transform
              participant's approach and will bring motivation, accountability
              and self-confidence.”
            </p>
          </div>

          <div className="max-w-sm mx-auto px-4 py-8">
            <h1 className="font-bold text-xl">Tom Mwambingu</h1>
            <h2>Senior Frontend Engineer at DevSoko</h2>
            <p>
              “Give it a try. You'd be amazed how much you're going to learn,
              re-learn, discover and apply. A very comprehensive track to make
              you professionally confident and job ready.”
            </p>
          </div>

          <div className="max-w-sm mx-auto px-4 py-8">
            <h1 className="font-bold text-xl">Tom Mwambingu</h1>
            <h2>Senior Frontend Engineer at DevSoko</h2>
            <p>
              “OctoPrep isn’t just prep, it’s a mindset shift. You’re not the
              same before and after. It gives you clarity, confidence, and the
              tools to pitch yourself like a pro. For any serious job seeker,
              it’s the hack you didn’t know you needed!”
            </p>
          </div>
        </div>
      </section>

      <section>


<div className="bg-teal-400 rounded-xl shadow-lg overflow-hidden">
  <div className="px-6 py-8">
    <h3 className="text-xl font-semibold text-white tracking-tight text-center">
      Job Application
    </h3>
    <div className="mt-4 flex items-center justify-center">
      <span className="text-white text-5xl font-bold mr-1">$5</span>
      <span className="text-white text-xl font-semibold">/month</span>
    </div>
    <p className="mt-2 text-sm text-white opacity-75 text-center">
      (Subscription)
    </p>
  </div>
  <div className="bg-white px-6 py-6">
    <ul className="space-y-3">
      {/* List Item 1 */}
      <li className="flex items-center">
        <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Must complete the 8-week program before subscribing</span>
      </li>
      {/* List Item 2 */}
      <li className="flex items-center">
        <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Self-access to the program content</span>
      </li>
      {/* List Item 3 */}
      <li className="flex items-center">
        <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Structured job application tracker with automated reminders and clear action steps</span>
      </li>
      {/* List Item 4 */}
      <li className="flex items-center">
        <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Regular updates & tips</span>
      </li>
      {/* List Item 5 */}
      <li className="flex items-center">
        <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Cancel anytime</span>
      </li>
    </ul>
    <div className="mt-6">
      <a href="#" className="block w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-md text-center">
        Enroll Now
      </a>
    </div>
  </div>
</div>



<div class="bg-gray-50 py-16 sm:py-24">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
      About Us
    </h2>
    <p class="mt-4 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
      We strongly believe in our mission to give graduates and junior job seekers the opportunity to learn,
      train and feel confident when they'll start applying for a job. Step by step, we help them through
      structured guidance and accountability. We're a team passionate about helping them to
      achieve their goals.
    </p>

    <div class="mt-16 flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24">
      {/* Sophie Rigault-Barbier Profile Card */}
      <div class="flex flex-col items-center text-center">
        <img
          class="w-32 h-32 rounded-full object-cover shadow-lg"
          src="https://via.placeholder.com/128/FFD700/FFFFFF?text=Sophie"
          alt="Sophie Rigault-Barbier"
        />
        <h3 class="mt-4 text-xl font-semibold text-gray-900">Sophie Rigault-Barbier</h3>
        <p class="text-gray-600">Founder</p>
        <div class="flex mt-3 space-x-4">
          <a href="#" class="text-blue-700 hover:text-blue-900">
            {/* LinkedIn Icon */}
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.764 7 2.764v6.471z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-gray-900">
            {/* X (Twitter) Icon - simple version */}
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.63 7.584H.114L9.736 12.13 0 1.154h7.594zm-.493 1.257H16.4l-6.852 7.91L5.05 1.153H1.488L11.238 12.91 1.83 22.846h2.808l6.83-7.883 4.887 7.883h3.56L14.004 10.37z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mariem Ehab Profile Card */}
      <div class="flex flex-col items-center text-center">
        <img
          class="w-32 h-32 rounded-full object-cover shadow-lg"
          src="https://via.placeholder.com/128/00CED1/FFFFFF?text=Mariem"
          alt="Mariem Ehab"
        />
        <h3 class="mt-4 text-xl font-semibold text-gray-900">Mariem Ehab</h3>
        <p class="text-gray-600">Software Engineer</p>
        <div class="flex mt-3 space-x-4">
          <a href="#" class="text-blue-700 hover:text-blue-900">
            {/* LinkedIn Icon */}
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.764 7 2.764v6.471z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-gray-900">
            {/* X (Twitter) Icon - simple version */}
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.63 7.584H.114L9.736 12.13 0 1.154h7.594zm-.493 1.257H16.4l-6.852 7.91L5.05 1.153H1.488L11.238 12.91 1.83 22.846h2.808l6.83-7.883 4.887 7.883h3.56L14.004 10.37z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<section>



    <div class="bg-gray-50 py-16 sm:py-24">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-center text-teal-600 mb-12">
      Frequently Asked Questions
    </h2>

    <div class="space-y-4">
      {/* FAQ Item 1 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">What is OctoPrep?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            {/* Plus icon - can be swapped for a minus icon when open */}
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        {/* Content for this FAQ item (initially hidden) */}
        <div class="mt-2 text-gray-600 hidden">
          <p>
            OctoPrep is a structured program designed to help graduates and job seekers
            prepare, practice, and succeed in their job search, particularly for roles
            like Junior Frontend Engineer.
          </p>
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">Who is this program for?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            This program is ideal for recent graduates, bootcamp alumni, or anyone
            looking to land their first tech job or transition into a new role.
          </p>
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">What can I expect from the 8-week program?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            You can expect a well-structured curriculum, peer-learning support,
            weekly live sessions, and a comprehensive job application tracker.
          </p>
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">How is the program structured?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            The program is divided into 8 weekly modules, each focusing on key
            aspects of job preparation and application.
          </p>
        </div>
      </div>

      {/* FAQ Item 5 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">What are the prerequisites for joining?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            A basic understanding of relevant technologies (e.g., HTML, CSS, JavaScript for frontend roles)
            and a strong motivation to find a job are recommended.
          </p>
        </div>
      </div>

      {/* FAQ Item 6 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">How do I enroll in the program?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            You can enroll by clicking the "Enroll Now" button on our pricing page
            and following the registration steps.
          </p>
        </div>
      </div>

      {/* FAQ Item 7 */}
      <div class="border-b border-gray-200 py-4">
        <button class="flex justify-between items-center w-full text-left focus:outline-none group">
          <span class="text-lg font-medium text-gray-800">What is the pricing for the program?</span>
          <span class="text-gray-500 group-hover:text-gray-700">
            <svg class="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div class="mt-2 text-gray-600 hidden">
          <p>
            Please refer to our pricing section above for details on program access
            and job application subscription options.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


        
      </section>
    </>
  );
}
export default Home;
