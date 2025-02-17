"use client"
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-600'>
        <div className="flex flex-wrap gap-6 mt-4 ">
          {/* {images.map((item, index) => ( */}
            <div
              className="w-[280px] h-[180px] p-2 bg-default-100 rounded-md relative"
            //   key={`email-details-image2-${index}`}
            >
              <img src="/esha.jpeg" alt="" className="h-full w-full bg-cover" />
              <Link
                href="/esha.jpeg"
                // href="/abc"
                target="_blank"
                className="h-6 w-6 bg-default-100 rounded absolute top-4 right-4 flex justify-center items-center"
                download={true}
              >
                <Download className="w-3.5 h-3.5 text-primary" />
              </Link>
            </div>
          {/* ))} */}
        </div>
    </div>
  )
}

export default page