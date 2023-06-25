import React from "react";
import Products from "../components/shop-items/Products";
function Shop({ items, onAddProduct, setItemArr }) {
  const displayItems = items.map((item) => {
    return (
      <div className="container" class="container" key={item.id}>
        <h2>{item.name}</h2>
        <div className="grid" class="grid">
          <Products
            key={item.products.id}
            products={item.products}
            onAddProduct={onAddProduct}
            setItemArr={setItemArr}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <h1>Store</h1>
      {displayItems}
    </>
  );
}

export default Shop;
