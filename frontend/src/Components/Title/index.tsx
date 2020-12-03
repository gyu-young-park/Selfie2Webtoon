import React from 'react'
import './index.css'

interface Props {
    title : string;
    desc : string;
}

const Title = ({title , desc} : Props) => {
    return(
        <div className="container-title">
            <h1 className="title-text">{title}</h1>
            <h2 className="desc-text">{desc}</h2>
        </div>
    )
}

export default Title;