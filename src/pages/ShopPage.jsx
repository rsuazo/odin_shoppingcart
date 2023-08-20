import "../styles/ShopPage.css";
import ProductCard from "../components/ProductCard";
import data from "../assets/products.json";

export default function ShopPage() {
  return (
    <div className="shop_container">
      <h1>Shop Home</h1>
      <div className="product_card_container">
        {data.map(function (product) {
          return (
            <ProductCard
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
