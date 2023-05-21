import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [values, setValues] = useState([]);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const getData = async () => {
    const res = await fetch("/computadores.json");
    const data = await res.json();
    setProduct(data);
  }

  //add to shopping cart
  const orderedCartProducts = cart.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });

  const addToCart = (id) => {
    const products = product.find((product) => product.id === id);
    setCart((prevCart) => [...prevCart, products]);
  };

  const removeToCart = (id) => {
    const { index, price } = cart.reduce((accumulator, product, currentIndex) => {
      if (product.id === id) {
        accumulator.index = currentIndex;
        accumulator.price = product.price;
      }
      return accumulator;
    }, { index: -1, price: 0 });

    if (index !== -1) {
      cart.splice(index, 1);
      const flattenedCart = cart.flat();
      setCart(flattenedCart);

      const indexPrice = values.findIndex(element => element === price);
      if (indexPrice !== -1) {
        values.splice(indexPrice, 1);
        const updatedValues = [...values];
        setValues(updatedValues);
        setCalculatedPrice(calculatedPrice - price);
      };
    };
  }

  const arrayProducts = (id) => {
    const filteredProduct = product.find(product => product.id === id);
    const price = filteredProduct.price;
    values.push(price)
    setCalculatedPrice(calculatedPrice + price);
    const response = values.reduce((a, b) => a + b)
    return response
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = {
    product,
    cart,
    setCart,
    addToCart,
    removeToCart,
    arrayProducts,
    calculatedPrice,
    setCalculatedPrice,
    values,
    orderedCartProducts,
  };
  
  return (
    <Context.Provider value={globalState}> {children} </Context.Provider>
  )
}