export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h2>Product Details Page {params.productId}</h2>;
}
