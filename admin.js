// ===============================
// ADMIN DASHBOARD LOGIC (ONLY)
// ===============================

// Load all feedbacks
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

// DOM elements
const adminList = document.getElementById("adminList");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const resolvedCount = document.getElementById("resolvedCount");

// -------------------------------
// Render Admin Dashboard
// -------------------------------
function renderAdmin() {
  // Update counts
  totalCount.innerText = feedbacks.length;

  pendingCount.innerText = feedbacks.filter(
    f => f.status !== "Resolved"
  ).length;

  resolvedCount.innerText = feedbacks.filter(
    f => f.status === "Resolved"
  ).length;

  // Clear list
  adminList.innerHTML = "";

  // Render each complaint
  feedbacks
    .slice()
    .reverse()
    .forEach((f, index) => {

      let statusClass =
        f.status === "Resolved"
          ? "resolved"
          : f.status === "Seen"
          ? "seen"
          : "pending";

      adminList.innerHTML += `
        <div class="feedback">
          <b>${f.category}</b>
          ${f.rating === "Bad" ? " 🔴" : ""}<br>

          Rating: <b>${f.rating}</b><br>

          <span class="status ${statusClass}">
            ${f.status}
          </span><br>

          ${f.day ? `${f.day} - ${f.session}<br>` : ""}

          ${f.text ? f.text + "<br>" : ""}

          <small>${f.date}</small><br><br>

          <button onclick="setStatus(${index}, 'Seen')">
            Mark Seen
          </button>

          <button onclick="setStatus(${index}, 'Resolved')">
            Mark Resolved
          </button>
        </div>
      `;
    });
}

// -------------------------------
// Update Complaint Status
// -------------------------------
function setStatus(index, newStatus) {
  feedbacks[index].status = newStatus;
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  renderAdmin();
}

// -------------------------------
// Initial Load
// -------------------------------
renderAdmin();
