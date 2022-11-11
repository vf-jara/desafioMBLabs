import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Category from '../components/Category/Category'
import Card from '../components/Card/Card'
import { getData } from '../data'
import categories from '../categories'


function Home() {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getData()
            .then(data => {
                setInfo(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return "Loading"
    }

    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full h-full flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-white'>
                    <div>
                        <h2 className="text-2xl font-semibold">Categorias</h2>

                        <div className="flex justify-between overflow-auto">

                            {
                                categories.map((item) => (
                                    <Category title={item.title} slug={item.slug} source={item.source} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-2xl font-semibold">Destaque</h2>
                        <div className="w-full min-h-[350px] bg-destaque bg-cover bg-bottom rounded-xl grid place-content-center">

                            <div className=''>
                                <p className='text-white text-6xl font-bold'>Confira nossos eventos de Reveillon</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Eventos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 md:gap-x-4 gap-y-6 ">
                            {
                                info.map((singleInfo) => (
                                    <Card props={singleInfo} />
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home