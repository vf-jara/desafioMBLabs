import React from 'react'
import Header from '../Header/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='w-full'>{children}</div>
        </>
    )
}

export default Layout