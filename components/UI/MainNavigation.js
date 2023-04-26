import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Nav.module.css';
import { useRouter } from 'next/router';


const dateObj = new Date();
const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = `${DAY[dateObj.getDay()] + ', ' + MONTH[dateObj.getMonth()] + '. ' + dateObj.getUTCDate() + ' ' + dateObj.getFullYear()}`


const MainNavigation = () => {

  const router = useRouter();

  return (
    <nav className={ styles.main_nav }>

      <div className={ ` ${styles["nav-container"]} flex` }>

        <p className='title--small'>{ date }</p>
        <Link href='/' className={ `${styles.link} link` } as='/'>

          <Image className={ styles.logo } src="/logo.png" priority fill alt="logo" sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />

        </Link>
        <span></span>
      </div>

      <div className={ `${styles["nav-container"]}  flex` }>

        <div className={styles['nav-menu']}>

          <input type="checkbox" className={ styles.checkbox } name="nav-responsive" id="nav-responsive" />
          <label className={ styles.checkbox_label } htmlFor="nav-responsive"> <span className={ styles.checkbox_span }></span> </label>

          <ul className={ styles.list }>

            <li className={ styles.list_link }> <Link className={ `link nav-link ${router.pathname === '/' ? "active" : ''}` } href='/' > Home </Link></li>
            <li className={ styles.list_link }> <Link className={ `link nav-link ${router.pathname === '/policies' ? "active" : ''}` } href='policies'>/  Policies </Link></li>
            <li className={ styles.list_link }> <Link className={ `link nav-link ${router.pathname === '/features' ? "active" : ''}` } href='feature'>/  Feauture </Link></li>
            <li className={ styles.list_link }> <Link className={ `link nav-link ${router.pathname === '/opinion' ? "active" : ''}` } href='opinion'>/  Opinion </Link></li>
            <li className={ styles.list_link }> <Link className={ `link nav-link ${router.pathname === '/backpage' ? "active" : ''}` } href=''> / Backpage </Link></li>

          </ul>

        </div>

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