import Link from 'next/link'
import styles from '@/styles/Hero.module.css';

const TrendingPost = () => {
  return (
    <section className={styles['trending']}>
      <h2 className="section-title">
        Trending post
        </h2>
        <ul className="list">
          <li>
            <Link href=''>
              <div className="flex-static">
                <figure className="thumbnail"></figure>
                <h2 className="news-title-small">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link href=''>
              <div className="flex-static">
                <figure className="thumbnail"></figure>
                <h2 className="news-title-small">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link href=''>
              <div className="flex-static">
                <figure className="thumbnail"></figure>
                <h2 className="news-title-small">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link href=''>
              <div className="flex-static">
                <figure className="thumbnail"></figure>
                <h2 className="news-title-small">Lorem ipsum dolor sit amet consectetur.</h2>
              </div>
            </Link>
          </li>
        </ul>

    </section>
  )
}

export default TrendingPost