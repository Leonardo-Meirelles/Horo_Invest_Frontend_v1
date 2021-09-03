import React, { useState } from "react"
import { Input, InputGroup, InputGroupText, Button, Container } from "reactstrap"
import Styled from 'styled-components'

function BuyStockForm() {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [stockQuantity, setStockQuantity] = useState('')
    const [stockPrice, setStockPrice] = useState('')

    const handleName = ({ target }) => {

        setUserName(target.value)
    }

    const handleEmail = ({ target }) => {

        setUserEmail(target.value)
    }

    const handleQuantity = ({ target }) => {

        setStockQuantity(target.value)
    }

    const handlePrice = ({ target }) => {

        setStockPrice(target.value)
    }

    return (

        <SContainer>

            <InputGroup>
                <InputGroupText>Name</InputGroupText>
                <Input type='text' value={userName} onChange={handleName} placeholder="username" />
            </InputGroup>

            <InputGroup>
                <InputGroupText>Email</InputGroupText>
                <Input type='text' value={userEmail} onChange={handleEmail} placeholder="username" />
            </InputGroup>
            <Button color="success">+</Button>

            <InputGroup>
                <InputGroupText>Quantity</InputGroupText>
                <Input type='number' value={stockQuantity} onChange={handleQuantity} placeholder="username" />
            </InputGroup>

            <InputGroup>
                <InputGroupText>Price</InputGroupText>
                <Input type='number' value={stockPrice} onChange={handlePrice} placeholder="username" />
            </InputGroup>


        </SContainer>

    )
}

export default BuyStockForm

const SContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
`