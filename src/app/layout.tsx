import React from "react"

import { type Metadata } from "next"
import localFont from "next/font/local"

import "@/styles/globals.css"

const geistSans = localFont({
    src: "./fonts/geist-vf.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})

const geistMono = localFont({
    src: "./fonts/geist-mono-vf.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: "Next Template",
    description: "Powered by create next app",
}

interface IRootLayoutProps
{
    children: React.ReactNode
}

function RootLayout({
    children,
}: IRootLayoutProps)
{
    return (
        <html lang={"en"}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
