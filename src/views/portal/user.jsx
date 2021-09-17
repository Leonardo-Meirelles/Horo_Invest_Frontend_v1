import OrderHistory from "../../components/adminUser/orderHistory"
import Search from "../../components/adminUser/emailSearch"

const User = () => {
  
    return(
        <>
            <h1>USER</h1>
            <Search />
            {/* <OrderHistory handleDelete={handleDelete} stockOrders={[]} /> */}
        </>
    )
}

export default User