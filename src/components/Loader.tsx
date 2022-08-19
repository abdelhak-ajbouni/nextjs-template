import React from 'react'

import useStore from 'utils/store'

export default function Loader({ }: Props) {
  const loading = useStore(state => state.loading)

  return (
    <>
      {
        loading && <div className='absolute top-0 bottom-0 right-0 left-0 bg-slate-600 z-50'></div>
      }
    </>
  )
}

type Props = {}