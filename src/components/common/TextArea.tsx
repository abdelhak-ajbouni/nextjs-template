import * as React from "react"

export default function TextArea({ label, placeholder }: Props) {
  return <textarea
    className='shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    placeholder={placeholder || label}
    aria-label={label}
    rows={5}
  />;
}

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  register: () => { },
}

type Props = {
  label: string;
  placeholder?: string;
}
