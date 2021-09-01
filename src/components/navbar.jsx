import { Link } from '@reach/router';
import styled from 'styled-components';
import {
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

const NavBar = () => (
    <SNav>
        <SNavItem>
            <SNavLink tag={Link} to='/'>Home</SNavLink>
        </SNavItem>
        <SNavItem>
            <SNavLink tag={Link} to='/stocks'>Stocks</SNavLink>
        </SNavItem>
        <SNavItem>
            <SNavLink tag={Link} to='/admin'>Admin</SNavLink>
        </SNavItem>
        <SNavItem>
            <SNavLink tag={Link} to='/buyer'>Buyer</SNavLink>
        </SNavItem>
        <SNavItem>
            <SNavLink tag={Link} to='/about'>About</SNavLink>
        </SNavItem>
    </SNav>
)

const SNav = styled(Nav)`
min-width: 15vw;
height: 75vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding-top: 5vh;
padding-bottom: 5vh;
`

const SNavItem = styled(NavItem)`
background-color: white;
width: 7vw;
text-align: center;
`

const SNavLink = styled(NavLink)`
text-decoration: none;
color: black
`

export default NavBar