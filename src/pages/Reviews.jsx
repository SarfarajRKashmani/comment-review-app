import useReviews from "../hooks/useReviews";
import CommentCard from "../components/comments/CommentCard";

function Reviews() {
  const { reviews } = useReviews();

  return (
    <div className="container">
      <h2>All Reviews</h2>

     {reviews.length === 0 ? (
  <div className="empty-state">
    <h3>No Reviews Yet</h3>
    <p>Be the first person to share your feedback.</p>
  </div>
) : (
  reviews.map((review) => (
    <CommentCard
      key={review.id}
      review={review}
    />
        ))
      )}
    </div>
  );
}

export default Reviews;