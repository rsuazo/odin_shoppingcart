import "../styles/ShopPage.css";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  return (
    <>
      <div className="shop_container">
        <h1>Shop Home</h1>
        <div className="product_card_container">
          <ProductCard link />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
