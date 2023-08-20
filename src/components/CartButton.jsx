export default function CartButton({ count }) {
  function countDisplay(count) {
    if (count === 0) {
      return "";
    } else {
      return count;
    }
  }

  return (
    <>
      <img
        className="filter-white"
        src="src/assets/images/cart.svg"
        height="22"
        width="22"
      ></img>
      <span className="cart-counter">{countDisplay(count)}</span>
    </>
  );
}
