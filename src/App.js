import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <header>Header</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/1001" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
