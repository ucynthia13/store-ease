import React from 'react'
import { Input } from '../ui/input'

const SearchBar = () => {
  return (
    <div className="sticky top-0 w-1/3 z-10 flex">
      <Input className="hidden lg:flex rounded-full border-none" placeholder="Start Seaching..."/>
    </div>
  )
}

export default SearchBar
