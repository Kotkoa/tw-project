import React from 'react'

const InputBorder = (props) => {
  return (
    <div className="flex flex-col justify-start">
      <label className="capitalize neutral-600 after:content-['*'] after:ml-0.5 after:text-red-800 mb-2 font-light text-base">
        {props.name || InputBorder}
      </label>
      <div
        className={`w-[446px] rounded-xl p-2 border border-neutral-300 bg-white text-gray-900 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-neutral-300 disabled:bg-zinc-100 disabled:text-zinc-500 disabled:shadow-none ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  )
}

export default InputBorder
