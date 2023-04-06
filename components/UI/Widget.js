import React from 'react'
import Link from 'next/link';

const Widget = (props) => {
    return (
        <li className={ props.class }>
            <Link href=''>
                <div className="fill flex">
                    <figure className="thumbnail--large"></figure>
                    <div className="news-title-small ">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur.
                        </h2>
                        <p>by Sheid Kwarlovskey</p>
                    </div>
                </div>
            </Link>
        </li>
    )
};

export default Widget