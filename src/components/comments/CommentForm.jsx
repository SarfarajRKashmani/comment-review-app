import { useState } from "react";
import RatingStars from "./RatingStars";
import { validateReview } from "../../utils/validation";

function CommentForm({ submitHandler, initialData }) {
  const [name, setName] = useState(initialData?.name || "");
  const [comment, setComment] = useState(initialData?.comment || "");
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      comment,
      rating
    };

    const validationErrors = validateReview(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    submitHandler(formData);

    setName("");
    setComment("");
    setRating(0);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {errors.name && <p>{errors.name}</p>}

      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {errors.comment && <p>{errors.comment}</p>}

      <RatingStars rating={rating} setRating={setRating} />

      {errors.rating && <p>{errors.rating}</p>}

      <button type="submit">Save Review</button>
    </form>
  );
}

export default CommentForm;