import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Nav.module.css';
import { useEffect } from 'react';



const MainNavigation = () => {

  const date = new Date();
  const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    console.log(window.matchMedia('prefers-color-scheme : light').matches)

  })
  const changeHandler = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <nav className=''>
      <div className={ ` ${styles["nav-container"]} flex` }>

        <p className='date'>{ DAY[date.getDay()] }</p>


        <Link href='/' className={ `${styles.link} link` } as='/'>
          <Image className={ styles.logo } src="/logo.png" priority fill alt="logo" sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
        </Link>


        <p className='date'>{ date.getUTCDate() } { MONTH[date.getMonth()] }. { date.getFullYear() }</p>Í

      </div>

      <div className={ `${styles["nav-container"]}  flex` }>
        <ul className={ `${styles.list} flex` }>
          <li className={ styles.list_link }> <Link className='link' href='/' > Home </Link></li>
          <li className={ styles.list_link }> <Link className='link' href='policies'>  Policies </Link></li>
          <li className={ styles.list_link }> <Link className='link' href='feature'>  Feauture </Link></li>
          <li className={ styles.list_link }> <Link className='link' href='opinion'>  Opinion </Link></li>
          <li className={ styles.list_link }> <Link className='link' href=''>  Backpage </Link></li>
        </ul>
        <form className="form">
          <label htmlFor="search">
            <input autoComplete="off" placeholder="Search" id="search" type="text" />
            <div className="icon">
              <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </div>
          </label>
        </form>
      </div>

    </nav>
  )
}

export default MainNavigation