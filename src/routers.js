import { Router } from '@reach/router';
import Layout from './components/layout/layout';
import Home from './views/portal/home';
import Stocks from './views/portal/stocks';
import Admin from './views/portal/admin';
import Buyer from './views/portal/buyer';
import About from './views/portal/about';
import StockInfo from './views/portal/stockInfo';

function Routers(){
  return (

    <Layout>
      <Router>
        <Home path='/' />
        <Stocks exact path='/stocks' />
        <StockInfo exact path='/stocks/:id' />
        <Admin exact path='/admin' />
        <Buyer exact path='/buyer' />
        <About exact path='/about' />
      </Router>
    </Layout>
    
  );
}

export default Routers;