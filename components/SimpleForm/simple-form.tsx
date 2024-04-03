import React, { ChangeEvent, FC, useState } from 'react';

export const SimpleForm: FC = () => {
  const [filledData, setFilledData] = useState({});

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setFilledData(data);
  };

  return (
    <>
      <form className="flex flex-1 flex-col py-16" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="firstName"
            className="neutral-600 mb-2 text-base font-light capitalize after:ml-0.5 after:text-red-800 after:content-['*']"
          >
            First Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="lastName"
            className="neutral-600 mb-2 text-base font-light capitalize after:ml-0.5 after:text-red-800 after:content-['*']"
          >
            Last Name
          </label>
          <input
            id="lastName"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="gender"
            className="neutral-600 mb-2 text-base font-light capitalize after:ml-0.5 after:text-red-800 after:content-['*']"
          >
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          >
            <option value="" disabled>
              Select:
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="country"
            className="neutral-600 mb-2 text-base font-light capitalize after:ml-0.5 after:text-red-800 after:content-['*']"
          >
            Country
          </label>
          <select
            name="country"
            id="country"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          >
            <option value="" disabled>
              Select:
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="mb-4 flex items-baseline">
          <label
            htmlFor="agreement"
            className="neutral-600 mb-2 text-base font-light capitalize after:mr-0.5 after:text-red-800 after:content-['*']"
          >
            Able to proseed...
          </label>
          <input className="ml-2 leading-tight" id="agreement" type="checkbox" name="agreement" />
        </div>
        <button
          type="submit"
          className="ml-auto mr-auto w-1/3 rounded-lg bg-white py-2.5 text-sm font-medium leading-5 text-blue-700 shadow ring-white/60 ring-offset-2 ring-offset-blue-400 hover:bg-white/[0.62] hover:text-gray-500 focus:outline-none focus:ring-2"
        >
          Submit
        </button>
      </form>
      {Object.keys(filledData).length > 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="mb-4 text-2xl font-bold">Form data:</h2>
          <ul className="flex flex-col items-start">
            {Object.entries(filledData).map(([key, value]) => (
              <li key={key} className="flex flex-row items-center">
                <span className="text-lg font-bold">{key}:</span>
                <span className="ml-2 text-lg">{String(value)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
