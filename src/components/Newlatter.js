import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Newlatter.css';

const Newlatter = () => {
    return (
        <div className='newslatter'>
            <div className='newslatter-redes'>
                <div className='rede'>
                    <FaFacebook />
                    <a href='#'>Facebook</a>
                </div>
                <div className='rede'>
                    <FaInstagram />
                    <a href='#'>Instagram</a>
                </div>
                <div className='rede'>
                    <FaYoutube />
                    <a href='#'>Youtube</a>
                </div>
            </div>

            <div className='newslatter-apoio'>
                <p>Produtos</p>
                <p>Aló Suporte</p>
                <p>Termo de Uso</p>
            </div>

            <div className='newslatter-contacto'>
                <div className='rede'>
                    <FaMapMarkerAlt />
                    <p>Morro Bento</p>
                </div>
                <div className='rede'>
                    <FaPhone />
                    <p>901567534</p>
                </div>
                <div className='rede'>
                    <FaEnvelope />
                    <p>cafe@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Newlatter;
