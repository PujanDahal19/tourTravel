import React, { useEffect, useState } from "react";

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val  (2, 0)));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val  (2, 0)));
  return dotProduct / (magnitudeA * magnitudeB);
};

const RecommendationComponent = ({ userId }) => {
  const [recommendedTours, setRecommendedTours] = useState([]);

  useEffect(() => {
    const fetchRecommendations = () => {
      // Load ratings from localStorage
      const storedRatings = JSON.parse(localStorage.getItem("ratingsData")) || [];

      // Get list of unique users and tours
      const users = [...new Set(storedRatings.map((d) => d.userId))];
      const tours = [...new Set(storedRatings.map((d) => d.tourId))];

      // Create user-tour matrix
      const matrix = Array(users.length)
        .fill(0)
        .map(() => Array(tours.length).fill(0));

      storedRatings.forEach(({ userId, tourId, rating }) => {
        const userIndex = users.indexOf(userId);
        const tourIndex = tours.indexOf(tourId);
        if (userIndex !== -1 && tourIndex !== -1) {
          matrix[userIndex][tourIndex] = rating;
        }
      });

      // Find similar users to the current user
      const userIndex = users.indexOf(userId);
      const similarities = matrix.map((vec, i) => ({
        userIndex: i,
        similarity: cosineSimilarity(matrix[userIndex], vec),
      }));

      // Get top tours from similar users
      const topRecommendations = [];
      similarities
        .sort((a, b) => b.similarity - a.similarity)
        .slice(1, 3) // Top 2 similar users, adjust as needed
        .forEach(({ userIndex }) => {
          matrix[userIndex].forEach((rating, tourIndex) => {
            if (rating > 0 && matrix[userIndex][tourIndex] === 0) {
              topRecommendations.push(tours[tourIndex]);
            }
          });
        });

      setRecommendedTours([...new Set(topRecommendations)].slice(0, 3));
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <div>
      <h3>Featured Tours</h3>
      <ul>
        {recommendedTours.length > 0
          ? recommendedTours.map((tour) => <li key={tour}>{tour}</li>)
          : <p>No featured Tours.</p>}
      </ul>
    </div>
  );
};

export default RecommendationComponent;