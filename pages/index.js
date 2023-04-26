// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

// import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css';
import Featured from '@/components/layout/Featured'
import TrendingPost from '@/components/layout/TrendingPost'
import NewsList from '@/components/news/newsList'
import { Suspense } from "react";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className={ `flex ${styles.hero}` }>
        <Swiper
          spaceBetween={ 30 }
          centeredSlides={ true }
          autoplay={ {
            delay: 5000,
            disableOnInteraction: false,
          } }
          navigation={ false }
          modules={ [Autoplay, Navigation] }
          className={ `${styles.featured_tile} mySwiper` }
        >

          <SwiperSlide><Featured backgroundImage="./traffic.webp" headline="Chaos on the roads on a Mega city" /></SwiperSlide>
          <SwiperSlide><Featured backgroundImage="./naira.webp" headline="New naira notes saga continues as festive period approaches" /></SwiperSlide>

        </Swiper>

        <TrendingPost />
      </header>
      <div className="flex">
        <div className=""></div>
        <article className='article'>
          <h2 className="heading-secondary">EDITORIALS</h2>
          <Suspense fallback={<p>Loading</p>}>
            <NewsList />
          </Suspense>
        </article>
        <div className=""></div>
      </div>
    </>
  )
}
