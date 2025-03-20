import React from 'react'
import FileCard from './FileCard'

const Files = () => {
  return (
    <div className="w-full lg:w-1/2 gap-4 grid gris-cols-1 md:grid-cols-2">
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
    </div>
  )
}

export default Files
