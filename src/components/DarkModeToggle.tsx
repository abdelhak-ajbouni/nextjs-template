import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import cn from 'classnames'

import useDarkMode from 'hooks/useDarkMode'

export default function DarkModeToggle({ }: Props) {
  const [dark, setDark] = useDarkMode()

  const getIcon = (isDark: boolean) => {
    console.log('isDark =========================', isDark)
    return isDark ? <MdLightMode /> : <MdDarkMode />
  }

  return (
    <>
      <button
        className={cn(
          "text-neutral-800 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2",
          "hover:bg-neutral-100 focus:outline-none",
          "dark:hover:bg-gray-700 dark:text-white"
        )}
        onClick={() => setDark(!dark)}
        type="button"
      >
        <span className="sr-only">Icon description</span>
        {getIcon(!!dark)}
      </button>
    </>
  )
}

type Props = {}