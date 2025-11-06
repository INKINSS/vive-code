import React from 'react'
import './globals.css'

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-customWhite" lang="es">
      <body>{children}</body>
    </html>
  )
}

export default rootLayout
