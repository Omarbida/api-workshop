import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./store";
import Profile from "./views/profile/Profile";
import Users from "./views/users/Users";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/user/:userId" element={<Profile />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
