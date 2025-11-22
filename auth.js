// Fake user (aap backend add karna chahen to kar sakte hain)
const dummyUser = {
  email: "admin@gmail.com",
  password: "123456"
};

// LOGIN
if (window.location.pathname.includes("index.html")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === dummyUser.email && pass === dummyUser.password) {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "home.html";
    } else {
      document.getElementById("error").innerText = "Invalid email or password!";
    }
  });
}

// PROTECT HOME PAGE
if (window.location.pathname.includes("home.html")) {
  let user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("userEmail").innerText = user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
