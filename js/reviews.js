import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

// ================================
// ADD REVIEW
// ================================

const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.querySelector(".revs");

reviewForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("reviewName");
  const messageInput = document.getElementById("reviewMessage");

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "reviews"), {
      name: name,
      message: message,
      timestamp: serverTimestamp(),
    });

    alert("Thank you for your review!");

    reviewForm.reset();
  } catch (error) {
    console.error("Error adding review:", error);
    alert("Something went wrong. Please try again.");
  }
});

// ================================
// DISPLAY REVIEWS
// ================================

const reviewsQuery = query(
  collection(db, "reviews"),
  orderBy("timestamp", "desc"),
);

onSnapshot(
  reviewsQuery,
  (snapshot) => {
    reviewsContainer.innerHTML = "";

    // No reviews yet
    if (snapshot.empty) {
      reviewsContainer.innerHTML = `
        <div class="revBox">
          <img src="./imgs/account.png" class="account-pic">
          <h3>No reviews yet</h3>
          <p>Be the first to leave a review!</p>
        </div>
      `;

      return;
    }

    // Display every review
    snapshot.forEach((doc) => {
      const review = doc.data();

      const reviewBox = document.createElement("div");
      reviewBox.classList.add("revBox");

      reviewBox.innerHTML = `
        <img src="./imgs/account.png" class="account-pic">
        <h3>${review.name}</h3>
        <p>${review.message}</p>
      `;

      reviewsContainer.appendChild(reviewBox);
    });
  },
  (error) => {
    console.error("Error loading reviews:", error);
  },
);
