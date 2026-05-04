// LOGIN
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "rit" && p === "123") {
    window.location.href = "vehicle.html";
  } else {
    alert("Wrong login");
  }
}

// VEHICLE
function selectVehicle(type) {
  localStorage.setItem("vehicle", type);
  window.location.href = "parking.html";
}

// PARKING LOGIC
let total = 12;
let occupied = 0;

function loadSlots() {
  let container = document.getElementById("slots");
  if (!container) return;

  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("slot");

    div.onclick = function () {
      if (div.classList.contains("occupied")) {
        div.classList.remove("occupied");
        occupied--;
      } else {
        div.classList.add("occupied");
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
}

window.onload = loadSlots;
