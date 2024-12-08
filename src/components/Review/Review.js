// components/Review/Review.js
import React from 'react';
import './Review.css'; // Добавьте стили, если нужно

const reviews = [
  {
    id: 1,
    name: "Иван Петров",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment: "Отличный сервис! Очень доволен покупкой.",
  },
  {
    id: 2,
    name: "Анна Макарова",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    comment: "Прекрасное качество и быстрая доставка. Даже ОZON и WILDBERRIES не сравнятся с ним",
  },
  {
    id: 3,
    name: "Сергей Смирнов",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    comment: "Рекомендую всем своим друзьям! Очень быстро доставили, лучший маркетплейс",
  },
];

const Review = () => {
  return (
    <div className="reviews">
      <h2>Отзывы</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="review-content">
            <h3>{review.name}</h3>
            <div className="rating">{'⭐'.repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
