const App = () => {
  return (
    <>
      <div>Landing</div>
    </>
  );
};

export default App;

export async function getStaticProps({ params }: any) {

  // Pass post data to the page via props
  return { props: { } }
}