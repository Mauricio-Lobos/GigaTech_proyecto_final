import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
    const [product, setProduct] = useState([]);

    const getData = async () => {
        const res = await fetch("/computadores.json");
        const data = await res.json();
        setProduct(data);
        console.log(data)
    }

    useEffect(() => {
        getData();
      }, []);

    const globalState = {
        product
    };
      return(
        <Context.Provider value={ globalState }> { children } </Context.Provider>
      )
}