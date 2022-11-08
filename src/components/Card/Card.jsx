import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className=' bg-white min-h-[300px] mx-2 md:mx-3 rounded-xl hover:shadow-lg transition-shadow'>
            <Link>
                <div className='bg-black rounded-t-xl w-full min-h-[40%] max-h-[40%]'>
                    {/*Imagem*/}
                </div>
                <div className='p-3'>
                    <p>Date</p>
                    <h3>Title</h3>
                    <p>Location</p>
                </div>
            </Link>
        </div>
    )
}

export default Card