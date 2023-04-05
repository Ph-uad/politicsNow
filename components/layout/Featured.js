import React from 'react'
import styles from '@/styles/Hero.module.css';

const Featured = () => {
  return (
    <div className={ `${styles.featured_tile} flex` } style={ { background: 'green' } }>
      <span className=' tile-title'>
        <h2 className="news-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, eveniet?
        </h2>
      </span>
    </div>
  )
}

export default Featured