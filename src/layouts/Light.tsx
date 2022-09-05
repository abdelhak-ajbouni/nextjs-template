import React, { ReactNode } from 'react'

import NavBar from 'components/NavBar'

export default function Default({ children }: Props) {

  return (
    <>
      <NavBar
        noActions
        pages={[{ label: 'About', path: '/about', active: true }]}
        dropdownPages={[{ label: 'Settings', path: '/me/settings' }]}
      />
      <main className='py-8'>{children}</main>
    </>
  )
}

type Props = {
  children: ReactNode;
}