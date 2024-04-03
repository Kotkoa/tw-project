import React, { FC } from 'react';
import Script from 'next/script';

export const WaitList: FC = () => {
  return (
    <div className="mt-10">
      <div className="mb-8">
        <label htmlFor="hs-leading-icon" className="mb-2 block text-sm font-medium dark:text-white">
          Email address
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="block w-full rounded-lg border-gray-200 px-4 py-3 ps-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="you@site.com"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
            <svg
              className="size-4 flex-shrink-0 text-gray-400 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div id="getWaitlistContainer" data-waitlist_id="15316" data-widget_type="WIDGET_1"></div>
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
};
