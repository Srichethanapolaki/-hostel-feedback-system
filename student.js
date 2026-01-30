let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
let user = JSON.parse(localStorage.getItem("loggedUser"));
let currentCat = "";

function openPopup(cat) {
  currentCat = cat;
  popupTitle.innerText = cat;
  popup.style.display = "block";
  overlay.style.display = "block";
  foodExtra.style.display = cat === "Food" ? "block" : "none";
}

function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
}

function submitFeedback() {
  const r = document.querySelector("input[name='rating']:checked");
  if (!r) return alert("Select rating");

  feedbacks.push({
    userEmail: user.email,
    category: currentCat,
    rating: r.value,
    text: popupText.value,
    day: foodDay?.value || "",
    session: foodSession?.value || "",
    status: "Not Yet Responded",
    date: new Date().toLocaleString()
  });

  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  closePopup();
  renderStudent();
}

function renderStudent() {
  list.innerHTML = "";
  feedbacks
    .filter(f => f.userEmail === user.email)
    .reverse()
    .forEach(f => {
      list.innerHTML += `
        <div class="feedback">
          <b>${f.category}</b><br>
          Rating: ${f.rating}<br>
          Status: <b>${f.status}</b><br>
          <small>${f.date}</small><br>
          ${
            f.status !== "Resolved"
              ? `<button onclick="reRaise('${f.date}')">Re-raise</button>`
              : ""
          }
        </div>`;
    });
}

function reRaise(date) {
  const f = feedbacks.find(x => x.date === date);
  f.status = "Not Yet Responded";
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  renderStudent();
}

renderStudent();
