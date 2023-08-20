import React from 'react'
import HistotiaCoffe from '../images/historia-image.jpg';
import './Historia.css';

const Historia = () => {
    return (
        <div className='historia'>
            <div className='historia-img'>
                <img src={HistotiaCoffe} alt='historia' className='historia-image' />
            </div>
            <div className='historia-text'>
                <h1 className='historia-title'>NOSSA HISTÓRIA</h1>
                <p className='historia-description'>
                    Nas ruas estreitas de uma pitoresca cidadezinha, erguia-se uma pequena cafeteria chamada
                    "Aroma Matinal". Era conhecida por servir o café mais delicioso e envolvente de toda a região.
                    Seu proprietário, um homem de cabelos grisalhos chamado Miguel, tinha um talento único para
                    preparar a bebida perfeita para cada cliente que entrava pela porta.
                </p>

                <p className='historia-description'>
                    Certa manhã, uma jovem chamada Clara passou por essa cafeteria. Ela tinha olhos brilhantes e um
                    sorriso tímido que escondia uma vida cheia de sonhos e desafios. Clara estava no início de sua
                    carreira como escritora, mas estava lutando para encontrar a inspiração que tanto precisava.
                    Ela decidiu entrar na "Aroma Matinal" em busca de um momento de tranquilidade
                </p>
                <button className='historia-button'>
                    Saiba Mais
                </button>
            </div>
        </div>
    )
}

export default Historia