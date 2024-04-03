import React, { FC, useState } from 'react';
import { validateEmail } from '@/utils/validate-email';
import ClipLoader from 'react-spinners/ClipLoader';

type WaitlistData = {
  email: string;
  waitlist_id?: number;
  referral_link?: string;
};

type WaitlistResponse = {
  priority: number | string;
  referral_link: string;
  total_referrals: number;
};

export const WaitList: FC = () => {
  const [waitlistData, setWaitlistData] = useState<WaitlistResponse | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submitWaitlist = (data: WaitlistData) => {
    if (!data.email) {
      setError('Please enter your email');
      return;
    }
    if (validateEmail(data.email) === false) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);

    data.waitlist_id = 15316;
    data.referral_link = document.URL;

    fetch('https://api.getwaitlist.com/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setWaitlistData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="flex h-full w-full p-6">
      {!waitlistData ? (
        <form className="w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700">
                What is your email?
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email"
                autoComplete="email"
                onChange={(e) => e.stopPropagation()}
                required
                className="rounded-md border border-gray-200 p-2 text-base text-gray-700"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                const emailElement = document.getElementById('email') as HTMLInputElement;
                if (emailElement) {
                  submitWaitlist({
                    email: emailElement.value,
                  });
                } else {
                  console.error('Email input element not found');
                }
              }}
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white transition duration-300 hover:bg-indigo-700"
            >
              {loading ? (
                <ClipLoader size={25} color={'#ffffff'} loading={true} />
              ) : (
                'Sign up for the waitlist'
              )}
            </button>
            {error && <div className="mt-2 px-6 text-center text-xs text-red-500">{error}</div>}
          </div>
        </form>
      ) : (
        <div className="text-gray-700">
          <div>
            Thank you for signing up. Your are waiter <b>{waitlistData.priority}</b> on the
            waitlist.{' '}
          </div>
          <div>
            Referral link is: <b>{waitlistData.referral_link}</b>
          </div>
          <div>
            Total referrals: <b>{waitlistData.total_referrals}</b>
          </div>
          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setWaitlistData(null);
              }}
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white transition duration-300 hover:bg-indigo-700"
            >
              Return to signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
