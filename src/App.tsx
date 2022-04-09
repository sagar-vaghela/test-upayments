import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { PRODUCTS_ROUTE, ROOT_ROUTE, PRODUCT_DETAILS_ROUTE, CREATE_PRODUCT } from './lib/constants/routes';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path={ROOT_ROUTE} element={<>Root Page</>} />
          <Route path={PRODUCTS_ROUTE} element={<>Products Page</>} />
          <Route path={PRODUCT_DETAILS_ROUTE} element={<>Product Detail Page</>} />
          <Route path={CREATE_PRODUCT} element={<>Create Product Page</>} />
        </Routes>
    </div>
  );
}

export default App;