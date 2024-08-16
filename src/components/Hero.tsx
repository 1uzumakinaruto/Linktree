import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='relative z-10 flex flex-col items-center justify-center h-screen text-white p-4 sm:p-6 md:p-8 lg:p-10  overflow-hidden'>
      <div className='text-center max-w-4xl w-full'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
          Welcome to my Portfolio
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
          I’m Bharat Bhushan, a Software Developer.
        </p>
        <Link
          to="/about-me"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-violet-500 bg-white rounded-lg hover:bg-transparent transition-colors"
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
