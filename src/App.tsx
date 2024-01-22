import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NewsListView, UserListView, UserView } from "./pages";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsListView />} />
          <Route path="/users" element={<UserListView />} />
          <Route path="/user/:userId" element={<UserView />} />
          <Route path="/news" element={<NewsListView />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
