import goldensnitch from "../assets/images/goldensnitch.webp";

export default function ProductCard(props) {
  return (
    <>
      <div className="product">
        <img src={goldensnitch}></img>
        <h1>Product Card</h1>
        <p className="productPrice">$19.99</p>
        <p>This is our best wand!</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}
