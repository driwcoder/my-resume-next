import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Linguas = () => {
  return (
    <div>
      <div className='menu-lingua'>
        <div className='english'>
          <Link href='/'>
            <Image src='/united-states.png' width='50' height='50' alt='united-states' className='flag' />
          </Link>
        </div>
        <div className='portuguese'>
          <Link href='/ptbr'>
            <Image src='/brazil.png' width='50' height='50' alt='brazil' className='flag' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Linguas
