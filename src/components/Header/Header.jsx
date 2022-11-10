import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

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
        <div id='mainHeader' className='w-full flex flex-1 border-b p-3 bg-[rgba(255,255,255,0.6)] shadow backdrop-blur-sm'>
            <div className=' bg-white flex justify-center items-center w-28 md:w-40'>
                <Link to={"/"}>
                    <div>
                        <img src={Logo}></img>
                    </div>
                </Link>
            </div>
            <div className='flex flex-1'>
                <form onSubmit={handleSubmit} className='flex w-full lg:justify-center lg:pr-40'>
                    <input className='flex w-full md:w-1/2 px-2 border-2 mx-5 rounded-lg focus:outline-[rgba(249,191,76,1)] outline-offset-0' type="search" placeholder="Buscar eventos" />
                </form>
            </div>
        </div>

    )
}

export default Header