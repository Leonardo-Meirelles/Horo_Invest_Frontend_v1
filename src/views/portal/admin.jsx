import OrderHistory from "../../components/adminUser/orderHistory"
import Search from "../../components/adminUser/emailSearch"

const Admin = () => {
    return(
        <>
            <h1>ADMIN</h1>
            <Search />
            <OrderHistory handleDelete={() => {}} />
        </>
    )
}

export default Admin