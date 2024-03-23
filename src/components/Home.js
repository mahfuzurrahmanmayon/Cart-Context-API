import { useContext, useState } from "react";
import allproducts from "../assets/products"
import SingleProduct from "./SingleProduct";
import { Cart } from "./Context";

const Home = () => {
  
  const [products] = useState(allproducts);

  
  console.log(useContext(Cart))
  return (
    <div className="product-container">
      {products.map(product => (
        <SingleProduct key={product.id} prod={product} />
      ))}
    </div>
  )
}

export default Home