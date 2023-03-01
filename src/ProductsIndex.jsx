export function ProductsIndex(props) {
  return (
    <div>
      <h1>Todas Las Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <h3>{product.description}</h3>
          <img src={product.picture} />
        </div>
      ))}
    </div>
  );
}
