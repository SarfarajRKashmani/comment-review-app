import { createContext, useEffect, useState } from "react";
import { getReviews, saveReviews } from "../services/reviewService";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(getReviews());

  useEffect(() => {
    saveReviews(reviews);
  }, [reviews]);

  const addReview = (review) => {
    setReviews([
      ...reviews,
      {
        ...review,
        id: Date.now()
      }
    ]);
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const updateReview = (updatedReview) => {
    setReviews(
      reviews.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      )
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
        deleteReview,
        updateReview
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};