import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';


const Header = () => {
    const location = useLocation()

    const selectedRoute = (routerName) => {
        if (routerName === location.pathname.replace('/', '')) {
            return 'selected-link'
        } else {
            return 'not-selected-link'
        }
    }

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
            <a href="/">
                <img className='logo' src={Logo} alt='Logo' title='Logo'/>
            </a>
            <ul className='links'>
                <li >
                    <Link to='/'>Início</Link>
                    <span
                        className={selectedRoute('')}
                    ></span>
                </li>
                <li >
                    <Link to='aboutUs'>Sobre nós</Link>
                    <span className={selectedRoute('aboutUs')}></span>
                </li>
                <li >
                    <Link to='calculator'>Calculadora</Link>
                    <span className={selectedRoute('calculator')}></span>
                </li>
            </ul>
        </div >
    )
}

export default Header