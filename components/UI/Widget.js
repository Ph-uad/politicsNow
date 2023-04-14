import React from 'react'
import Link from 'next/link';

const Widget = ({ classN, title, date, image }) => {
    return (
        <li className={ classN }>
            <Link href=''>
                <div className="fill flex">
                    <figure className="figure-landscape">
                        <img src={ image } alt="thumbnail" className="img" />
                    </figure>
                    <div className="news-title-small ">
                        <h3 className='heading-tertiary'>
                            { title }
                        </h3>
                        <h6 className='heading-senary'>
                            { date }
                        </h6>
                    </div>
                </div>
            </Link>
        </li>
    )
};

export default Widget