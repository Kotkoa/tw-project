import React from 'react'

const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${
        props.view
          ? 'border-red-800 bg-red-800 text-white'
          : 'border-neutral-400 bg-white'
      } border  px-4 py-1.5 text-gray-900  rounded-lg  text-sm font-medium text-center min-w-[52px] `}
    >
      {props.children}
    </button>
  )
}

export default Button
