import { Providers } from '@/components/providers/providers'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/app-components.tsx/Sidebar'
import React from 'react'

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <Providers>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full">{children}</div>
      </SidebarProvider>
    </Providers>
  )
}

export default DashboardLayout
