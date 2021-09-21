import Styled from 'styled-components'
import team from '../images/team.jpg'
import user from '../images/user.jpg'

const Homepage = () => (
    <>
        <Div>
            <InnerDiv>
                <h2>Making your life simpler</h2>
                <p>In 2021, we observed the lack of simplicity on the stock brokers available. Thus, we were born
                    to make your life easier by bringing an application with simple interface but still supporting
                    you with all services you need to invest. Whether you are a new investor or an experienced one,
                    you will find all you need here.<br />
                    Let the complicated part with our team and worry about making your money work for you no matter
                    where you are, be it from the comfort of you house or from your lunch break at work. Let the
                    complicated parts for us.</p>
            </InnerDiv>
            <Img src={user} alt="user working from home" />
        </Div>
        <Div2>
            <InnerDiv2>
                <h2>Our broker</h2>
                <p>Our team of economists and developers is working 24 hours a day to guarantee all functions and
                    support you may need. Our mission is to simplify our users' lives and make investments
                    accessible to everyone.<br />
                    We charge no fees for daily and swing trades. For other types of investments, please reach for our
                    support page.
                </p>
            </InnerDiv2>
            <Img2 src={team} alt="team" />
        </Div2>
    </>
);

const Img = Styled.img`
height: 35vh;
padding: 15px;
`

const Img2 = Styled.img`
display: flex;
height: 35vh;
padding: 15px;
`

const Div = Styled.div`
display: flex;
padding: 15px;
text-align: justify;
text-justify: inter-word;
`

const Div2 = Styled.div`
display: flex;
flex-direction: row-reverse;
padding: 15px;
text-align: justify;
text-justify: inter-word;
`

const InnerDiv = Styled.div`
margin-right: 35px;
`

const InnerDiv2 = Styled.div`
margin-left: 35px;
`

export default Homepage