const moodRing = document.getElementById('moodRing');
const status = document.getElementById('status');
const ecoTip = document.getElementById('ecoTip');
const tempDisplay = document.getElementById('tempDisplay');
const aqiDisplay = document.getElementById('aqiDisplay');

const tips = [
  "💡 Turn off lights when you leave a room!",
  "🚿 Take shorter showers to save water.",
  "🍃 Walk or bike instead of driving.",
  "🛍️ Use reusable shopping bags.",
  "🥕 Eat more plants, less meat.",
  "♻️ Recycle your plastics & paper!",
  "🌳 Plant a tree (or hug one).",
  "🌞 Let sunlight in instead of flipping a switch!",
  "🧴 Use eco-friendly cleaning products."
];

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

async function getData() {
  try {
    const city = "West Lafayette,US";
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
