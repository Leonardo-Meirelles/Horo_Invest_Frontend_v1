import { useEffect, useState } from "react"
import { useLocation } from "@reach/router";
import { Container } from "reactstrap"
import { postStockOrder } from '../../services/stocksService'
import BuyStockForm from './../../components/stocks/buyStockForm';
import Styled from "styled-components";

const StockInfo = ({ id }) => {
    const { state } = useLocation();
    const { stocks } = state;
    const [data, setData] = useState({
        user: {},
        inputFields: [],
        readyToSend: false,
    });
    const result = stocks.find(stock => {
        return parseInt(stock.id) === parseInt(id)
    });

    const handleSubmit = async (user, inputFields) => {

        setData(() => ({ user: user, inputFields: inputFields, readyToSend: true }))
    }

    useEffect(() => {
        async function sending() {
            if (data.readyToSend === true) {
                try {
                    await postStockOrder(id, data)

                } catch (error) {
                    throw error
                }
            }
        }
        sending()
    }, [data])




    return (

        <Container>
            <h1>{result.stockName}</h1>
            <Price>{result.stockPrice}</Price>
            {/* chamar serviço */}
            <BuyStockForm handleSubmit={handleSubmit} />
        </Container>
    )
}

const Price = Styled.h2`
font-weight: 700;
font-size: 30px;
text-align: center;
margin-bottom: 30px;
`

export default StockInfo