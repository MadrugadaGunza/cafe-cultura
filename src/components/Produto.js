import React from 'react';
import './Produto.css';
import { useSelector } from 'react-redux';

const Produto = () => {

    const products = useSelector((state) => state.products)

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

export default Produto;
