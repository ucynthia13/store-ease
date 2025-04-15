import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { FileCardProps } from '@/constants'

const FileCard = ({ image, name, size, date, author }: FileCardProps) => {
  return (
    <Link href="/login" className="rounded-2xl shadow-sm p-4 bg-card h-fit">
      <div className="flex justify-between mb-4">
        <div>
          <Image src={image} alt={name} width={50} height={50} />
        </div>
        <div className="flex flex-col items-end justify-between">
          <Menu className="w-5 h-5 text-gray-600" />
          <p className="text-sm">{size}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{name}</p>
        <p className="text-light-400 text-sm">{date}</p>
        <p className="opacity-50 text-sm">By {author}</p>
      </div>
    </Link>
  )
}

export default FileCard
