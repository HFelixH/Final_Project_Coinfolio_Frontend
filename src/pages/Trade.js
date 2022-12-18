import React from "react";

// const INITIAL_STATE = {
//     coin: "",
//     amount: "",
//     price: "",
//     date: "",
// };

const Trade = () => {


    

    return (
        <div>
            <form>
                <div>
                    <label>
                        Search for a crypto currency:
                    </label>
                    <br/>
                    <input
                        type="text"
                        name="coin"
                        // value={coin}
                        // onChange={handleChange}
                        autoComplete="off"
                        placeholder="Ex: Bitcoin, Litecoin, Ethereum"
                    />
                </div>
            </form>
            <h1>Trade</h1>
        </div>
    );
}

export default Trade;