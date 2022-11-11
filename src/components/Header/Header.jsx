import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'


function Header() {
    const [searchParams, setSearchParams] = useState('')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${searchParams}`)

    }
    const handleChange = (e) => {
        setSearchParams(e.target.value)
    }
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
                    <input
                        className='flex w-full md:w-1/2 px-2 border-2 mx-5 rounded-lg focus:outline-[rgba(249,191,76,1)] outline-offset-0'
                        type="search"
                        placeholder="Buscar eventos"
                        value={searchParams}
                        onChange={handleChange} />
                </form>
            </div>
        </div>

    )
}

export default Header