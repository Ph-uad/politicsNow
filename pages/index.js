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
          className={`${styles.featured_tile} mySwiper`}
        >

          <SwiperSlide>
            <Featured />
          </SwiperSlide>
          <SwiperSlide>
            <Featured />
          </SwiperSlide>

        </Swiper>

        <TrendingPost />
      </header>
      <div className="flex">
        <div className=""></div>
        <NewsList />
        <div className=""></div>
      </div>
    </>
  )
}
