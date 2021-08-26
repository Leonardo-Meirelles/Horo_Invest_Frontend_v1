import { Container } from 'reactstrap';
import HeaderContainer from './header';
import FooterContainer from './footer';
import styled from 'styled-components';

const Layout = ({ children }) => (
    <SContainer>
        <HeaderContainer />
            <Main>
                {children}
            </Main>
        <FooterContainer />
    </SContainer>
)

export default Layout;

const SContainer = styled(Container)`
    background-color: #EEEEEE;
    display: flex;
    height: 100vh;
    flex-direction: column;
`

const Main = styled.main`
    flex: 1;
`