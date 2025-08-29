let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
let callHistory = [];

const heartCountElement = document.getElementById("heart-count");
const coinCountElement = document.getElementById("coin-count");
const callHistoryElement = document.getElementById("call-history");
const copyCountElement = document.getElementById("copy-count");

// Heart Icon Click Event
document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    heartCountElement.textContent = heartCount;
  });
});

// Copy Button Click Event
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    copyCount++;
    const card = this.closest("div.bg-white");
    const hotlineNumber = card.querySelector("h2.font-bold").innerText;
    navigator.clipboard.writeText(hotlineNumber).then(() => {
      alert("📋 Copied: " + hotlineNumber);
    });
    copyCountElement.textContent = copyCount;
  });
});

// update history display
function updateHistory() {
  callHistoryElement.innerHTML = "";
  callHistory.forEach((entry) => {
    const historyItem = document.createElement("div");
    historyItem.classList.add(
      "p-2",
      "bg-gray-100",
      "rounded",
      "flex",
      "justify-between"
    );
    historyItem.innerHTML = `
            <div class="w-full">
              <div class="flex space-x-2 justify-between items-center">
              <p class="font-semibold">${entry.name}</p>
              <p>${entry.time} </p>
              </div>
              
              <p class="text-sm text-gray-600">${entry.number}</p>
            </div>
          `;
    callHistoryElement.appendChild(historyItem);
  });
}

// Call Button Click Event
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (coinCount >= 20) {
      coinCount -= 20;
      coinCountElement.textContent = coinCount;

      const card = this.closest("div.bg-white");
      const hotlineName = card.querySelector("h2.font-semibold").innerText;

      const hotlineNumber = card.querySelector("h2.font-bold").innerText;
      //   timestamp
      let now = new Date();
      let time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      alert(` Calling ${hotlineName} (${hotlineNumber})...`);
      const callEntry = {
        name: hotlineName,
        number: hotlineNumber,
        time: time,
      };
      callHistory.push(callEntry);
      updateHistory();
    } else {
      alert("Insufficient coins! You need at least 20 coins to make a call.");
    }
  });
});

// Clear History Button Click Event
document.getElementById("clear-history-btn").addEventListener("click", () => {
  callHistory = [];
  updateHistory();
});
