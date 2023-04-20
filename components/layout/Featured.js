import React from 'react'
import styles from '@/styles/Hero.module.css';

const Featured = ({backgroundImage, headline}) => {
  return (
    <div className={ `${styles.featured_tile} flex` } style={ { backgroundImage: ` linear-gradient(transparent , #0a0a0ae0), url(${backgroundImage})` } }>
      <span className=' featured_tile-title'>
        <h2 className="news-title">
          {headline}
        </h2>
      </span>
    </div>
  )
}

export default Featured