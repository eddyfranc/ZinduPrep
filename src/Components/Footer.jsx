import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a8b79] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section: Logo and Tagline */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          {/* Replace with your actual OctoPrep logo component or img tag */}
          {/* For example: <img src="/path/to/octoprep-logo.svg" alt="OctoPrep Logo" className="h-8 w-auto mb-2" /> */}
          <div className="flex items-center justify-center md:justify-start mb-2">
            {/* Using a placeholder text for OctoPrep logo */}
            <svg className="h-8 w-8 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Placeholder SVG for an OctoPrep-like icon */}
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span className="text-2xl font-bold">OctoPrep</span>
          </div>
          <p className="text-sm">Get Ready. Get Hired.</p>
        </div>

        {/* Middle Sections: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4 mb-8 md:mb-0 text-center md:text-left">
          <div className="min-w-[120px]">
            {/* Empty heading for spacing if needed, as per image */}
            <h3 className="font-semibold mb-2"></h3>
            <ul>
              <li className="mb-1"><a href="/program" className="hover:underline">Our Program</a></li>
              <li className="mb-1"><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li className="mb-1"><a href="/team" className="hover:underline">Meet The Team</a></li>
              <li className="mb-1"><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div className="min-w-[120px]">
            {/* Empty heading for spacing if needed, as per image */}
            <h3 className="font-semibold mb-2"></h3>
            <ul>
              <li className="mb-1"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-1"><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li className="mb-1"><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Us and Social Icons */}
        <div className="text-center md:text-right w-full md:w-auto">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* X (Twitter) Icon */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.057 1.002.166 1.474-5.39-.27-10.17-2.859-13.38-6.791-.564.974-.886 2.1-.886 3.3.0 2.25 1.144 4.249 2.875 5.414-1.06-.033-2.052-.325-2.925-.807.0.023.0.046.0.069.0 3.15 2.238 5.766 5.206 6.363-.54.148-1.11.232-1.7.232-.417 0-.82-.041-1.215-.115.823 2.57 3.203 4.45 6.038 4.498-2.217 1.734-5.003 2.77-8.053 2.77-.525 0-1.04-.031-1.549-.091 2.878 1.851 6.294 2.929 9.966 2.929 12 0 18.514-9.929 18.514-18.515 0-.281-.006-.562-.019-.84z"/></svg>
            </a>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.811-1.6-5.897C.144 6.911 6.815.144 15.003.144s14.859 6.767 14.859 14.859-6.767 14.859-14.859 14.859c-1.921 0-3.8-.47-5.467-1.373l-6.056 1.638zm4.721-5.918l-.515-.304c-1.166-.69-2.046-1.979-2.046-3.593 0-1.614.88-2.903 2.046-3.593l.515-.304.515-.304c1.166-.69 2.046-1.979 2.046-3.593 0-1.614-.88-2.903-2.046-3.593l-.515-.304-.515-.304c-1.166-.69-2.046-1.979-2.046-3.593 0-1.614.88-2.903 2.046-3.593l.515-.304.515-.304c1.166-.69 2.046-1.979 2.046-3.593 0-1.614-.88-2.903-2.046-3.593l-.515-.304-.515-.304c-1.166-.69-2.046-1.979-2.046-3.593 0-1.614.88-2.903 2.046-3.593l-.515-.304z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="border-t border-white border-opacity-30 my-8" />

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>&copy; {currentYear} octoprep.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
