import React from 'react'
import cn from 'classnames'
import { Sidebar } from 'flowbite-react'
import { SidebarItemProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItem'
import { groupBy } from 'utils'
import Link from 'next/link'

export default function SideBar({ className, items }: Props) {

  const groupedItems = groupBy(items, v => v.group)

  return (
    <div className={cn(className, 'w-fit')}>
      <Sidebar aria-label="sidebar">
        {
          Object.keys(groupedItems).map((key) => (
            <Sidebar.ItemGroup key={key}>
              {
                groupedItems[key]?.map(({ label, icon }) => (
                  <Link key={label} href={"me/?view=" + label} >
                    <div className='cursor-pointer'>
                      <Sidebar.Item
                        icon={icon}
                      >
                        <span className='text-primary font-bold capitalize'>{label}</span>
                      </Sidebar.Item>
                    </div>
                  </Link>
                ))
              }
            </Sidebar.ItemGroup>
          ))
        }
      </Sidebar>
    </div>
  )
}

type Props = {
  className?: string
  items: Item[]
}

type Item = {
  label: string
  icon: SidebarItemProps['icon']
  group: string
}