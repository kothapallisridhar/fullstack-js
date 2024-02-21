function Product({ id, name, aprice, dprice }) {
  return (
    <>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Actual price: {aprice}</p>
      <p>Discount price: {dprice}</p>
    </>
  );
}

export default Product;
