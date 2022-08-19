import React, { ReactNode } from 'react'

import NavBar from 'components/NavBar'

export default function Default({ children }: Props) {

  return (
    <>
      <NavBar
        pages={[{ label: 'About', path: '/about', active: true }]}
        dropdownPages={[{ label: 'Settings', path: '/settings' }]}
      />
      <main>{children}</main>
    </>
  )
}

type Props = {
  children: ReactNode;
}