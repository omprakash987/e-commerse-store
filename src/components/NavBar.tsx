

import React from 'react'
import Link from 'next/link'
import AddToCartButton from '@/components/custom/addToCartButton'


const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-10'>
            <div className='flex items-center'>
               

                <div className='flex items-center p-2 '>
                    <Link className=' ' href="/">Home</Link>
                    <Link href="/product">Products</Link>
                   <AddToCartButton/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar