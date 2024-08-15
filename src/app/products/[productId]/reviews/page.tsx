export default function Review({ params }: { params: { reviews: string } }) {
  return <h3>Total reviews are {params.reviews}</h3>;
}
