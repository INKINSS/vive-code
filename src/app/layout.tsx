import React from 'react'
import './globals.css'
import NavBar from '@/components/navBar/NavBar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-customWhite" lang="es">
      <head>
        <title>viveCode</title>
      </head>
      <body className="px-6 py-4 container mx-auto">
        <NavBar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
