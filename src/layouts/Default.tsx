import React, { ReactNode } from 'react'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

export default function Default({ children }: Props) {

  return (
    <>
      <NavBar
        pages={[{ label: 'About', path: '/about', active: true }]}
        dropdownPages={[{ label: 'Settings', path: '/me/settings' }]}
      />
      <main className='py-8'>{children}</main>
      <Footer />
    </>
  )
}

type Props = {
  children: ReactNode;
}