import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
    return (
        <Link to={`/checkout/${props.id}/${props.quantity}`}>
            <button disabled={props.quantity > 0 ? false : true} className='w-[150px] py-3 bg-[#f9bf4c] hover:bg-[#ffab02] transition-all text-xl font-semibold text-white rounded-lg'>Comprar</button>
        </Link>
    )
}

export default Button