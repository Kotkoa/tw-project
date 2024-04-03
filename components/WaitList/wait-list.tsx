import React, { ChangeEvent, FC, useState } from 'react';
import { validateEmail } from '@/utils/validate-email';
import ClipLoader from 'react-spinners/ClipLoader';

type WaitlistData = {
  email: string;
  waitlist_id?: number;
  referral_link?: string;
};

type WaitlistResponse = {
  priority: number;
  referral_link: string;
  total_referrals: number;
  uuid: string;
  verified: boolean | string;
  email: string;
  referral_token: string;
  referred_by_signup_token: string | null;
  created_at: string;
  removed_date: string | null;
  removed_priority: number | null;
};

export const WaitList: FC = () => {
  const [waitlistData, setWaitlistData] = useState<WaitlistResponse | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  //TODO: Consider separating the logic for the API call into a separate function or custom hook. This makes your component cleaner and the logic reusable.
  const submitWaitlist = (data: WaitlistData) => {
    if (!data.email) {
      setError('Please enter your email');
      return;
    }
    if (validateEmail(data.email) === false) {
      setError('Please enter a valid email');
      return;
    }

    setError('');
    setLoading(true);

    data.waitlist_id = 15316;
    data.referral_link = document.URL;

    //TODO:Hardcoding URLs in your fetch requests isn't flexible or secure. Use environment variables instead fetch(`${process.env.REACT_APP_API_URL}/api/v1/signup`
    fetch('https://api.getwaitlist.com/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWaitlistData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    if (email) {
      submitWaitlist({ email });
    } else {
      console.error('Email input element not found');
    }
  };

  return (
    <div className="flex h-full w-full p-6">
      {!waitlistData ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full"
        >
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
                value={email}
                onChange={handleEmailChange}
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
            {error && (
              <div aria-live="assertive" className="mt-2 px-6 text-center text-xs text-red-500">
                {error}
              </div>
            )}
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
