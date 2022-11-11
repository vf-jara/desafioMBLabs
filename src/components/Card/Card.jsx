import { Calendar, MapPin } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({ props }) {

    return (
        <div className=' bg-white min-h-[200px] mx-2 md:mx-3 rounded-xl hover:shadow-lg transition-shadow flex flex-col break-words'>
            <Link to={`/event/${props?.id}`}>
                <div className='rounded-xl w-full min-h-[130px]'>
                    <img src={props?.img} className='rounded-lg' />
                </div>
                <div className='p-3 w-full flex flex-col gap-3'>
                    <div className='grid place-content-center'>
                        <h3 className='font-bold text-lg'>{props?.title}</h3>

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