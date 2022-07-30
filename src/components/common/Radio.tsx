import React from 'react'
import cn from 'classnames'

export default function Radio({ label, value, checked, onClick }: Props) {
  const isChecked = checked

  return (
    <div className="flex items-center">
      <input
        id={label}
        className="hidden"
        name={label}
        type="radio"
        value={value}
        checked={isChecked}
        onClick={onClick}
      />
      <label className="flex items-center cursor-pointer" htmlFor={label} >
        <span
          className={cn(
            "w-4 h-4 inline-block mr-2 rounded-full border border-grey",
            isChecked && "border-green-700 border-4"
          )}>
        </span>
        <span className='text-neutral-500'>{label}</span>
      </label>
    </div>
  )
}

Radio.defaultProps = {
  label: '',
  value: '',
  checked: false,
  onClick: () => { }
}

type Props = {
  label: string
  value: string | number
  checked?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}