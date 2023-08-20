import React from 'react';
import ImageHero from '../images/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1 className='hero-title'>COMECE O SEU DIA COM CAFÉ</h1>
                <p className='hero-description'>
                    Um convite ao ritual matinal que desperta os sentidos e prepara o espírito
                    para as aventuras que aguardam. Uma xícara de café fumegante, envolta em aromas
                    tentadores, é mais do que uma simples bebida; é um abraço líquido que aquece a alma.
                    Cada gole é uma pausa suave no turbilhão da vida, um momento de tranquilidade antes
                    da jornada começar. O amargor do café se mistura com a doçura das promessas de um novo
                    amanhecer, enquanto a cafeína infunde energia no corpo e na mente. Nesses momentos
                    preciosos, a xícara de café se torna um símbolo de conforto, de contemplação e de
                    preparação para as conquistas que estão por vir. Portanto, permita que o aroma acolhedor
                    e o sabor profundo guiem seus passos ao longo do dia, lembrando que tudo é possível quando
                    você começa o dia com café.
                </p>
                <button className='hero-button'>Comece Agora</button>
            </div>
            {/* hero-text */}

            <div className='hero-image'>
                <img src={ImageHero} alt='hero image' className='hero-img' />
            </div>
        </div>
    )
}

export default Hero