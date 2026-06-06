const KEY = "reviews";

export const getReviews = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveReviews = (reviews) => {
  localStorage.setItem(KEY, JSON.stringify(reviews));
};