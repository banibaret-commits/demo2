const textCount = document.getElementById("count");
const clickButton = document.getElementById("clickBtn");
const reserBtn = document.getElementById("resetBtn");

let count = 0;

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];

const emojis = ["🎉", "😂", "🚀", "🔥", "🍕", "🌟"];


clickButton.addEventListener("click", function () {
  count += 1;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomEmojis = emojis[Math.floor(Math.random() * emojis.length)];
  //console.log(randomColor);

  textCount.textContent = `Clicks: ${count} ${randomEmojis}`;
  textCount.style.backgroundColor = randomColor;
});

resetBtn.addEventListener("click", () =>/* Function */ {
  count = 0; // Reset the count variable
  textCount.textContent = "Clicks: 0"; // Update the display
  textCount.style.backgroundColor = "white"; // Reset the color
});