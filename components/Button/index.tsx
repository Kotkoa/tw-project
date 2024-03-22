import React from 'react'

type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
  isMetric: boolean;
}>;

const Button = ({ onClick, isMetric, children }: ButtonProps) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isMetric
          ? 'border-red-800 bg-red-800 text-white'
          : 'border-neutral-400 bg-white'
      } border  px-4 py-1.5  rounded-lg  text-sm font-medium text-center min-w-[52px] `}
    >
      {children}
    </button>
  )
}

export default Button
