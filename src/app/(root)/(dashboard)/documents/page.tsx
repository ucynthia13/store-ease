import FileCard from '@/components/app-components.tsx/FileCard'
import Filter from '@/components/app-components.tsx/Filter'
import React from 'react'

const Documents = () => {
  return (
    <div className="p-4 lg:p-8 bg-slate-50 h-full m-4 lg:m-8 rounded-2xl">
        <h1 className="text-md md:text-xl lg:text-3xl font-extrabold" >Documents</h1>
        <div className="flex justify-between my-4">
            <p className="">
            Total: <span className="font-bold">12GB</span>
            </p>
            <Filter />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </div>
  )
}

export default Documents
