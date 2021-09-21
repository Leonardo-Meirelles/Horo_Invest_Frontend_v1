import Styled from 'styled-components'
import github from '../images/githubIcon.png'
import gitlab from '../images/gitlabIcon.png'
import instagram from '../images/instagramIcon.png'
import linkedin from '../images/linkedinIcon.png'

const AboutDevs = () => (
    <>
        <Div>
            <h2>Giulia Alzuguir</h2>
            <a href="https://br.linkedin.com/in/giulia-alzuguir"
                target="_blank">
                <Img src={linkedin}
                    alt="linkedin icon" />
            </a>
            <a href="https://github.com/giualz" target="_blank">
                <Img src={github}
                    alt="github icon" />
            </a>
            <a href="https://www.instagram.com/giualz/"
                target="_blank">
                <Img src={instagram}
                    alt="instagram icon" />
            </a>
        </Div>
        
        <Div>
            <h2>Leonardo Meirelles</h2>
            <a href='https://www.linkedin.com/in/leomeirelles/'
                target="_blank">
                <Img src={linkedin}
                    alt="linkedin icon" />
            </a>
            <a href='https://github.com/Leonardo-Meirelles'
                target="_blank">
                <Img src={github}
                    alt="github icon" />
            </a>
            <a href='https://gitlab.com/leonardo.dmeirelles'
                target="_blank">
                <Img src={gitlab}
                    alt="gitlab icon" />
            </a>
        </Div>
    </>
);

const Div = Styled.div`
margin-top: 50px;
margin-left: 15px;
text-align: center;
`

const Img = Styled.img`
width: 8%;
`

export default AboutDevs