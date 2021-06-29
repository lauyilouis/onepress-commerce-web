const Product = ({ productId }: any) => {
  return (
    <>
      <div>This is product: {productId}</div>
    </>
  );
};

export default Product;

// ISR Setup.
// This gets called at build time
export async function getStaticPaths() {
  // Get the product ids we want to pre-render (e.g. best seller)
  // TODO 1: Replace the array with graphql query.
  // TODO 2: Update the array type.
  const productIds: Record<string, string>[] = [
    { id: "test01" },
    { id: "test02" },
  ];

  // Get the paths of the products
  const paths = productIds.map(({ id }) => ({
    params: { productId: id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should show 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // Pass product data to the page via props
  return { props: { productId: params.productId } }
}
