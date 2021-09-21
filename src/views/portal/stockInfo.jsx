import { useEffect, useState } from "react"
import { Jumbotron, Container } from "reactstrap"
import { getStocksByIdService, postStockOrder } from '../../services/stocksService'
import BuyStockForm from './../../components/stocks/buyStockForm';


const StockInfo = ({ id }) => {

    const [stockInfo, setStockInfo] = useState({});
    const [data, setData] = useState({
        user: {},
        inputFields: [],
        readyToSend: false,
    })


    const handleSubmit = async (user, inputFields) => {

        setData(() => ({ user: user, inputFields: inputFields, readyToSend: true }))
    }

    useEffect(() => {
        async function sending() {
            if (data.readyToSend === true) {
                try {
                    const resultSubmit = await postStockOrder(id, data)

                } catch (error) {
                    throw error
                }
            }
        }
        sending()
    }, [data])




    return (

        <Container>
            <Jumbotron>
                <h1 className="display-3">{stockInfo.stockName}</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                {/* <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p> */}
            </Jumbotron>
            {/* chamar serviço */}
            <BuyStockForm handleSubmit={handleSubmit} />
        </Container>

    )
}

export default StockInfo