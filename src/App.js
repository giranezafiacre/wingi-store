import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/products';
import ErrorPage from './pages/errorPage';
import AddProduct from './pages/addproduct';
import AppContext from './appContext';
import AdminProducts from './pages/adminProducts';

const App = () => {
  return (
    <AppContext>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/add-product' component={AddProduct} />
            <Route path='/admin' component={AdminProducts} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </AppContext>
  );
}

export default App;
