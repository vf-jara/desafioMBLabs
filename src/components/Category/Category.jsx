import React from 'react'

function Category(props) {
    return (
        <div className="py-5 px-5 border flex flex-col justify-center items-center">
            <div className="bg-black w-36 h-36 rounded-full">
                {/*Imagem*/}
            </div>
            <h3 className="border text-center p-2">Título da Categoria</h3>
        </div>
    )
}

export default Category