import "../styles/ShopPage.css";
import ProductCard from "../components/ProductCard";
import data from "../assets/products";

export default function ShopPage() {
  return (
    <div className="shop_container">
      <h1>Select Your Wand</h1>
      <div className="product_card_container">
        {data.map(function (product) {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageLink={product.imagePath}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}
