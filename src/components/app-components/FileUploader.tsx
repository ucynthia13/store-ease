import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const FileUploader = () => {
  return (
    <Button type="submit" className="rounded-full h-12 px-4">
    <Image src="/assets/images/Upload.png" alt="upload" className="" width={18} height={18}/>
    Upload
  </Button>
  )
}

export default FileUploader
