export default function ReviewCount({
  params,
}: {
  params: { reviewCount: string; productId: string };
}) {
  console.log("params", params);
  return (
    <h3>
      Total reviews for Product {params.productId} is {params.reviewCount}
    </h3>
  );
}
