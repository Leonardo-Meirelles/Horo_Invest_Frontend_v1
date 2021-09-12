import OrderHistory from "../../components/adminUser/orderHistory"
import Search from "../../components/adminUser/emailSearch"

const Buyer = () => {
    // chama a logica de deletar da api
    const handleDelete = (id) => {}

    return(
        <>
            <h1>BUYER</h1>
            <Search />
            <OrderHistory handleDelete={handleDelete} stockOrders={[]} />
        </>
    )
}

export default Buyer