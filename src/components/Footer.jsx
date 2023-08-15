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
            <ul className='listOfLinks'>
                <img className='footerImgs' src={Imggithub} alt='Github' title='Github' />
                <h2>Github</h2>

                <ol >
                    <a className='link' href='https://github.com/viny9'> Github Vinicius</a>
                </ol>

                <ol  >
                    <a className='link' href='https://github.com/Elielson-alves'> Github Elielson</a>
                </ol>

                <ol >
                    <a className='link' href='https://github.com/Elielson-alves/visaoDeEmpreendedor'>Repositório remoto do projeto</a>
                </ol>
            </ul>

            <ul className='listOfLinks'>
                <img className='footerImgs' src={Imglinkedin} alt='Linkedin' title='Linkedin' />
                <h2>Linkedin</h2>

                <ol >
                    <a className='link' href='/'>Linkedin Vinicius</a>
                </ol>

                <ol  >
                    <a className='link' href='/'>Linkedin Elielson</a>
                </ol>
            </ul>

            <ul className='listOfLinks'>
                {/* <img className='footerImgs' src={Imgwhatsapp} alt='whasapp' title='whatsapp' /> */}
                <h2>Whatsapp</h2>

                <ol >
                    <a className='link' href='/'> Whatsapp Vinicius</a>
                </ol>

                <ol  >
                    <a className='link' href='/'>Whatsapp Elielson</a>
                </ol>
            </ul>
        </div >
    )
}

export default Footer