import Product from "./Product";

function Productlist(props) {
  return (
    <main className="Productlist">
      {props.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </main>
  );
}

export default Productlist;
