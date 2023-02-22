import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/products';
import ErrorPage from './pages/errorPage';
import AddProduct from './pages/addproduct';
import AppContext from './appContext';
import AdminProducts from './pages/adminProducts';
import UpdateProduct from './pages/updateProduct';
import Checkout from './pages/checkout';

const App = () => {
  return (
    <AppContext>
      <div className="App">
        <Router>
          <Switch>
          {/* routes used in the project */}
            <Route path='/' exact component={Products} />
            <Route path='/add-product' component={AddProduct} />
            <Route path='/update-product' component={UpdateProduct} />
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/admin' component={AdminProducts} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </AppContext>
  );
}

export default App;
