import React from 'react'
import { Link } from 'react-router-dom'

function Category(props) {
    return (
        <div className="py-5 px-5 border flex flex-col justify-center items-center">
            <Link to={"/category/name"}>
                <div className="bg-black w-36 h-36 rounded-full">
                    {/*Imagem*/}
                </div>
            </Link>
            <Link to={"/category/name"}>
                <h3 className="border text-center p-2">Título da Categoria</h3>
            </Link>
        </div>
    )
}

export default Category