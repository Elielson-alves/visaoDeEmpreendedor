import React from 'react';
import './AboutUs.css';
import ImgElielson from '../assets/imgelielson.jpg';
import ImgVinicius from '../assets/imgvinicius.jpg';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className='v-perfil'>
                <img className='img-vinicius' src={ImgVinicius} />
                <h1>Vinicius Oliveira</h1>
                <p>Desenvolvedor Frot-end</p>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className='e-perfil'>
                <img className='img-elielson' src={ImgElielson} />
                <h1>Elielson Alves</h1>
                <p>Desenvolvedor Back-end</p>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default AboutUs