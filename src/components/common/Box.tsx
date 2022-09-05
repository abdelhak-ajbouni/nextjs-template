import React from 'react'

export default function Box({ className, children }: Props) {
  return (
    <div className={className + ' bg-primary w-full p-4 rounded'}>
      {children}
    </div>
  )
}

type Props = {
  className?: string
  children: React.ReactNode
}