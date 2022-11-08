import React from 'react'
import Layout from '../components/Layout/Layout'
import Category from '../components/Category/Category'
import Card from '../components/Card/Card'

function Home() {
    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full h-full flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-slate-100'>
                    <div className='w-full min-h-[300px] bg-black rounded-xl grid place-content-center'>
                        <p className='text-white'>Destaque</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Categorias</h2>

                        <div className="flex justify-between border overflow-auto">
                            {
                                /*
                                **************************
                                implementar Map de categorias da API para renderizar todos os itens e passar as props dos dados pros cards
                                **************************
                                */
                            }
                            <Category />
                            <Category />
                            <Category />
                            <Category />
                            <Category />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Eventos</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:gap-x-4 gap-y-6 border">
                            {
                                /*
                                **************************
                                implementar Map de eventos da API para renderizar todos os itens e passar as props dos dados pros cards
                                **************************
                                */
                            }
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home