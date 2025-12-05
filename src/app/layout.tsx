import React from "react";
import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import NavBar from "@/components/navBar/NavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-customWhite" lang="es">
      <head>
        <title>viveCode</title>
      </head>
      <body className="px-6 py-4 container mx-auto scrollbar-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
