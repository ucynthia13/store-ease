import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const FileCard = () => {
  return (
    <Link href="/login" className="rounded-2xl shadow-sm p-4 bg-card h-fit">
        <div className="flex justify-between mb-4">
            <div className="">
            <Image src="/assets/images/avatar.png" alt="File Logo" width={80} height={80}/> 
            </div>
            <div className="flex flex-col items-end justify-between">
                <Menu />
                <p>2 GB</p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <p className="font-semibold text-lg">File name.png</p>
            <p className="text-light-400">Oct 18th, 2024</p>
            <p className="opacity-50">By Cynthia Umwali</p>
        </div>
    </Link>
  )
}

export default FileCard
