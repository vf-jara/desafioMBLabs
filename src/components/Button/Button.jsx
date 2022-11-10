import React from 'react'

function Button(props) {
    console.log("dados do botão:", props.id)
    return (
        <button className='w-[150px] py-3 bg-[#f9bf4c] hover:bg-[#ffab02] transition-all text-xl font-semibold text-white rounded-lg'>Comprar</button>
    )
}

export default Button