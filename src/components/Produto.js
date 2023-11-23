import React, { useState, useEffect } from 'react';
import './Produto.css';
import axios from 'axios';

const Produto = () => {

    const [products, setProdutos] = useState([]);

    function fetchDataProdutos() {
        axios.get(`http://localhost:5000/produtos`)
            .then((response) => { setProdutos(response.data); })
            .catch((error) => { console.log(error); })
    }

    useEffect(() => {
        fetchDataProdutos();
    }, [])

    return (
        <div className='produtos'>
            <h1 className='produtos-title'>NOSSOS PRODUTOS POPULARES</h1>
            <div className='produtos-cards'>
                {
                    products.map((produto) => (
                        <div className='card' key={produto.id}>
                            <div className='card-header'>
                                <img src={produto.imagem} className='card-image' alt='Imagem do produto(Café)' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>{produto.nome}</h5>
                                <div className='card-buttons'>
                                    <p>{produto.preco}Kz</p>
                                    <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Produto
