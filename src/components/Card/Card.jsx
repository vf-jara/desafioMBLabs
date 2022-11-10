import { Calendar, MapPin } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({ props }) {

    return (
        <div className=' bg-white min-h-[200px] mx-2 md:mx-3 rounded-xl hover:shadow-lg transition-shadow flex flex-col break-words'>
            <Link to={`/event/${props?.id}`}>
                <div className='bg-gradient-to-tr from-[rgba(232,70,139,1)] to-[rgba(249,191,76,1)] rounded-xl w-full min-h-[130px] max-h-[40%]'>
                    {/*Imagem*/}
                </div>
                <div className='p-3 w-full flex flex-col gap-3'>
                    <div className='grid place-content-center'>
                        <h3>{props?.title}</h3>

                    </div>
                    <div className='flex gap-2'>
                        <Calendar size={22} weight="bold" />
                        <p>{props?.date}</p>
                    </div>
                    <div className='flex gap-2'>
                        <MapPin size={22} weight="bold" />
                        <p>{props?.location}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card