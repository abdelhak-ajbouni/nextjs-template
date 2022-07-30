import * as React from "react"
import cn from "classnames"
import { FiRefreshCcw } from "react-icons/fi"

export default function Button({ className, label, type, loading, disabled, secondary, onClick, children }: Props) {

  return (
    <button
      className={cn(
        className,
        "button border py-1 px-2 text-xs transition duration-200 ease-in-out cursor-pointer",
        "md:py-2 md:px-4 md:text-base",
        secondary && "text-gray-800 border-black hover:text-white hover:bg-green-700 hover:border-green-800 focus:ring focus:ring-gray-400",
        !secondary && "text-white bg-neutral-800 hover:bg-green-700",
        loading && "loading",
        disabled && "cursor-not-allowed opacity-60"
      )}
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? <FiRefreshCcw className='animate-spin mx-4' /> : children || label}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  label: '',
  type: 'submit',
  loading: false,
  disabled: false,
  secondary: false,
  onClick: () => { },
  children: null,
}

type Props = {
  className?: string;
  label?: string;
  type?: "submit" | "button" | "reset" | undefined;
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}