import { Link } from '@reach/router';
import styled from 'styled-components';
import {
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

const HeaderContainer = () => (
    <Header>
        <div>
            <img src="" alt="" />
        </div>
        <Nav>
            <NavItem>
                <SNavLink tag={Link} to='/'>Home</SNavLink>
            </NavItem>
            <NavItem>
                <SNavLink tag={Link} to='/stocks'>Stocks</SNavLink>
            </NavItem>
            <NavItem>
                <SNavLink tag={Link} to='/admin'>Admin</SNavLink>
            </NavItem>
            <NavItem>
                <SNavLink tag={Link} to='/buyer'>Buyer</SNavLink>
            </NavItem>
            <NavItem>
                <SNavLink tag={Link} to='/about'>About</SNavLink>
            </NavItem>
        </Nav>
    </Header>
);

const Header = styled.header`
    background-color: black;
    color: white;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SNavLink = styled(NavLink)`
    background-color: white;
    color: black;
    text-decoration: none;
`

export default HeaderContainer;