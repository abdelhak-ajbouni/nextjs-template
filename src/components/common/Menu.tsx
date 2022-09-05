import React from 'react'
import { ListGroup } from 'flowbite-react'
import { ListGroupItemProps } from 'flowbite-react/lib/esm/components/ListGroup/ListGroupItem'

export default function Menu({ items }: Props) {

  return (
    <ListGroup>
      {

        items.map(({ active, label, icon }: Item) => (
          <ListGroup.Item
            key={label}
            active={active}
            icon={icon}
          >
            {label}
          </ListGroup.Item>
        ))

      }
    </ListGroup>
  )
}

type Props = {
  items: Item[]
}

type Item = {
  label: string
  icon: ListGroupItemProps['icon']
  active?: boolean
}