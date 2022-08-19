import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react'

import useStore from 'utils/store'
import Container from 'components/common/Container'
import DarkModeToggle from 'components/DarkModeToggle'

export default function NavBar({ noActions, pages, dropdownPages }: Props) {
  const { data: session, status } = useSession()
  const { me, setMe } = useStore(state => state)
  const { image, name, email } = me || {}

  useEffect(() => {
    if (status === "authenticated") {
      setMe(session.user)
    }
  }, [status, session, setMe])

  return (
    <div className='nav-bar bg-white dark:bg-gray-800 border-b'>
      <Container>
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand>
            <Link href={'/'}>
              <Image
                src="/logo-placeholder.png"
                className="mr-3 h-6 sm:h-9 cursor-pointer"
                alt="Logo"
                height={40}
                width={160}
              />
            </Link>
          </Navbar.Brand>
          
          {
            !noActions && (
              <>
                <div className="flex md:order-2">
                  <>
                    <DarkModeToggle />
                    {
                      status === 'authenticated' && (
                        <Dropdown
                          arrowIcon={false}
                          inline={true}
                          label={<Avatar alt="User settings" img={image || ''} rounded={true} />}
                        >
                          <Dropdown.Header>
                            <span className="block text-sm">{name}</span>
                            <span className="block truncate text-sm font-medium">{email}</span>
                          </Dropdown.Header>
                          {
                            dropdownPages.map(({ label, path }) => (
                              <Dropdown.Item key={label}>
                                {label}
                              </Dropdown.Item>
                            ))
                          }
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={() => signOut()}>
                            Sign out
                          </Dropdown.Item>
                        </Dropdown>
                      )
                    }
                    {
                      status === 'unauthenticated' && (
                        <Button color="light" onClick={() => signIn()}>Sign in</Button>
                      )
                    }
                  </>
                  <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                  {
                    pages.map(({ label, path, active }) => (
                      <Navbar.Link key={label} href={path} active={active}>
                        {label}
                      </Navbar.Link>
                    ))
                  }
                </Navbar.Collapse>
              </>
            )
          }

        </Navbar>
      </Container>
    </div>
  )
}

type Props = {
  noActions?: boolean
  pages: {
    label: string
    path: string,
    active: boolean
  }[]
  dropdownPages: {
    label: string
    path: string,
  }[]
}