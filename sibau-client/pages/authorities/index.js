import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Authorities() {
  const router = useRouter();

  useEffect(() => {
    router.push('/authorities/syndicate');
  }, [])
  return (
    <></>
  )
}

export default Authorities