import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { PageNotFound } from "./components/PageNotFound";
import { Contact } from './components/Contact';
import { ContactIn } from "./components/ContactIn";
import { ContactEu } from "./components/ContactEu";
import { ContactUs } from "./components/ContactUs";
import { ContactOther } from "./components/ContactOther";


function App() {
  const user = true;

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />

          <Route path="contact" element={<Contact />} >
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactOther />} />
          </Route>  

          <Route path="/dipesh" element={<Navigate to="/" />} />
          <Route path="/admin" element={ user ? <Admin /> : <Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
