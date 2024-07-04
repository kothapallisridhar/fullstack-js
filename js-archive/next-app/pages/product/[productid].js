import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productid = router.query.productid;
  console.log("router-query", router.query);
  return <h1>Product deatils of {productid}</h1>;
}
export default ProductDetails;
