import React, 
    {useState} from "react";

function TableOrder() {
    const [inputList, setInputList] = useState([{ name: "", email: "", quantity: "", cost: "" }]);
    const handleAddClick = () => {
        setInputList([...inputList, { name: "", email: "", quantity: "", cost: "" }]);
      };

    return (
            inputList.map((i) => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" name="name" /></td>
                                <td><input type="email" name="email" /></td>
                                <td><input type="number" name="quantity" /></td>
                                <td><input type="number" name="cost" /></td>
                            </tr>
                            <button onClick={ handleAddClick }> Add </button>
                        </tbody>
                    </table>)
            }
            )
        )
}

export default TableOrder