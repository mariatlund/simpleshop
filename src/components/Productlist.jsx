import Product from "./Product";

function Productlist(props) {
  return (
    <main className="Productlist">
      {props.products.map((product) => (
        <Product key={product.id} data={product} addToCart={props.addToCart} />
      ))}
    </main>
  );
}

export default Productlist;
