import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { getData } from '../data'

function Details() {

    const page = useParams()
    const id = page.id
    console.log(id)

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
            .then(data => {
                setDetails(data[id - 1])
                setLoading(false)
                console.log(details)
            })
    }, [])

    if (loading) {
        return "Loading"
    }


    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full h-full flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-slate-100'>
                    <div className='grid place-content-center min-h-[200px] border'>
                        <h1 className='text-4xl font-bold'>{details?.title}</h1>

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Details