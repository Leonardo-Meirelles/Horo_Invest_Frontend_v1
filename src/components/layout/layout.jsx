import HeaderComponent from './header';
import FooterComponent from './footer';
import NavBar from '../navbar';
import Styled from 'styled-components';

const Layout = ({ children }) => (

    <SContainer>
        <HeaderComponent />
        <Main>
            <NavBar />
            <Div>
                {children}
            </Div>
        </Main>
        <FooterComponent />
    </SContainer>
    
)

export default Layout;

const SContainer = Styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Div = Styled.div`
    width: 100%;
    padding: 2%;
    border-radius: 30px;
    background-color: lightgrey;
`

const Main = Styled.main`
    display: flex;
    flex: 1;
    border-right: 2vw solid black;
    background-color: black;
`