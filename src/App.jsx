import { useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./store";
import Users from "./views/Users";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
