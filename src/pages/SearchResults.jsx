import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card/Card'
import Layout from '../components/Layout/Layout'
import { getData } from '../data'

function SearchResults() {
    const page = useParams()

    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getData()
            .then(data => {
                setInfo(data)
                setLoading(false)
            })
    }, [])

    const searched = info.filter(singleInfo => (singleInfo.title.toLowerCase()).includes(page.searchParams.toLowerCase()) || (singleInfo.description.toLowerCase()).includes(page.searchParams.toLowerCase()))


    if (loading) {
        return "Loading"
    }

    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full min-h-screen flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-white'>

                    <h2 className='text-4xl font-semibold'>Você buscou por {page.searchParams}</h2>
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">O que encontramos para você:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 md:gap-x-4 gap-y-6 ">
                            {
                                searched.map((singleInfo) => (
                                    <Card key={singleInfo.id} props={singleInfo} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default SearchResults