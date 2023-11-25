import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/products/productSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [form, setForm] = useState({ nome: '', preco: '', categoria: '', imagem: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(addProduct(form));
        console.table(form);
        navigate("/");
    }

    return (
        <form onSubmit={submit}>
            <label>Nome do Café</label><br />
            <input type="text" name="nome" onChange={handleChange} />
            <br />

            <label>Preço do Café</label><br />
            <input type="text" name="preco" onChange={handleChange} />
            <br />

            <label>Categoria do Café</label><br />
            <input type="text" name="categoria" onChange={handleChange} />
            <br />

            <label>Imagem do Café</label><br />
            <input type="text" name="imagem" onChange={handleChange} />
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;
