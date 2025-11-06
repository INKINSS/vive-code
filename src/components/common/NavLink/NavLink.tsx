import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
  href: string
  className?: string
  activeClass?: string
  exact?: boolean
  children: React.ReactNode
}

export default function NavLink({
  href,
  className = '',
  activeClass = 'active',
  exact = false,
  children,
}: Props) {
  const pathname = usePathname()

  const isActive = exact ? pathname === href : pathname.startsWith(href)

  const finalClassName = `${className} ${
    isActive ? activeClass : ''
  } text-[1rem]`.trim()

  return (
    <li>
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    </li>
  )
}
