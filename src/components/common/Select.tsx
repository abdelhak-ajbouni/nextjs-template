import * as React from "react"
import cn from "classnames"

export default function Select({ className, label, items, placeholder, defaultValue, value, onChange }: Props) {
  return (
    <select
      className={cn(
        className,
        'w-full p-1 text-gray-700 bg-white border-gray-300 border-2 appearance-none leading-tight',
        'focus:outline-none focus:shadow-outline',
      )}
      name={label}
      value={value || defaultValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {
        items?.map(({ id, label, value }) => (
          <option
            key={id}
            className='text-gray-700'
            value={value || label}
          >
            {label || value}
          </option>
        ))
      }
    </select >
  )
}

Select.defaultProps = {
  className: '',
  label: '',
  items: [],
  placeholder: 'select an option',
  defaultValue: '',
  value: '',
  onChange: () => { }
}

type Item = {
  id: string | number;
  label?: string;
  value?: string;
}

type Props = {
  className?: string;
  label: string;
  items?: Array<Item>;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChange: (value: string | number) => void;
}
