import React from 'react'
import { Link } from 'react-router-dom'

/*
*******************************
implementar manutenção da busca
*******************************
*/
const handleSubmit = e => {
    e.preventDefault()

}

function Header() {
    return (
        <div className='w-full flex flex-1 border-b p-3 bg-[rgba(255,255,255,0.6)] shadow backdrop-blur-sm'>
            <div className='px-5 py-4 bg-white flex justify-center w-28 md:w-40 border'>
                <Link to={"/"}>
                    <div>LOGO</div>
                </Link>
            </div>
            <div className='flex flex-1'>
                <form onSubmit={handleSubmit} className='flex w-full'>
                    <input className='flex w-full md:w-1/2 px-2 border-2 mx-5 rounded-lg focus:outline-sky-600 outline-offset-0' type="search" placeholder="Buscar eventos" />
                </form>
            </div>
        </div>

    )
}

export default Header