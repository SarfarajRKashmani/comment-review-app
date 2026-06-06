import { useState } from "react";
import CommentForm from "./CommentForm";
import useReviews from "../../hooks/useReviews";

function CommentCard({ review }) {
  const { deleteReview, updateReview } = useReviews();

  const [editing, setEditing] = useState(false);

  const handleUpdate = (data) => {
    updateReview({
      ...data,
      id: review.id
    });

    setEditing(false);
  };

  return (
    <div className="card">
      {editing ? (
        <CommentForm
          submitHandler={handleUpdate}
          initialData={review}
        />
      ) : (
        <>
  <div className="comment-header">
    <div className="user-info">
      <div className="avatar">
        {review.name.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3>{review.name}</h3>
        <span className="comment-date">
          {new Date(review.id).toLocaleDateString()}
        </span>
      </div>
    </div>
  </div>

  <div className="card-rating">
    {"★".repeat(review.rating)}
  </div>

  <span className="comment-badge">
    Verified Review
  </span>

  <p>{review.comment}</p>

  <div className="actions">
    <button onClick={() => setEditing(true)}>
      ✏️ Edit
    </button>

    <button onClick={() => deleteReview(review.id)}>
      🗑 Delete
    </button>
  </div>
</>
      )}
    </div>
  );
}

export default CommentCard;