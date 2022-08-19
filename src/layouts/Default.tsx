import React, { useEffect, ReactNode } from 'react'

import useDarkMode from 'hooks/useDarkMode'
import NavBar from 'components/NavBar'

export default function Default({ children }: Props) {
  const [dark] = useDarkMode()

  useEffect(() => {
    const className = "dark";
    const element = window.document.documentElement;
    if (dark) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [dark]);

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