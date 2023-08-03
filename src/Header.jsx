import { useState } from 'react';
import './Header.css'

const Header = () => {
    const [selectedRoute, setSelectedRoute] = useState('inicio') // Mudar quando adicionar as Rotas

    // Vai fazer com que o head siga a pagina
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header')
        header.classList.add('scrolled')
        if (window.scrollY == 0) {
            header.classList.remove('scrolled')
        }
    })

    return (
        <div className='header' id='header'>
            <a href="">
                <h1>Logo</h1>
            </a>
            <ul className='links'>
                <li onClick={e => { setSelectedRoute('inicio'), e.preventDefault() }}>
                    <a href="">ínicio</a>
                    <span
                        className={selectedRoute === 'inicio' ? 'selected-link' : 'not-selected-link'}
                    ></span>
                </li>
                <li onClick={e => { setSelectedRoute('us'), e.preventDefault() }}>
                    <a href="">Sobre nós</a>
                    <span className={selectedRoute === 'us' ? 'selected-link' : 'not-selected-link'}></span>
                </li>
                <li onClick={e => { setSelectedRoute('calculator'), e.preventDefault() }}>
                    <a href="">Calculadora</a>
                    <span className={selectedRoute === 'calculator' ? 'selected-link' : 'not-selected-link'}></span>
                </li>
            </ul>
        </div >
    )
}

export default Header
