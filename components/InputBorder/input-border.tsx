import React from 'react';

type InputBorderProps = {
  name?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export const InputBorder = ({ name, error, className, children }: InputBorderProps) => {
  return (
    <div className="relative -mt-2 flex flex-col justify-start">
      <label className="neutral-600 mb-2 text-base font-light capitalize after:ml-0.5 after:text-red-800 after:content-['*']">
        {name || 'Label'}
      </label>
      <div
        className={`w-[446px] rounded-xl border border-neutral-300 bg-white p-2 text-gray-900 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-neutral-300 disabled:bg-zinc-100 disabled:text-zinc-500 disabled:shadow-none ${className}`}
      >
        {children}
      </div>
      {error && <p className="absolute -bottom-2 left-0 text-red-800 ">{error}</p>}
    </div>
  );
};
