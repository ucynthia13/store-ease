import AppHeader from '@/components/app-components/Header'
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
