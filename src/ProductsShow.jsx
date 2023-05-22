export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Descripion: {props.product.description}</p>
      <img src={props.product.url} />
      {/* <p> Supplier ID: {props.product.supplier_id}</p> */}
      <form>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} />
        </div>
        {/* <div>
          Image: <input defaultValue={props.product.url} />
        </div> */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
