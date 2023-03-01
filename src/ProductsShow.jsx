export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Descripion: {props.product.description}</p>
      <img src={props.product.url} />
      {/* <p> Supplier ID: {props.product.supplier_id}</p> */}
    </div>
  );
}
