import { Calendar, CaretCircleDown, CaretCircleUp, MapPin } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import { getData } from '../data'

function Details() {

    const page = useParams()
    const id = page.id

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)


    const handleIncrement = (quantity) => {
        setQuantity(quantity + 1)
    }
    const handleDecrement = (quantity) => {
        setQuantity(quantity - 1)
    }
    useEffect(() => {
        getData()
            .then(async data => {
                await setDetails(data[id - 1])
                setLoading(false)
                setPrice((details.price * quantity).toFixed(2))
            })
    }, [quantity])

    if (loading) {
        return "Loading"
    }


    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full h-full flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-white'>
                    <div className='grid bg-white place-content-center min-h-[200px]'>
                        <img src={details?.img} />
                    </div>
                    <div className='flex flex-col px-3 md:px-10'>
                        <div className='w-full flex flex-col md:flex-row border-b'>
                            <div className='flex flex-col gap-3 w-full md:w-1/2 my-5 md:my-10'>
                                <h2 className='text-2xl font-bold'>{details?.title}</h2>
                                <div className='flex items-center gap-2'>
                                    <Calendar size={22} weight="bold" />
                                    <p className='text-lg font-semibold'>{details?.date}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MapPin size={22} weight="bold" />
                                    <p className='text-lg font-semibold'>{details?.location}</p>

                                </div>
                            </div>
                            <div className=' w-full md:w-1/2 flex flex-col items-center my-10 justify-center'>
                                <div className='border md:w-1/2'>
                                    <div className='text-white bg-[#ffab02] px-3 py-2'>
                                        <span>Ingressos:</span>
                                    </div>
                                    <div className='p-3 flex flex-col gap-5'>
                                        <div className='text-xl font-semibold'>R$ {price}</div>

                                        <div className='flex w-full items-center gap-3'>

                                            <div className='flex flex-col justify-center items-center'>
                                                <button onClick={() => handleIncrement(quantity)}>
                                                    <CaretCircleUp size={25} weight="bold" className='text-[#f9bf4c]' />
                                                </button>

                                                <div>
                                                    {quantity}
                                                </div>

                                                {
                                                    quantity > 0 ?

                                                        <button onClick={() => setQuantity((quantity) => quantity - 1)}>
                                                            <CaretCircleDown size={25} weight="bold" className='text-[#f9bf4c]' />
                                                        </button>

                                                        :

                                                        <button disabled onClick={() => handleDecrement(quantity)}>
                                                            <CaretCircleDown size={25} weight="bold" className='text-gray-400' />
                                                        </button>
                                                }

                                            </div>
                                            <Button id={details.id} quantity={quantity} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 my-5'>
                            <h3>DESCRIÇÃO DO EVENTO</h3>
                            <div>
                                <p className='font-medium text-lg'>{details?.description}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Details