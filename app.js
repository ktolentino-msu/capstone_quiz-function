// ── Data ──────────────────────────────────────────────────────────────────────

const FOOD_DATA = {
  "Potato Chips": {
    emissions: { val: "0.58 kg", level: "high" },
    local:     { val: "$350",    level: "high" },
    health:    { val: 85,        level: "great" },
    stores: {
      "Aldi":    { productName: "Clancy's Original Potato Chips, 10oz",         price: "$1.99", priceLevel: "good" },
      "Meijer":  { productName: "Meijer Original Potato Chips, 12.5oz",         price: "$2.19", priceLevel: "good" },
      "Walmart": { productName: "Great Value Original Wavy Potato Chips, 13oz", price: "$2.96", priceLevel: "high" },
      "Kroger":  { productName: "Kroger Original Classic Potato Chips, 13oz",   price: "$2.79", priceLevel: "high" },
    },
  },
  "Beef": {
    emissions: { val: "3.30 kg", level: "high" },
    local:     { val: "$120",    level: "good" },
    health:    { val: 45,        level: "low" },
    stores: {
      "Aldi":    { productName: "Fresh 80% Lean/20% Fat Ground Beef, per lb",             price: "$5.69/lb", priceLevel: "good" },
      "Meijer":  { productName: "Angus Beef 80/20 Ground Chuck Family Pack, 1lb",         price: "$6.99/lb", priceLevel: "high" },
      "Walmart": { productName: "85% Lean/15% Fat Ground Beef, 1lb roll",                 price: "$6.22/lb", priceLevel: "high" },
      "Kroger":  { productName: "Private Selection 80/20 Angus Ground Beef Chuck, 1lb",   price: "$8.49/lb", priceLevel: "high" },
    },
  },
  "Multi Grain Bread": {
    emissions: { val: "0.92 kg", level: "high" },
    local:     { val: "$210",    level: "high" },
    health:    { val: 72,        level: "great" },
    stores: {
      "Aldi":    { productName: "Low Sodium Sprouted 7 Grain Bread, 16oz",            price: "$3.95", priceLevel: "good" },
      "Meijer":  { productName: "Multigrain Sliced Sourdough Bread, 16oz",            price: "$4.49", priceLevel: "good" },
      "Walmart": { productName: "The Rustik Oven Hearty Grains & Seeds Bread, 16oz", price: "$4.68", priceLevel: "high" },
      "Kroger":  { productName: "The Rustik Oven Hearty Grains & Seeds Bread, 16oz", price: "$4.99", priceLevel: "high" },
    },
  },
  "Apples": {
    emissions: { val: "0.43 kg", level: "good" },
    local:     { val: "$480",    level: "high" },
    health:    { val: 92,        level: "great" },
    stores: {
      "Aldi":    { productName: "Pink Lady Apples, 3lb bag",     price: "$3.55", priceLevel: "good" },
      "Meijer":  { productName: "Pink Lady Apples, 3lb bag",     price: "$4.69", priceLevel: "high" },
      "Walmart": { productName: "Pink Lady Apples, per lb",      price: "$4.62", priceLevel: "high" },
      "Kroger":  { productName: "Pink Lady Apples, 3lb bag",     price: "$3.99", priceLevel: "good" },
    },
  },
  "Milk": {
    emissions: { val: "1.10 kg", level: "high" },
    local:     { val: "$290",    level: "good" },
    health:    { val: 78,        level: "great" },
    stores: {
      "Aldi":    { productName: "Friendly Farms 1% Milk, 1 gal",       price: "$2.49", priceLevel: "good" },
      "Meijer":  { productName: "Meijer 1% Lowfat Milk, 1 gal",        price: "$2.76", priceLevel: "high" },
      "Walmart": { productName: "Great Value 1% Lowfat Milk, 1 gal",   price: "$2.62", priceLevel: "good" },
      "Kroger":  { productName: "Kroger 1% Lowfat Milk, 1 gal",        price: "$2.89", priceLevel: "high" },
    },
  },
  "Chicken Breast": {
    emissions: { val: "0.69 kg", level: "high" },
    local:     { val: "$160",    level: "good" },
    health:    { val: 88,        level: "great" },
    stores: {
      "Aldi":    { productName: "Kirkwood Boneless Skinless Frozen Chicken Breasts, per lb", price: "$3.23/lb", priceLevel: "high" },
      "Meijer":  { productName: "Meijer Frozen Chicken Breasts (boneless/skinless), per lb", price: "$3.33/lb", priceLevel: "high" },
      "Walmart": { productName: "Great Value All Natural Boneless Skinless Chicken Breasts", price: "$2.98/lb", priceLevel: "good" },
      "Kroger":  { productName: "Heritage Farm Boneless Skinless Chicken Breasts, 1lb",      price: "$2.89/lb", priceLevel: "good" },
    },
  },
};

