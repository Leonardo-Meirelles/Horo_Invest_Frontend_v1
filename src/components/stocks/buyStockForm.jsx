import React, { useState } from "react"
import { Input, InputGroup, InputGroupText, Button, Container } from "reactstrap"
import Styled from 'styled-components'

function BuyStockForm() {
    const [inputFields, setInputFields] = useState([
        {
            orderQuantity: '',
            orderPrice: '',
            total: ''
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

    const HandleChange = (index, event) => {
        const values = [...inputFields]
        values[index][event.target.name] = event.target.value;


        const quantity = Number(values[index].orderQuantity)
        const price = Number(values[index].orderPrice)

        values[index].total = quantity * price

        setInputFields(values)
    }

    //the page won't reload everytime the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleAdd = () => {
        setInputFields([...inputFields, { orderQuantity: '', orderPrice: '' }])
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
                    <Input
                        type='text'
                        name='userName'
                        value={userName}
                        onChange={handleName}
                        placeholder="username" />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>Email</InputGroupText>
                    <Input
                        type='text'
                        name='userEmail'
                        value={userEmail}
                        onChange={handleEmail}
                        placeholder="username" />
                </InputGroup>
                <br />
                {inputFields.map((inputField, index) =>
                    <DivForm key={index}>
                        <InputGroup>
                            <InputGroupText>Quantity</InputGroupText>
                            <Input
                                type='number'
                                name='orderQuantity'
                                value={inputField.orderQuantity}
                                onChange={event => HandleChange(index, event)}
                                placeholder="Quantity"
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroupText>Price</InputGroupText>
                            <Input
                                type='number'
                                name='orderPrice'
                                value={inputField.orderPrice}
                                onChange={event => HandleChange(index, event)}
                                placeholder="Price"
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroupText>Total</InputGroupText>
                            <Input
                                type='number'
                                // name='orderTotal'
                                value={inputField.total}
                                placeholder='total'
                                disabled='disabled'
                            />
                        </InputGroup>

                        <Button color="success" onClick={() => handleAdd()}>+</Button>
                        <Button color="success" onClick={() => handleDelete(index)}>-</Button>
                    </DivForm>
                )}
                <Button color="success" onClick={() => handleSubmit()}>Send order</Button>
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

const DivForm = Styled.div`
    display: flex;
    /* flex-direction:  */
`