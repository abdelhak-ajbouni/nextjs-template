import React from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import cn from 'classnames'

export default function DarkModeToggle({ }: Props) {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button
        className={cn(
          "text-neutral-800 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2",
          "hover:bg-neutral-100 focus:outline-none",
          "dark:hover:bg-gray-700 dark:text-white"
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        type="button"
      >
        <span className="sr-only">Icon description</span>
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  )
}

type Props = {}