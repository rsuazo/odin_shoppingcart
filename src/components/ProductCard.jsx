export default function ProductCard({ imageLink, name, price, description }) {
  return (
    <div className="product">
      <img src={imageLink}></img>
      <h1>{name}</h1>
      <p className="productPrice">{price}</p>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
