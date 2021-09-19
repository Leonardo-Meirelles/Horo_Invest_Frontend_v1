import React, { useState } from "react"
import { Input, InputGroup, InputGroupText, Button, Container } from "reactstrap"
import Styled from 'styled-components'

function BuyStockForm({ handleSubmit }) {

    const [user, setUser] = useState({})
    const [inputFields, setInputFields] = useState([
        {
            orderQuantity: '',
            orderPrice: '',
            total: ''
        },
    ])


    const handleUser = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })


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
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

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
            <div
            // onSubmit={handleSubmit(user, inputFields)}
            >
                <InputGroup>
                    <InputGroupText>Name</InputGroupText>
                    <Input
                        type='text'
                        name='userName'
                        value={user.userName}
                        onChange={handleUser}
                        placeholder="Name" />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>Email</InputGroupText>
                    <Input
                        type='text'
                        name='userEmail'
                        value={user.userEmail}
                        onChange={handleUser}
                        placeholder="Email" />
                </InputGroup>
                <br />
                {inputFields.map((inputField, index) =>
                    <DivForm >
                        <InputGroup>
                            <InputGroupText>Quantity</InputGroupText>
                            <Input
                                key={index}
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
                                key={index}
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
                                key={index}
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
                <Button color="success"
                    onClick={() => handleSubmit(user, inputFields)}
                >Send order</Button>
            </div>

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