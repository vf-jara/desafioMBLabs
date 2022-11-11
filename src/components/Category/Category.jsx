import React from 'react'
import { Link } from 'react-router-dom'

function Category(props) {
    return (
        <div className="py-5 px-5 flex flex-col justify-center items-center">
            <Link to={`/category/${props.slug}`}>
                <div className={`container bg-[${props.source}] bg-gradient-to-r from-[rgba(232,70,139,0.5)] to-[rgba(249,191,76,0.5)] w-36 h-36 rounded-full p-7`}>
                    <img src={props.source} />
                </div>
            </Link>
            <Link to={"/category/name"}>
                <h3 className="text-center p-2">{props.title}</h3>
            </Link>
        </div>
    )
}

export default Category