// Ecosystem scores used for quiz (higher = better for environment)
const ECOSYSTEM_SCORES = {
  "Beef":             98,
  "Potato Chips":     60,
  "Milk":             60,
  "Chicken Breast":   60,
  "Multi Grain Bread":45,
  "Apples":           45,
};

const PRODUCTS = [
  { name: "Pop-Tarts Toaster Pastries", brand: "Pop-Tarts",    score: 72, img: "products/pop-tarts.png",  emissions: "0.44 kg", price: "$3.49", local: "$180", health: 28 },
  { name: "Miel Pops",                  brand: "Kelloggs",     score: 81, img: "products/miel-pops.png",  emissions: "0.31 kg", price: "$4.19", local: "$240", health: 45 },
  { name: "Potato Chips",               brand: "Frito-Lay",    score: 60, img: "products/chips.png",      emissions: "0.58 kg", price: "$4.29", local: "$130", health: 30 },
  { name: "Multi Grain Bread",          brand: "Various",      score: 45, img: "products/bread.png",      emissions: "0.92 kg", price: "$3.29", local: "$210", health: 72 },
  { name: "Bananas",                    brand: "Chiquita",     score: 90, img: "products/bananas.png",    emissions: "0.20 kg", price: "$0.89", local: "$420", health: 95 },
  { name: "Chicken Breast",             brand: "Tyson",        score: 60, img: "products/chicken.png",    emissions: "0.69 kg", price: "$5.99", local: "$160", health: 88 },
];

// ── Page Navigation ────────────────────────────────────────────────────────────

function showPage(name) {
  document.getElementById("page-demo").style.display  = name === "demo"  ? "" : "none";
  document.getElementById("page-about").style.display = name === "about" ? "" : "none";
  document.getElementById("nav-demo").classList.toggle("active",  name === "demo");
  document.getElementById("nav-about").classList.toggle("active", name === "about");
  return false;
}

// ── SECTION 1: Calculator ─────────────────────────────────────────────────────

function tagHTML(level) {
  const icons = { high: "▲", good: "▼", great: "▼", low: "▲" };
  const cls   = (level === "good" || level === "great") ? "good" : "high";
  const label = level === "good" ? "good" : level === "great" ? "great" : level === "low" ? "low" : "high";
  return `<span class="metric-tag ${cls}">${icons[level] || "▲"} ${label}</span>`;
}

function calculate() {
  const food  = document.getElementById("calc-food").value;
  const store = document.getElementById("calc-store").value;
  const d     = FOOD_DATA[food];
  if (!d) return;

  const storeData = d.stores[store];

  document.getElementById("val-emissions").textContent = d.emissions.val;
  document.getElementById("val-local").textContent     = d.local.val;
  document.getElementById("val-health").textContent    = d.health.val;

  // Price card: show real product name + store price
  document.getElementById("val-price").textContent      = storeData.price;
  document.getElementById("price-product-name").textContent = storeData.productName;

  document.getElementById("tag-emissions").outerHTML = `<div id="tag-emissions">${tagHTML(d.emissions.level)}</div>`;
  document.getElementById("tag-price").outerHTML     = `<div id="tag-price">${tagHTML(storeData.priceLevel)}</div>`;
  document.getElementById("tag-local").outerHTML     = `<div id="tag-local">${tagHTML(d.local.level)}</div>`;
  document.getElementById("tag-health").outerHTML    = `<div id="tag-health">${tagHTML(d.health.level)}</div>`;

  drawGauge(d.health.val);
}

function drawGauge(value) {
  const canvas = document.getElementById("gauge-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const cx = 60, cy = 65, r = 50;
  const startAngle = Math.PI;
  const endAngle   = 2 * Math.PI;
  const valAngle   = startAngle + (value / 100) * Math.PI;

  ctx.clearRect(0, 0, 120, 70);

  // Track
  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, endAngle);
  ctx.strokeStyle = "#e0ddd7";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.stroke();

  // Fill
  const color = value >= 75 ? "#7ab648" : value >= 50 ? "#f0a500" : "#e05a45";
  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, valAngle);
  ctx.strokeStyle = color;
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.stroke();

  // Label below canvas (tag)
  const tagEl = document.getElementById("tag-health");
  if (tagEl) {
    const lvl = value >= 75 ? "great" : value >= 50 ? "good" : "low";
    tagEl.innerHTML = tagHTML(lvl);
  }
}

// ── SECTION 2: Quiz ───────────────────────────────────────────────────────────

const QUIZ_ITEMS = Object.keys(ECOSYSTEM_SCORES); // initial order
let quizOrder   = [...QUIZ_ITEMS];
let quizChecked = false;
let dragSrcIdx  = null;

