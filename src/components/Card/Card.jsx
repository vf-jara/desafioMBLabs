import React from 'react'
import { Link } from 'react-router-dom'

function Card({ props }) {

    return (
        <div className=' bg-white min-h-[300px] mx-2 md:mx-3 rounded-xl hover:shadow-lg transition-shadow'>
            <Link to={`/event/${props?.id}`}>
                <div className='bg-black rounded-t-xl w-full min-h-[40%] max-h-[40%]'>
                    {/*Imagem*/}
                </div>
                <div className='p-3'>
                    <p>{props?.date}</p>
                    <h3>{props?.title}</h3>
                    <p>{props?.location}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card