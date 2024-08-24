import { notFound } from "next/navigation";

export default function ReviewCount({
  params,
}: {
  params: { reviewCount: string; productId: string };
}) {
  console.log("params", params);
  return parseInt(params.reviewCount) > 100 ? (
    notFound()
  ) : (
    <h3>
      Total reviews for Product {params.productId} is {params.reviewCount}
    </h3>
  );
}
