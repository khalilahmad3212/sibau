import Link from 'next/link'
import React from 'react'

function AthoritiesLaout({ children }) {
  return (
    <div className=' container px-10 mx-auto py-10'>
      <div className=' flex justify-between'>
        <h1 className=' text-3xl font-bold'>Authorities</h1>
        <div>
          <Link href='/authorities/senate'>
            <span className=' text-blue-500'>Senate</span>
          </Link>
          <span className=' mx-2'>|</span>
          <Link href='/authorities/syndicate'>
            <span className=' text-blue-500'>Syndicate</span>
          </Link>
          <span className=' mx-2'>|</span>
          <Link href='/authorities/academic-councel'>
            <span className=' text-blue-500'>Academic Councel</span>
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default AthoritiesLaout