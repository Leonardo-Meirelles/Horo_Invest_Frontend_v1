import { Container } from 'reactstrap';
import HeaderComponent from './header';
import FooterComponent from './footer';
import NavBar from '../navbar';
import styled from 'styled-components';

const Layout = ({ children }) => (
    <SContainer>
        <HeaderComponent />
            <Main>
                <NavBar />
                {children}
            </Main>
        <FooterComponent />
    </SContainer>
)

export default Layout;

const SContainer = styled(Container)`
    width: 100vw;
    min-height: 100vh ;
    display: flex;
    flex-direction: column;
    
`
const Main = styled.main`
    display: flex;
    align-items: stretch;
    flex-direction: row;
    flex: 1;
    border-right: 2vw solid black;

`