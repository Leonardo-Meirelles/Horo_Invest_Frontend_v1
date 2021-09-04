import { Link } from '@reach/router';
import Styled from 'styled-components';
import {
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

const NavBar = () => (

    <SDiv>
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
    </SDiv>
)

export default NavBar

const SDiv = Styled.div`
    min-width: 15vw;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
`

const SNav = Styled(Nav)`
   display: flex;
   flex-direction: column;
   justify-content:space-around;
   height:500px;
   background-color: lightgrey;
   padding: 20px;
   border-radius: 20px;
`

const SNavItem = Styled(NavItem)`
    background-color: white;
    width: 7vw;
    text-align: center;
    border-radius: 10px;
    transition-duration: 0.8s;
    &:hover {
        background-color: grey;
    }
    `

const SNavLink = Styled(NavLink)`
    text-decoration: none;
    color: black;
    &:hover {
        color: white;
    }
`

