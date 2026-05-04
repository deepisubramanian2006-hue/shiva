let total = 12;
let occupied = 0;

function loadSlots() {
  let container = document.getElementById("slots");
  if (!container) return;

  container.innerHTML = ""; // clear old

  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("slot");

    div.onclick = function () {
      if (div.classList.contains("occupied")) {
        div.classList.remove("occupied");
        occupied--;
      } else {
        if (occupied < total) {
          div.classList.add("occupied");
          occupied++;
        }
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
