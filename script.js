const moodRing = document.getElementById('moodRing');
const status = document.getElementById('status');
const ecoTip = document.getElementById('ecoTip');

const tips = [
  "Turn off lights when not in use.",
  "Shorten your showers.",
  "Use reusable bags and bottles.",
  "Walk or bike instead of driving.",
  "Compost your food waste.",
  "Plant a tree!",
  "Support local produce."
];

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // ← you’ll need to make a free account

async function getData() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=West%20Lafayette,US&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    const temp = data.main.temp;
    const aqi = data.main.humidity; // fake AQI stand-in (we’ll call it “humidity” for now)

    updateUI(temp, aqi);
  } catch (err) {
    status.innerText = "Error loading data 😢";
    console.error(err);
  }
}

function updateUI(temp, aqi) {
  let moodColor = '#aaa';
  let bg = '';

  if (temp < 10) {
    moodColor = '#00bcd4'; bg = '#c1e8ff';
    status.innerText = "Brrr... It’s chilly. ❄️";
  } else if (temp < 20) {
    moodColor = '#4caf50'; bg = '#d0f0c0';
    status.innerText = "Nice and fresh 🌿";
  } else if (temp < 30) {
    moodColor = '#ffc107'; bg = '#ffeaa7';
    status.innerText = "Warm and cozy ☀️";
  } else {
    moodColor = '#f44336'; bg = '#ffb3b3';
    status.innerText = "HOT HOT HOT 🔥 Stay cool!";
  }

  moodRing.style.backgroundColor = moodColor;
  document.body.style.background = `linear-gradient(to bottom, ${bg}, #fff)`;
  ecoTip.innerText = "🌱 Eco Tip: " + tips[Math.floor(Math.random() * tips.length)];
}

getData();
