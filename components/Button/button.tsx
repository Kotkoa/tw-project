import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
  isMetric: boolean;
}>;

export const Button = ({ onClick, isMetric, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isMetric ? 'border-red-800 bg-red-800 text-white' : 'border-neutral-400 bg-white'
      } min-w-[52px]  rounded-lg border  px-4  py-1.5 text-center text-sm font-medium `}
    >
      {children}
    </button>
  );
};
