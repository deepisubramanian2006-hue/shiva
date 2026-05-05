let total = 12;
let occupied = 0;

// vehicle icons
let vehicles = ["🚗", "🛵"];

function loadSlots() {
  let container = document.getElementById("slots");
  container.innerHTML = "";

  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("slot");

    // 👉 RANDOM PRE-FILLED VEHICLES
    if (Math.random() < 0.3) {
      div.classList.add("occupied");
      div.innerText = vehicles[Math.floor(Math.random() * vehicles.length)];
      occupied++;
    }

    div.onclick = function () {
      if (div.classList.contains("occupied")) {
        // remove vehicle
        div.classList.remove("occupied");
        div.innerText = "";
        occupied--;
      } else {
        // add vehicle
        let v = vehicles[Math.floor(Math.random() * vehicles.length)];
        div.classList.add("occupied");
        div.innerText = v;
        occupied++;
      }
      updateDashboard();
    };

    container.appendChild(div);
  }

  updateDashboard();
}

function updateDashboard() {
  document.getElementById("occupied").innerText = occupied;
  document.getElementById("available").innerText = total - occupied;
  function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "rit" && p === "123") {
    window.location.href = "vehicle.html"; // next page
  } else {
    alert("Wrong login");
  }
}
}

window.onload = loadSlots;
