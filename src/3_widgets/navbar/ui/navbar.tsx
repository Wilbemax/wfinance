'use client'

import React, { useEffect, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import cx from 'classnames'
import { ChartPie, CreditCard, House, Plus, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './classes.module.scss'

type Props = {}

const Navbar = (props: Props) => {
  const { isScrollingUp, isScrollingDown } = useScrollDirection()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isScrollingDown) {
      timer = setTimeout(() => {
        setIsVisible(false)
      }, 100)
    }

    if (isScrollingUp) setIsVisible(true)

    return () => clearTimeout(timer)
  }, [isScrollingDown, isScrollingUp])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const isActive = (path: string) => pathname === path
  console.log(pathname === '/')

  return (
    <div className={cx(classes.navbar, { [classes.visible]: isVisible })}>
      <Link
        href='/'
        className={cx(classes.icon, {
          [classes.activeIcon]: isActive('/'),
        })}
      >
        <House />
      </Link>
      <Link
        href='/budgets'
        className={cx(classes.icon, {
          [classes.activeIcon]: isActive('/budgets'),
        })}
      >
        <CreditCard />
      </Link>
      <Link
        href='/plus'
        className={cx(classes.icon, classes.plus, {
          [classes.activeIcon]: isActive('/plus'),
        })}
      >
        <Plus />
      </Link>
      <Link
        href='/chart'
        className={cx(classes.icon, {
          [classes.activeIcon]: isActive('/chart'),
        })}
      >
        <ChartPie />
      </Link>
      <Link
        href='/user'
        className={cx(classes.icon,  {
          [classes.activeIcon]: isActive('/user'),
        })}
      >
        <User />
      </Link>
    </div>
  )
}

export { Navbar }
