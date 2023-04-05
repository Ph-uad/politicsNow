import React from 'react'
import Link from 'next/link';

const Widget = (props) => {
    console.log(props)

    return (
        <li className={ props.class }>
            <Link  href=''>
                <div className="fill flex">
                    <figure className="thumbnail"></figure>
                    <h2 className="news-title-small ">Lorem ipsum dolor sit amet consectetur.</h2>
                </div>
            </Link>
        </li>
    )
}; 
 
export default Widget