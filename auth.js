let users = JSON.parse(localStorage.getItem("users")) || [];

function login() {
  const user = users.find(
    u => u.email === email.value && u.password === password.value
  );
  if (!user) return alert("Invalid login");

  localStorage.setItem("loggedUser", JSON.stringify(user));

  if (user.email === "admin@hostel.com")
    location.href = "admin.html";
  else
    location.href = "index.html";
}

function register() {
  users.push({
    name: name.value,
    email: email.value,
    password: password.value
  });
  localStorage.setItem("users", JSON.stringify(users));
  location.href = "login.html";
}

function logout() {
  localStorage.removeItem("loggedUser");
  location.href = "login.html";
}
