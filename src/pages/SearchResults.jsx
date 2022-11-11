import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

function SearchResults() {
    const page = useParams()
    console.log(page)
    return (
        <Layout>
            <div>SearchResults</div>

        </Layout>
    )
}

export default SearchResults