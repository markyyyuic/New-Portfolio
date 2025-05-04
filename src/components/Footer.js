import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 md:py-6 mt-8 md:mt-16 text-gray-500 text-sm font-[Firas-Medium] z-20">
      <div>© {new Date().getFullYear()} Markyy | All rights reserved.</div>
      <div className="mt-2">
        Portfolio inspired by{" "}
        <a
          href="https://samdacara.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition"
        >
          Sam Dacara
        </a>
      </div>
    </footer>
  );
};

export default Footer;
