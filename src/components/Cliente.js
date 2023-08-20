import React from 'react';
import { FaStar } from 'react-icons/fa';
import Avatar from '../images/avatar.jpg';
import './Cliente.css';

const Produto = () => {
    return (
        <div className='cliente'>
            <h1 className='cliente-title'>NOSSOS CLIENTES</h1>
            <div className='cliente-cards'>
                <div className='card'>
                    <div className='cliente-estrela'>
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <img src={Avatar} alt='avatar' className='avatar-cliente' />
                </div>

                <div className='card'>
                    <div className='cliente-estrela'>
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <img src={Avatar} alt='avatar' className='avatar-cliente' />
                </div>

                <div className='card'>
                    <div className='cliente-estrela'>
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                        <FaStar color='gold' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <img src={Avatar} alt='avatar' className='avatar-cliente' />
                </div>
            </div>
        </div>
    )
}

export default Produto
