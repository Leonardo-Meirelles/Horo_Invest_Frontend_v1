import React, { useState } from "react"
import { Input, InputGroup, InputGroupText, Button, Container } from "reactstrap"
import Styled from 'styled-components'

function BuyStockForm() {
    const [inputFields, setInputFields] = useState([
        {
            stockQuantity: '',
            stockPrice: ''
        },
    ])
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleName = ({ target }) => {

        setUserName(target.value)
    }

    const handleEmail = ({ target }) => {

        setUserEmail(target.value)
    }

    const handleChange = (index, event) => {
        const values = [...inputFields]
        values[index][event.target.name] = event.target.value;
        setInputFields(values)
    }

    //the page won't reload everytime the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleAdd = () => {
        setInputFields([...inputFields, {stockQuantity: '', stockPrice: ''}])
    }

    const handleDelete = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values)
    }

    return (

        <SContainer>
            <form onSubmit={handleSubmit} >
                <InputGroup>
                <InputGroupText>Name</InputGroupText>
                <Input type='text' value={userName} onChange={handleName} placeholder="username" />
            </InputGroup>

            <InputGroup>
                <InputGroupText>Email</InputGroupText>
                <Input type='text' value={userEmail} onChange={handleEmail} placeholder="username" />
            </InputGroup>
                {inputFields.map((inputField, index) =>
                    <div key={index}>
                        <InputGroup>
                            <InputGroupText>Quantity</InputGroupText>
                            <Input
                                type='number'
                                name='stockQuantity'
                                value={inputField.stockQuantity}
                                onChange={event => handleChange(index, event)}
                                placeholder="Quantity"
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroupText>Price</InputGroupText>
                            <Input
                                type='number'
                                name='stockPrice'
                                value={inputField.stockPrice}
                                onChange={event => handleChange(index, event)}
                                placeholder="Price"
                            />
                        </InputGroup>

                        <Button color="success" onClick={() => handleAdd()}>+</Button>
                        <Button color="success" onClick={() => handleDelete(index)}>-</Button>
                    </div>
                )}
                <Button onClick={() => handleSubmit()}>Send order</Button>
            </form>

        </SContainer>

    )
}

export default BuyStockForm

const SContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`