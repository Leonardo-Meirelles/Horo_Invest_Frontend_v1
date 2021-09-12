import React from 'react';
import {
    Table,
    Button
} from 'reactstrap';

const OrderHistory = ({ handleDelete, stockOrders }) => {

    return (
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
                {stockOrders?.map(({ stock, orderQuantity, stockPrice, id }, i) => (
                    <tr key={i}>
                        <td>{stock}</td>
                        <td>{orderQuantity}</td>
                        <td>{stockPrice}</td>
                        <td>total</td>
                        <td><Button color="success" onClick={() => handleDelete(id)}>-</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default OrderHistory;
