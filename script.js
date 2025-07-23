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
  "🧴 Use eco-friendly cleaning products.",
  "🌊 Save water by fixing leaks and drips.",
  "🌱 Compost your food scraps.",
  "🚮 Reduce single-use plastics.",
  "🕯️ Use candles instead of electric lights.",
  "📦 Buy in bulk to reduce packaging waste.",
  "🧺 Use a clothesline instead of a dryer.",
  "🌍 Support local farmers and markets.",
  "🧼 Make your own cleaning products.",
  "🧢 Wear a hat instead of turning up the heat.",
  "🧊 Keep your fridge at the right temperature (35-38°F).",
  "🧺 Use a basket for shopping instead of plastic bags.",
  "🌿 Choose products with minimal packaging.",
  "🧴 Use bar soap instead of liquid soap in plastic bottles.",
  "🌱 Grow your own herbs or vegetables.",
  "🌼 Use natural pest control methods.",
  "🌍 Support biodiversity by planting native species."
];

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

async function getData() {
  try {
    const city = "West Lafayette,US";
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const weatherData = await weatherRes.json();

    if (weatherRes.ok) {
      const temp = weatherData.main.temp;
      const aqi = await getAQI(city);
      updateUI(temp, aqi);
    } else {
      throw new Error(weatherData.message);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    status.textContent = "Error fetching data";
  }
}
