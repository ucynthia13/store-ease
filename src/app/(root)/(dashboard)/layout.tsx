import AppHeader from '@/components/app-components.tsx/Header'
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <AppHeader />
    {children}
    </>
  )
}

export default DashboardLayout
