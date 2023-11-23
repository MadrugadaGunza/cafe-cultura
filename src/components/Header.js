import React from 'react'
import Logo from '../images/logo.png';
import './Header.css';

function Header() {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' className='logo' />
                    </div>

                    <ul className='nav-list'>
                        <li className='nav-item'>HOME</li>
                        <li className='nav-item'>QUEM SOMOS</li>
                        <li className='nav-item'>PRODUTOS</li>
                        <li className='nav-item'>CLIENTES</li>
                    </ul>

                    <div className='nav-icons'>
                        <i className="fas fa-shopping-cart"></i>
                        <i className='fas fa-search'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
