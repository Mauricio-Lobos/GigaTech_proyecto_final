import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {

  const initialProductState = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

  // ------ Data for add products to shopping cart ------
  const [cart, setCart] = useState([]);
  const [values, setValues] = useState([]);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [sortOrder, setSortOrder] = useState('');
  const [products, setProducts] = useState(initialProductState);
  const [searchValue, setSearchValue] = useState('');

  // ------ UserConfiguration ------
  const initialStateUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialStateUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : null;
  const [users, setUsers] = useState(initialStateUsers);
  const [user, setUser] = useState(initialStateUser);
  const [userError, setUserError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nextUserId, setNextUserId] = useState(1);

  //---- Favorites ----
  const [favorites, setFavorites] = useState([]);

  // ---- Product functionality ----
  const getData = async () => {
    const res = await fetch("/computadores.json");
    const data = await res.json();
    setProducts(data);
  }

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
    const productToAdd = products.find((product) => product.id === id);
    setCart((prevCart) => [...prevCart, productToAdd]);
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
    const filteredProduct = products.find(product => product.id === id);
    const price = filteredProduct.price;
    values.push(price)
    setCalculatedPrice(calculatedPrice + price);
    const response = values.reduce((a, b) => a + b)
    return response
  };

  useEffect(() => {
    getData();
  }, []);

  // ---- OrderProducts ----
  const sortProducts = (sortValue) => {
    let sortedProducts = [...products];

    if (sortValue === 'price-lowest') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-highest') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'id') {
      sortedProducts.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    }

    setProducts(sortedProducts);
    setSortOrder(sortValue);
  };

  // ---- User configuration ----
  const getUsers = async () => {
    const res = await fetch("users.json");
    const users = await res.json();
    return users;
  };

  const login = async (email, password) => {
    const users = await getUsers();
    const userDB = users.find(
      (item) => item.email === email && password === item.password
    );
    if (userDB) {
      setUser(userDB);
      localStorage.setItem("user", JSON.stringify(userDB));
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }

    return userDB;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = (user) => {
    const userDB = users.find((item) => item.email === user.email);
    if (userDB) return userDB;
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    setUsers([...users, user]);
  };

  const updateUser = (user) => {
    setUser(user);
    const usersUpdate = users.map((item) =>
      item.id === user.id ? user : item
    );
    setUsers(usersUpdate);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
  if (users === null || users.length === 0) {
    getUsers();
  }
  // eslint-disable-next-line
}, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // --- Favorites configurations ---
  const addFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const deleteFavorites = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };

  // ---- add and update seller's products
  const getProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const createProduct = (product) => {
    setProducts([product, ...products]);
    return product;
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const updateProduct = (newProduct) => {
    const newProducts = products.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct;
      }
      return product;
    });

    setProducts(newProducts);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const globalState = {
    products,
    cart,
    setCart,
    addToCart,
    removeToCart,
    arrayProducts,
    calculatedPrice,
    setCalculatedPrice,
    orderedCartProducts,
    sortProducts,
    sortOrder,
    searchValue, 
    setSearchValue,
    email, 
    setEmail,
    password, 
    setPassword,
    user,
    users,
    setUsers, 
    userError, 
    setUserError,
    nextUserId, 
    setNextUserId,
    login, 
    logout,
    register,
    updateUser,
    favorites,
    addFavorites,
    deleteFavorites,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
  };
  return (
    <Context.Provider value={globalState}> {children} </Context.Provider>
  )
}

export default Provider;