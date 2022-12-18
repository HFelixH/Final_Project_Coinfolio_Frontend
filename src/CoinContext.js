import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const Coin = createContext();

const CoinContext = ({children}) => {
    const [currency, setCurrency] = useState("AUD");
    const [symbol, setSymbol] = useState("$");

    useEffect(() => {
        if (currency === "AUD") 
            setSymbol("$");
        else if
            (currency === "USD")
            setSymbol("US$");
        }, [currency]);

    return (
        <Coin.Provider value={{currency, setCurrency, symbol}}>
            {children}
        </Coin.Provider>
    );
}

export default CoinContext;

export const CoinState = () => {
    return useContext(Coin);
}