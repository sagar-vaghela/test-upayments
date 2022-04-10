import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components/common";
import CreateProduct from "./components/createProduct";
import ProductDetail from "./components/productDetail";
import ProductList from "./components/productList";
import { ROOT_ROUTE, PRODUCT_DETAILS_ROUTE, CREATE_PRODUCT } from './lib/constants/routes';

function App() {
  return (
    <div className="flex justify-center bg-slate-50">
      <div
        className="border-solid box-border w-4/5 p-2.5"
      >
      <Header/>
        <Routes>
          <Route path={ROOT_ROUTE} element={<ProductList />} />
          <Route path={PRODUCT_DETAILS_ROUTE} element={<ProductDetail />} />
          <Route path={CREATE_PRODUCT} element={<CreateProduct />} />
        </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;