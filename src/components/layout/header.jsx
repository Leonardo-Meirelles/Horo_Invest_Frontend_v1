import styled from 'styled-components';
import logo from "../../images/logo.png"

const HeaderComponent = () => (
    <Header>
        <div>
            <Img src= {logo} alt="Logo" />
        </div>
    </Header>
);

const Header = styled.header`
    background-color: black;
    color: white;
    height: 20vh;
    display: flex;
    justify-content: center;
`

const Img = styled.img`
    height: 20vh;
`

export default HeaderComponent;