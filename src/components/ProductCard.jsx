import goldensnitch from "../assets/images/goldensnitch.webp";

export default function ProductCard() {
  return (
    <>
      <div className="product">
        <img src={goldensnitch}></img>
        <h1>Product Card</h1>
        <p className="productText">This is our most famous wand!</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}
