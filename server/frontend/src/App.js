import LoginPanel from "./components/Login/Login";
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Welcome to our Dealerships!</h2>
        <a href="/dealers">View Dealerships</a>
        <br />
        <br />
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />
    </Routes>
  );
}

export default App;