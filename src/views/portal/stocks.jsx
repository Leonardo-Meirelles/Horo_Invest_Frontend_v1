import { useState, useEffect } from "react"
import { Container } from 'reactstrap'
import Styled from 'styled-components'
import { navigate } from '@reach/router'
import ShowStocks from '../../components/stocks/stocksCards'
import { getStocksService } from "../../services/stocksService"

const Stocks = () => {

    const [stocks, setStocks] = useState([])

    useEffect(() => {
        const getStocks = async () => {
            const response = await getStocksService()
            setStocks(response.data)
        }
        getStocks()
    }, [])

    const handleStockDetails = (id) => navigate(`/stocks/${id}`) 

    return (

        <SContainer>

            <h1>STOCKS</h1>
            
            <SDiv>
                {stocks.map((stock) => (
                    <ShowStocks key={stock.id} stock={stock} handleClick={handleStockDetails} />
                ))}
            </SDiv>

        </SContainer>

    )
}

export default Stocks

const SContainer = Styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const SDiv = Styled.div`
    display: grid;
    justify-content: space-between;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`