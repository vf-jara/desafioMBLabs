import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout({ children }) {
    return (
        <>
            <div className='min-h-[calc(100vh-65px)]'>
                <Header />
                <div>{children}</div>
            </div>
            <div className='relative'>
                <Footer />
            </div>
        </>
    )
}

export default Layout