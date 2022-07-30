import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import useDarkMode from 'hooks/useDarkMode'
import Container from 'components/common/Container'

export default function NavBar({ }: Props) {
  const { data: session } = useSession()
  const [dark, setDark] = useDarkMode()

  return (
    <div className='nav-bar bg-white border-b'>
      <Container className="flex justify-between p-4" fluid>

        <div className='logo'>
          LOGO
        </div>

        <div className='user'>
          <button onClick={() => setDark(!dark)}>dark</button>
          {
            session ? (
              <>
                <span className='mx-4'>{session?.user?.email}</span>
                <button onClick={() => signOut()}>Sign out</button>
              </>
            ) : (
              <button onClick={() => signIn()}>Sign in</button>
            )
          }
        </div>

      </Container>
    </div>
  )
}

type Props = {}