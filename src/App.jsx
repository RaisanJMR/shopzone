import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import DealsScreen from './screens/DealsScreen';
import ShopsScreen from './screens/ShopsScreen';
import NotFound from './screens/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/deals" element={<DealsScreen/>} />
        <Route path="/shop" element={<ShopsScreen />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
