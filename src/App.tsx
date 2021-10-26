/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/breeds/breeds-api-slice";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counterReducer.value);

  const dispatch = useAppDispatch();
  const [numProducts, SetNumProducts] = useState<string>("10");
  const { data = [], isFetching } = useFetchBreedsQuery(parseInt(numProducts));

  function handleClick() {
    dispatch(amountAdded(5));
  }

  function numberFormat(number: number) {
    return new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(number);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <span>
          <button onClick={handleClick}>Count is: {count}</button>
        </span>
        <p>Number of products {data?.length}</p>
        <div className="select-container">
          <p className="select-container__title">Products to fetch: </p>
          <select
            defaultValue={numProducts}
            onChange={(e) => SetNumProducts(e.target.value.toString())}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <table className="table table-style" width={"60%"}>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>USD${numberFormat(product.price)}</td>

                <td>
                  <img src={product.image} alt={product.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
