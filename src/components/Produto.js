import React from 'react';
import ImageCard from '../images/imagem-card.png';
import './Produto.css';

const Produto = () => {
    return (
        <div className='produtos'>
            <h1 className='produtos-title'>NOSSOS PRODUTOS POPULARES</h1>
            <div className='produtos-cards'>
                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$25</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$50</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$25</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$25</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$25</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={ImageCard} alt='' className='card-image' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>CAFÉ PURO</h5>
                        <div className='card-buttons'>
                            <p>$25</p>
                            <button className='card-btn'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produto
