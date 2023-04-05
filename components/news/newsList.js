import React from 'react'
import Link from 'next/link'
import Widget from '../UI/Widget'

const NewsList = () => {
    return (
        <article className='article'>
            <h2>EDITORIALS</h2>
            <ul className="list ">
                <Widget class="tile" />
                <Widget class="tile" />
                <Widget class="tile" />
                <Widget class="tile" />
                <Widget class="tile" />

            </ul>
        </article>

    )
}

export default NewsList