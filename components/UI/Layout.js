import React from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import { Inter } from 'next/font/google'
import Extras from '../layout/extras'

const inter = Inter({ subsets: ['latin'] })

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className='container' >{ props.children }</main>
      <Extras />
      <Footer />
    </>
  )
}

export default Layout