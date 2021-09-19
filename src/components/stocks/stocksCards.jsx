import React from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

const ShowStocks = ({ stock, handleClick }) => {

    const { id, stockName } = stock

    return ( 

        <div>
            <Card>
                <CardHeader>{stockName}</CardHeader>
                <CardBody>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={() => handleClick(id)}>Open</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        </div>

    );
};

export default ShowStocks;