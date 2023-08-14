import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import Imggithub from '../assets/img-github.png';
import Imglinkedin from '../assets/img-linkedin.png';


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
                    <ol className='linkGithub'> Github Vinicius </ol>
                </a>

                <a href='https://github.com/Elielson-alves'>
                    <ol className='linkGithub' > Github Elielson </ol>
                </a>

                <a href='https://github.com/Elielson-alves/visaoDeEmpreendedor'>
                    <ol className='linkGithub'> Repositório remoto do projeto </ol>
                </a>

            </ul>

            <ul className='lista-2'>

                <img className='img-linkedin' src={Imglinkedin} alt='Linkedin' title='Linkedin' />
                <h2>Linkedin</h2>

                <a href='/'>
                    <ol className='linklinkedin'> Linkedin Vinicius </ol>
                </a>

                <a href='/'>
                    <ol className='linklinkedin' > Linkedin Elielson </ol>
                </a>

            </ul>

            <ul className='lista-3'>

                {/* <img className='img-whatsapp' src={Imgwhatsapp} alt='whasapp' title='whatsapp' /> */}
                <h2>Whatsapp</h2>

                <a href='/'>
                    <ol className='linkwhatsapp'> Whatsapp Vinicius </ol>
                </a>

                <a href='/'>
                    <ol className='linkwhatsapp' > Whatsapp Elielson </ol>
                </a>


            </ul>
        </div >
    )
}

export default Footer