function buildQuizList() {
  const list = document.getElementById("quiz-list");
  list.innerHTML = "";
  quizOrder.forEach((food, idx) => {
    const li = document.createElement("li");
    li.className = "drag-item";
    li.draggable = true;
    li.dataset.idx = idx;
    li.innerHTML = `
      <span class="drag-num">${idx + 1}</span>
      <span class="drag-name">${food}</span>
      <span class="drag-handle">⠿</span>
    `;
    if (!quizChecked) {
      li.addEventListener("dragstart", onDragStart);
      li.addEventListener("dragover",  onDragOver);
      li.addEventListener("drop",      onDrop);
      li.addEventListener("dragend",   onDragEnd);
    }
    list.appendChild(li);
  });
}

function onDragStart(e) {
  dragSrcIdx = parseInt(this.dataset.idx);
  this.classList.add("dragging");
}

function onDragOver(e) {
  e.preventDefault();
  document.querySelectorAll(".drag-item").forEach(el => el.classList.remove("drag-over"));
  this.classList.add("drag-over");
}

function onDrop(e) {
  e.preventDefault();
  const targetIdx = parseInt(this.dataset.idx);
  if (dragSrcIdx === targetIdx) return;
  const moved = quizOrder.splice(dragSrcIdx, 1)[0];
  quizOrder.splice(targetIdx, 0, moved);
  buildQuizList();
}

function onDragEnd() {
  document.querySelectorAll(".drag-item").forEach(el => {
    el.classList.remove("dragging", "drag-over");
  });
}

function checkQuiz() {
  if (quizChecked) return;
  quizChecked = true;

  // Correct order: descending ecosystem score
  const correct = [...QUIZ_ITEMS].sort((a, b) => ECOSYSTEM_SCORES[b] - ECOSYSTEM_SCORES[a]);

  // Score: exact position match
  let score = 0;
  quizOrder.forEach((food, i) => {
    if (food === correct[i]) score++;
  });

  // Re-render list with feedback
  const list = document.getElementById("quiz-list");
  list.innerHTML = "";
  quizOrder.forEach((food, idx) => {
    const isCorrect = food === correct[idx];
    if (isCorrect) score; // already counted
    const ecoscore = ECOSYSTEM_SCORES[food];
    const badgeCls = ecoscore >= 75 ? "score-high" : "score-med";
    const li = document.createElement("li");
    li.className = `drag-item ${isCorrect ? "correct" : "incorrect"}`;
    li.style.cursor = "default";
    li.innerHTML = `
      <span class="result-icon ${isCorrect ? "correct-icon" : "incorrect-icon"}">${isCorrect ? "✓" : "✗"}</span>
      <span class="drag-name">${food}</span>
      <span class="score-badge ${badgeCls}">Score <strong>${ecoscore}</strong></span>
    `;
    list.appendChild(li);
  });

  // Show result box
  const resultBox = document.getElementById("quiz-result-box");
  const title     = document.getElementById("quiz-result-title");
  const msg       = document.getElementById("quiz-result-msg");
  title.textContent = `You got ${score} of ${QUIZ_ITEMS.length} correct!`;
  msg.textContent   = score >= 4
    ? "Way to go. Learn more about environmental scores when you explore popular products"
    : "Keep learning! Explore products to discover how ecosystem scores are calculated.";
  resultBox.style.display = "flex";

  // Swap button to Try Again
  const btn = document.getElementById("quiz-btn");
  btn.textContent = "Try again";
  btn.onclick = resetQuiz;
}

function resetQuiz() {
  quizChecked = false;
  quizOrder   = [...QUIZ_ITEMS];
  document.getElementById("quiz-result-box").style.display = "none";
  const btn = document.getElementById("quiz-btn");
  btn.textContent = "Check Answers";
  btn.onclick = checkQuiz;
  buildQuizList();
}

// ── SECTION 3: Products ───────────────────────────────────────────────────────

function buildProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";
  PRODUCTS.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => openModal(i);
    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${p.img}"
          alt="${p.name}"
          class="product-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="product-img-placeholder" style="display:none">📦</div>
        <span class="product-score-badge">${p.score}</span>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-brand">${p.brand}</div>
    `;
    grid.appendChild(card);
  });
}

function openModal(idx) {
  const p = PRODUCTS[idx];
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      <div class="modal-score-row">
        <div class="modal-score-circle">${p.score}</div>
        <div>
          <div class="modal-product-name">${p.name}</div>
          <div class="modal-brand">${p.brand}</div>
        </div>
      </div>
      <div class="modal-metrics">
        <div class="modal-metric">
          <div class="modal-metric-label">Emissions (Monthly)</div>
          <div class="modal-metric-value">${p.emissions}</div>
        </div>
        <div class="modal-metric">
          <div class="modal-metric-label">Price</div>
          <div class="modal-metric-value">${p.price}</div>
        </div>
        <div class="modal-metric">
          <div class="modal-metric-label">Local Dollar</div>
          <div class="modal-metric-value">${p.local}</div>
        </div>
        <div class="modal-metric">
          <div class="modal-metric-label">Health Score</div>
          <div class="modal-metric-value">${p.health}</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ── Init ──────────────────────────────────────────────────────────────────────

showPage("demo");
buildQuizList();
buildProducts();
