export default function ProductCard({
  id,
  imageLink,
  name,
  price,
  description,
}) {
  return (
    <div className="product" id={id}>
      <img src={imageLink}></img>
      <h1>{name}</h1>
      <p className="productPrice">{price}</p>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
