import React from 'react'
import fileData from '@/constants'
import FileCard from './FileCard'
const Files = () => {
  return (
    <div className="w-full lg:w-1/2 gap-4 grid gris-cols-1 md:grid-cols-2">
            {fileData.map((file, index) => (
              <FileCard
                key={index}
                image={file.image}
                name={file.name}
                size={file.size}
                date={file.date}
                author={file.author}
              />
            ))}
    </div>
  )
}

export default Files
