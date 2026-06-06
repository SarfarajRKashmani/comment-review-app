export const validateReview = (review) => {
  const errors = {};

  if (!review.name.trim()) {
    errors.name = "Name required";
  }

  if (!review.comment.trim()) {
    errors.comment = "Comment required";
  }

  if (review.rating < 1) {
    errors.rating = "Rating required";
  }

  return errors;
};