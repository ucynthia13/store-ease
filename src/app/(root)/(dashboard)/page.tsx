import React from 'react'
import Files from '@/components/app-components.tsx/Files'
import RecentUplods from '@/components/app-components.tsx/RecentUploads'

const Dashboard = () => {
  return (
    <div className="bg-slate-50 h-full m-4 lg:m-8 rounded-xl flex gap-4">
      <Files />
      <RecentUplods />
    </div>
  )
}

export default Dashboard
