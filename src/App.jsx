import { Routes, Route, Link } from "react-router-dom";
import Reviews from "./pages/Reviews";
import AddReview from "./pages/AddReview";
import Watermark from "./components/Watermark.jsx";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Review Manager</h2>
        <div>
          <Link to="/">Reviews</Link>
          <Link to="/add">Add Review</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/add" element={<AddReview />} />
      </Routes>
      <Watermark />
    </>
  );
}

export default App;