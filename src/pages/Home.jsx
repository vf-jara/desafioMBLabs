import React from 'react'
import Layout from '../components/Layout/Layout'
import Category from '../components/Category/Category'

function Home() {
    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-[1100px]  py-10 px-5 bg-slate-100'>
                    <div>
                        <h2 className="text-2xl font-semibold">Categorias</h2>
                    </div>
                    <div className="flex justify-between border">
                        {
                            /*
                            **************************
                            implementar Map de categorias da API para renderizar todos os itens
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

            </div>
        </Layout>
    )
}

export default Home