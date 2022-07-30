
import React from "react"
import { Menu, Transition } from "@headlessui/react";
import cn from "classnames"
import { FaUserAlt } from "react-icons/fa"

export default function Dropdown({ items }: Props) {
  return (
    <div className="border text-white bg-neutral-800 hover:bg-green-700">
      <Menu as="div" className="relative h-full z-30">
        <Menu.Button className="py-2 px-4 h-full">
          <FaUserAlt />
        </Menu.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-in-out duration-150"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items
            className={cn(
              "absolute left-0 z-dropdown w-28 min-w-max mt-2 origin-top-left shadow-sm outline-none",
              "text-neutral-800 bg-white border border-gray-200",
              "dark:bg-neutral-800 dark:border-gray-700"
            )}
          >
            <div className="px-1 py-1">
              <div role="group">
                {
                  items?.map(({ id, label, url, onClick }: Item) => (
                    <Menu.Item key={id}>
                      {({ active, disabled }) => (
                          <button
                            disabled={disabled}
                            aria-disabled={disabled}
                            className={cn(
                              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                              active && "bg-neutral-100 dark:bg-neutral-700",
                              disabled &&
                              "disabled:opacity-60 disabled:cursor-not-allowed"
                            )}
                            onClick={onClick}
                          >
                            {label}
                          </button>
                      )}
                    </Menu.Item>
                  ))
                }
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

Dropdown.defaultProps = {
  items: [],
}

type Item = {
  id: string
  label: string
  url?: string
  onClick: () => void
}

type Props = {
  items: Item[];
}