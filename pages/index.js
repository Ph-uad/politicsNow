
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css';
import Featured from '@/components/layout/Featured'
import TrendingPost from '@/components/layout/TrendingPost'
import NewsList from '@/components/news/newsList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className={`flex ${styles.hero}`}>
        <Featured />
        <TrendingPost />
      </header>
      
        <NewsList />
  
    </>
  )
}
