import { useNavigate } from "react-router-dom";
import CommentForm from "../components/comments/CommentForm";
import useReviews from "../hooks/useReviews";

function AddReview() {
  const { addReview } = useReviews();
  const navigate = useNavigate();

  const submitHandler = (data) => {
    addReview(data);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Review</h2>

      <CommentForm submitHandler={submitHandler} />
    </div>
  );
}

export default AddReview;