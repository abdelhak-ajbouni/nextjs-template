import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Accordion({ items }: Props) {
  return (
    <div>
      {
        items.map((item, index) => (
          <Disclosure defaultOpen={index === 0}>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-2 flex items-center text-left uppercase">
                 {open  ? <AiOutlineMinus /> : <AiOutlinePlus /> } <span className='mx-2'>{item.title}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-600 py-4">
                  {item.component}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))
      }
    </div>

  )
}

type Item = {
  id?: string
  title: string
  component: React.ReactNode
}

type Props = {
  items: Item[];
}