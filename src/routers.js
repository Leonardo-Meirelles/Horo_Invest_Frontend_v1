import { Router } from '@reach/router';
import Layout from './components/layout/layout';
import Home from './views/portal/home';
import Stocks from './views/portal/stocks';
import Admin from './views/portal/admin';
import User from './views/portal/user'
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
        <User exact path='/user' />
        <About exact path='/about' />
      </Router>
    </Layout>
    
  );
}

export default Routers;