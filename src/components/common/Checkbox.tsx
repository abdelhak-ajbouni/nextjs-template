import React from 'react'
import cn from 'classnames'

export default function Checkbox({ className, label, children, checked, onChange }: Props) {

  return (
    <div className={cn(className, 'flex items-center')}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className='mx-2 text-neutral-700'>{label || children}</span>
    </div>
  )
}

type Props = {
  className?: string
  label?: string
  checked: boolean
  children?: React.ReactNode
  onChange: (value: boolean) => void
}