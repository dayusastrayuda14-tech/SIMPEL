function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = document.getElementById("regUser").value.trim();
  let pass = document.getElementById("regPass").value.trim();

  if (!user || !pass) {
    alert("Isi semua data!");
    return;
  }

  let exist = users.find(u => u.username === user);

  if (exist) {
    alert("Username sudah dipakai!");
    return;
  }

  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Daftar berhasil!");
  window.location.href = "index.html";
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("Isi semua data!");
    return;
  }

  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("loginUser", user);

    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  localStorage.removeItem("loginUser");
  window.location.href = "index.html";
}
