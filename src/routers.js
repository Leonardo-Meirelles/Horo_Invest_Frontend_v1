import { Router } from '@reach/router';
import Layout from './components/layout/layout';
import Home from './views/home';
import Stocks from './views/stocks';
import Admin from './views/admin';
import Buyer from './views/buyer';
import About from './views/about';

function Routers(){
  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Stocks path='/stocks' />
        <Admin path='/admin' />
        <Buyer path='/buyer' />
        <About path='/about' />
      </Router>
    </Layout>
  );
}

export default Routers;
