function RatingStars({ rating, setRating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "active-star" : ""}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;