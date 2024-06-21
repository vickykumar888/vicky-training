import Product from "./button";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
const ServerSideApiCalling = async () => {
  let productsData = await fetchProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      <ul>
        {productsData.map((product) => (
          <div>
            <li key={product.id}>{product.title}</li>
            <Product price={product.price} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ServerSideApiCalling;
