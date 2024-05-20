import React, { ButtonHTMLAttributes, FC } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, className, ...restProps }) => {
  return (
    <button
      className={`${
        className || ''
      } !bg-white-100 flex justify-center items-center border border-solid border-red-100 bg-white rounded-2xl p-1.5 shadow-none size-12`}
      {...restProps}
    >
      {icon}
    </button>
  );
};

export default IconButton;
