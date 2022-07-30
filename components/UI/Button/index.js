import React from 'react'

const Button = (props) => {
  return (
    <div className="border border-neutral-400 px-4 py-1.5 text-gray-900  rounded-lg active:border-red-800 active:bg-red-800 active:text-white text-sm font-medium text-center min-w-[52px]">
      {props.children}
    </div>
  )
}

export default Button
