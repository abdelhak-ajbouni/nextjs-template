import React, { ReactNode } from 'react'

import NavBar from 'components/NavBar'

export default function Default({ children }: Props) {

  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

type Props = {
  children: ReactNode;
}