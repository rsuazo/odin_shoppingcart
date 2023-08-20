import "../styles/ShopPage.css";
import ProductCard from "../components/ProductCard";
import data from "../assets/products.json";

export default function ShopPage() {
  return (
    <div className="shop_container">
      <h1>Shop Home</h1>
      <div className="product_card_container">
        <ProductCard
          imageLink={data.wands[0].imagePath}
          name={data.wands[0].name}
          price={data.wands[0].price}
          description={data.wands[0].description}
        />
        <ProductCard
          imageLink={data.wands[1].imagePath}
          name={data.wands[1].name}
          price={data.wands[1].price}
          description={data.wands[1].description}
        />
        <ProductCard
          imageLink={data.wands[2].imagePath}
          name={data.wands[2].name}
          price={data.wands[2].price}
          description={data.wands[2].description}
        />
      </div>
    </div>
  );
}
