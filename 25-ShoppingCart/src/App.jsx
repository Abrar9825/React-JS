import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductList from "./pages/productList"
import ProductDetails from "./pages/productDetails"
import CartListPage from "./pages/cartList"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartListPage />} />

      </Routes>
    </Fragment>
  )
}

export default App
