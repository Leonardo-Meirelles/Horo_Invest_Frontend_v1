import { useEffect, useState } from "react"
import { useLocation } from "@reach/router";
import { Container } from "reactstrap"
import { getStocksByIdService, postStockOrder } from '../../services/stocksService'
import BuyStockForm from './../../components/stocks/buyStockForm';
import Styled from "styled-components";

const StockInfo = ({ id }) => { 
    const {state} = useLocation();
    const { stocks } = state;
    const [stockInfo, setStockInfo] = useState({});
    const [data, setData] = useState({
        user: {},
        inputFields: [],
        readyToSend: false,
    });
    const result = stocks.find( stock => {
       return parseInt(stock.id) === parseInt(id)
    });
    // console.log(result)


    const handleSubmit = async (user, inputFields) => {

        // console.log(id)
        setData(() => ({ user: user, inputFields: inputFields, readyToSend: true }))

        // console.log(user)
        // console.log(inputFields)
        // console.log(data)
        // try {
        //     const resultSubmit = await postStockOrder(id, data)
        //     console.log(resultSubmit)

        // } catch (error) {
        //     throw error
        // }
    }

    

    useEffect(async () => {
        console.log(data);
        if (data.readyToSend === true) {
            try {
                const resultSubmit = await postStockOrder(id, data)
                console.log(resultSubmit)

            } catch (error) {
                throw error
            }
        }
    }, [data])



    return (

        <Container>
            <h1>{ result.stockName }</h1>
            <Price>{ result.stockPrice }</Price>
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