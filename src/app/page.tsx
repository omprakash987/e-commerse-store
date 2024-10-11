import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
   <>
  <div className="flex justify-center  ">
      <div className="  p-10 bg-white bg-opacity-10 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-5 animate-slideDown">
          Welcome to Our Store
        </h1>
        <Image src="/ecommerce.avif" alt="Sample Product" width={500} height={100} className=' animate-slideDown' />
      </div>
    </div>
   </>
  )
}

export default page