import { Backdrop, MenuItem, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { getData } from '../data'

function Checkout() {
    const product = useParams()

    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [gender, setGender] = useState('')
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        cpf: '',
        gender: '',
        cardNumber: '',
        expiryDate: '',
        securityNumber: '',
        cardName: '',
        birthday: '',
        phone: '',
        cep: '',
    })

    const handleName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }
    const handleSurname = (e) => {
        setData({
            ...data,
            surname: e.target.value
        })
    }
    const handleEmail = (e) => {
        setData({
            ...data,
            email: e.target.value
        })
    }
    const handleCpf = (e) => {
        setData({
            ...data,
            cpf: e.target.value
        })
    }
    const handleGender = (e) => {
        setData({
            ...data,
            gender: e.target.value
        })
    }
    const handleCardNumber = (e) => {
        setData({
            ...data,
            cardNumber: e.target.value
        })
    }
    const handleExpire = (e) => {
        setData({
            ...data,
            expiryDate: e.target.value
        })
    }
    const handleSecurity = (e) => {
        setData({
            ...data,
            securityNumber: e.target.value
        })
    }
    const handleCardName = (e) => {
        setData({
            ...data,
            cardName: e.target.value
        })
    }
    const handleBirthday = (e) => {
        setData({
            ...data,
            birthday: e.target.value
        })
    }
    const handlePhone = (e) => {
        setData({
            ...data,
            phone: e.target.value
        })
    }
    const handleCep = (e) => {
        setData({
            ...data,
            cep: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true)
    }

    const handleClose = (e) => {
        setOpen(false)
    }
    console.log(data)
    useEffect(() => {
        getData()
            .then(async data => {
                await setDetails(data[product.id - 1])
                setLoading(false)
            })
    }, [])


    if (loading) {
        return "Loading"
    }

    return (
        <Layout>
            <div className='w-full flex justify-center'>
                <div className='w-full h-full flex flex-col gap-5 max-w-[1100px] py-10 px-5 bg-white'>
                    <div className='flex w-full justify-around px-10'>
                        <div className=' text-2xl flex flex-col gap-3 font-semibold'>

                            <div>
                                <h2 className='text-3xl font-bold'>{details.title}</h2>
                            </div>

                            <p>{details.date}</p>

                            <p>{details.location}</p>

                        </div>
                        <div className='m-w-[200px] '>
                            <div className='border'>
                                <div className='text-white font-semibold bg-[#ffab02] px-3 py-2'>
                                    <span>Ingressos:</span>
                                </div>
                                <div>
                                    <div className='p-3 flex flex-col gap-5'>
                                        <div className='text-xl font-semibold'>{product.quantity} Ingressos = R$ {details.price * product.quantity}</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-2/3 m-auto border'>
                        <form className='border p-5 flex flex-col gap-5' onSubmit={handleSubmit}>
                            <p className='text-xl font-semibold mb-3'>
                                Informações do Participante
                            </p>
                            <p>
                                Atenção: Os ingressos serão enviados para o E-mail cadastrado aqui
                            </p>
                            <div className='flex mt-5 gap-5'>

                                <TextField
                                    label="Nome"
                                    required
                                    variant="outlined"
                                    value={data.name}
                                    onChange={handleName}
                                />

                                <TextField
                                    label="Sobrenome"
                                    required
                                    variant="outlined"
                                    value={data.surname}
                                    onChange={handleSurname} />
                            </div>
                            <div className='flex gap-5'>
                                <TextField
                                    label="E-mail"
                                    required
                                    variant="outlined"
                                    value={data.email}
                                    onChange={handleEmail}
                                />
                                <TextField
                                    label="CPF"
                                    required
                                    variant="outlined"
                                    value={data.cpf}
                                    onChange={handleCpf}
                                />
                            </div>
                            <TextField
                                className='w-1/2'
                                label="Gênero"
                                required
                                select
                                variant="outlined"
                                value={data.gender}
                                onChange={handleGender}>

                                <MenuItem value={"Masculino"}>
                                    Masculino
                                </MenuItem>

                                <MenuItem value={"Feminino"}>
                                    Feminino
                                </MenuItem>
                            </TextField>

                            <p className='text-xl font-semibold'>
                                Informações de Pagamento
                            </p>

                            <TextField
                                label="Número do Cartão"
                                required
                                variant="outlined"
                                value={data.cardNumber}
                                onChange={handleCardNumber}

                            />
                            <TextField
                                label="Data de Validade"
                                required variant="outlined"
                                value={data.expiryDate}
                                onChange={handleExpire}
                            />
                            <TextField
                                label="Código de Segurança"
                                required variant="outlined"
                                value={data.securityNumber}
                                onChange={handleSecurity}
                            />

                            <p className='text-xl font-semibold'>
                                Dados do titular do cartão
                            </p>

                            <TextField
                                label="Nome impresso no cartão"
                                required
                                variant="outlined"
                                value={data.cardName}
                                onChange={handleCardName}
                            />
                            <TextField
                                label="Data de Nascimento"
                                required
                                variant="outlined"
                                value={data.birthday}
                                onChange={handleBirthday}
                            />
                            <TextField
                                label="Telefone"
                                required
                                variant="outlined"
                                value={data.phone}
                                onChange={handlePhone}
                            />
                            <TextField
                                label="CEP"
                                required
                                variant="outlined"
                                value={data.cep}
                                onChange={handleCep}
                            />


                            <button type="submit" className='w-full p-5 bg-[#f9bf4c] hover:bg-[#ffab02] transition-all text-xl font-semibold text-white rounded-lg'>Finalizar</button>
                        </form>
                    </div>
                </div>
            </div>

            <Modal
                className="flex justify-center items-center"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className='absolute w-4/5 bg-white rounded-lg shadow-lg p-8 flex gap-4'>
                    <p>Teste</p>

                </div>
            </Modal>


        </Layout>
    )
}

export default Checkout