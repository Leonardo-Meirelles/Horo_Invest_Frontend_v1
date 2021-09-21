import React from 'react';
import Styled from 'styled-components';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    // CardTitle,
    CardText
} from 'reactstrap';

const ShowStocks = ({ stock, handleClick }) => {

    const { id, stockName, stockPrice } = stock

    return (

        <div>
            <SCard>
                <CardHeader>{stockName}</CardHeader>
                <CardBody>
                    <SCardText>{stockPrice}</SCardText>
                    <Button onClick={() => handleClick(id)}>Open</Button>
                </CardBody>
            </SCard>
        </div>

    );
};

const SCard = Styled(Card)`
width: 15vw;
text-align: center;
font-size: 20px;
`

const SCardText = Styled(CardText)`
font-weight: 700;
font-size: 25px;
`

export default ShowStocks;