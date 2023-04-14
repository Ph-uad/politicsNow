import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Widget from '../UI/Widget'

const NewsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://politicsnow.ng/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    const dataD = data.map((x) => {
        let beforeHours = x.modified?.indexOf('T');
        let date =  x.modified ? x.modified?.substring(0,beforeHours) : "unknown";
      
        return (
            <Widget classN="tile" image={x?.featured_image_urls?.large[0]} key={Math.random() * data.length} title={ x.title.rendered } date={date} />
        )
    })
    return (

        <ul className="list editorial">
            { dataD }
        </ul>


    )
}

export default NewsList