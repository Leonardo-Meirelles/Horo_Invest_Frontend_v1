import React, { useState } from "react";
import { Input, InputGroup, InputGroupText, Button, Container, Table } from "reactstrap"
import Styled from "styled-components";
import { getUserByEmail } from "../../services/userService";
import { deleteOrderById } from "../../services/orderService";

const Search = () => {

    const [userOrders, setUserOrders] = useState('')
    const [email, setEmail] = useState('')
    const [orderDelete, setOrderDelete] = useState([])

    const handleSubmit = async (event) => {
        //previne o evento padrão do form
        event.preventDefault()
        try {
            const result = await getUserByEmail(email)
            setUserOrders(result.data)
            console.log(userOrders)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    // chama a logica de deletar da api
    const handleDelete = async (id) => {
        setOrderDelete = await deleteOrderById(id)
        return orderDelete
    }

    return (
        <div>
            <SContainer>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <InputGroupText>Enter email:</InputGroupText>
                        <Input type='text'
                            placeholder="email"
                            name='userEmail'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </InputGroup>
                    <Button color="success"
                    >Search</Button>
                </form>
            </SContainer>
            <Table striped>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* se stockOrders estiver definida, faz map; caso contrário, nao faz nada */}
                    {userOrders.order?.map(({ stock, orderQuantity, orderPrice, id }, i) => (
                        <tr key={i}>
                            <td>{stock}</td>
                            <td>{orderQuantity}</td>
                            <td>{orderPrice}</td>
                            <td>total</td>
                            <td><Button color="success" onClick={() => handleDelete(id) }>-</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const SContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default Search