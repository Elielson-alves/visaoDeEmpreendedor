import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import Imggithub from '../images/img-github.png';
import Imglinkedin from '../images/img-linkedin.png';
import Imgwhatsapp  from '../images/Img-whatsapp.png';


const Footer = () => {

    window.addEventListener('scroll', () => {
        const footer = document.getElementById('footer')
        footer.classList.add('scrolled')
        if (window.scrollY == 0) {
            footer.classList.remove('scrolled')
        }
    })

    return (
        <div className='footer' id='footer'>

            <ul className='lista-1'>

                <img className='img-github' src={Imggithub} alt='Github' title='Github' />
                <h2>Github</h2>

                <a href='https://github.com/viny9'>
                    <lo className='linkGithub'> Github Vinicius </lo>
                </a>

                <a href='https://github.com/Elielson-alves'>
                    <lo className='linkGithub' > Github Elielson </lo>
                </a>

                <a href='https://github.com/Elielson-alves/visaoDeEmpreendedor'>
                    <lo className='linkGithub'> Repositório remoto do projeto </lo>
                </a>

            </ul>

            <ul className='lista-2'>

                <img className='img-linkedin' src={Imglinkedin} alt='Linkedin' title='Linkedin' />
                <h2>Linkedin</h2>

                <a href='/'>
                    <lo className='linklinkedin'> Linkedin Vinicius </lo>
                </a>

                <a href='/'>
                    <lo className='linklinkedin' > Linkedin Elielson </lo>
                </a>

            </ul>

            <ul className='lista-3'>

                <img className='img-whatsapp' src={Imgwhatsapp} alt='whasapp' title='whatsapp' />
                <h2>Whatsapp</h2>

                <a href='/'>
                    <lo className='linkwhatsapp'> Whatsapp Vinicius </lo>
                </a>

                <a href='/'>
                    <lo className='linkwhatsapp' > Whatsapp Elielson </lo>
                </a>


            </ul>
        </div >
    )
}

export default Footer