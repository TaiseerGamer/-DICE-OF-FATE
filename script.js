const VERSION = 'v0.0.1';

const RARITIES = [
  { id: 'common',       name: 'Common',       color: '#9999aa', chance: 44,   coins: 2,      emoji: '⚪' },
  { id: 'uncommon',     name: 'Uncommon',     color: '#4caf50', chance: 25,   coins: 8,      emoji: '🟢' },
  { id: 'rare',         name: 'Rare',         color: '#2196f3', chance: 13,   coins: 22,     emoji: '🔵' },
  { id: 'epic',         name: 'Epic',         color: '#9c27b0', chance: 8,    coins: 65,     emoji: '🟣' },
  { id: 'legendary',    name: 'Legendary',    color: '#ff9800', chance: 4,    coins: 190,    emoji: '🟡' },
  { id: 'mythic',       name: 'Mythic',       color: '#f44336', chance: 2.5,  coins: 420,    emoji: '🔴' },
  { id: 'divine',       name: 'Divine',       color: '#00bcd4', chance: 1.5,  coins: 1100,   emoji: '💠' },
  { id: 'cosmic',       name: 'Cosmic',       color: '#e91e63', chance: 0.7,  coins: 3000,   emoji: '🌸' },
  { id: 'void',         name: 'Void',         color: '#673ab7', chance: 0.28, coins: 8000,   emoji: '💜' },
  { id: 'abyssal',      name: 'Abyssal',      color: '#1de9b6', chance: 0.01, coins: 50000,  emoji: '🌊' },
  { id: 'transcendent', name: 'Transcendent', color: '#f5c842', chance: 0.01, coins: 100000, emoji: '⭐' },
];

const ELEMENTS = [
  { name: 'Fire',    emoji: '🔥' }, { name: 'Ice',     emoji: '❄️' },
  { name: 'Thunder', emoji: '⚡' }, { name: 'Earth',   emoji: '🌍' },
  { name: 'Wind',    emoji: '🌀' }, { name: 'Shadow',  emoji: '🌑' },
  { name: 'Light',   emoji: '✨' }, { name: 'Water',   emoji: '💧' },
  { name: 'Void',    emoji: '🕳️' }, { name: 'Chaos',   emoji: '🌪️' },
  { name: 'Time',    emoji: '⏳' }, { name: 'Space',   emoji: '🌌' },
  { name: 'Nature',  emoji: '🌿' }, { name: 'Metal',   emoji: '⚙️' },
  { name: 'Blood',   emoji: '🩸' }, { name: 'Spirit',  emoji: '👻' },
  { name: 'Crystal', emoji: '💎' }, { name: 'Poison',  emoji: '☠️' },
  { name: 'Aether',  emoji: '🌟' }, { name: 'Gravity', emoji: '🪐' },
  { name: 'Plague',  emoji: '🤢' }, { name: 'Arcane',  emoji: '🔯' },
  { name: 'Storm',   emoji: '🌩️' },
];

const ITEMS = [
  { name: 'Fallen Leaf',     emoji: '🍂' }, { name: 'Rusted Coin',    emoji: '🪙' },
  { name: 'Old Boot',        emoji: '👢' }, { name: 'Cracked Gem',    emoji: '💎' },
  { name: 'Bone Shard',      emoji: '🦴' }, { name: 'Witch Eye',      emoji: '👁️' },
  { name: 'Dragon Scale',    emoji: '🐉' }, { name: 'Angel Feather',  emoji: '🪶' },
  { name: 'Chaos Orb',       emoji: '🔮' }, { name: 'Phoenix Ash',    emoji: '🔥' },
  { name: 'Star Fragment',   emoji: '⭐' }, { name: 'Void Crystal',   emoji: '🔷' },
  { name: 'Soul Ember',      emoji: '🕯️' }, { name: 'Thunder Core',   emoji: '⚡' },
  { name: 'Frozen Heart',    emoji: '❄️' }, { name: 'Ancient Rune',   emoji: '📜' },
  { name: 'God Tear',        emoji: '💧' }, { name: 'Black Hole Seed',emoji: '🕳️' },
  { name: 'Cosmic Dust',     emoji: '✨' }, { name: 'Reality Shard',  emoji: '🌌' },
  { name: 'Infinity Loop',   emoji: '♾️' }, { name: 'Time Crystal',   emoji: '⏳' },
  { name: 'Aether Bloom',    emoji: '🌸' }, { name: 'Gravity Well',   emoji: '🪐' },
  { name: 'Plague Flask',   emoji: '🧪' }, { name: 'Storm Eye',      emoji: '🌩️' },
  { name: 'Abyss Pearl',    emoji: '🔮' }, { name: 'Runic Tablet',   emoji: '🪨' },
  { name: 'Cursed Mirror',  emoji: '🪞' }, { name: 'Shadow Crown',   emoji: '👑' },
];

const BONUSES = [
  'Empowered','Ancient','Cursed','Blessed','Radiant','Decaying',
  'Eternal','Fragmented','Ascended','Doomed','Reborn','Spectral',
  'Primal','Shattered','Exalted','Forsaken','Hallowed','Abyssal',
  'Runic','Infernal',
];

const UPGRADES = [
  { id: 'luckI',    name: 'Lucky Charm I',  desc: 'Common → -5%, Rare chances +', effect: 'luck1',     levels: 3, baseCost: 50,    costMult: 2.5, color: '#4caf50' },
  { id: 'coinI',    name: 'Coin Boost I',   desc: 'All coins earned +25%',        effect: 'coinMult',  levels: 5, baseCost: 80,    costMult: 2.2, color: '#f5c842' },
  { id: 'luckII',   name: 'Lucky Charm II', desc: 'Epic + chances doubled',       effect: 'luck2',     levels: 2, baseCost: 400,   costMult: 4,   color: '#9c27b0' },
  { id: 'autoRoll', name: 'Auto-Roller',    desc: 'Auto-roll every 3 seconds',    effect: 'auto',      levels: 3, baseCost: 300,   costMult: 5,   color: '#2196f3' },
  { id: 'coinII',   name: 'Coin Surge',     desc: 'All coins earned +50%',        effect: 'coinMult2', levels: 4, baseCost: 600,   costMult: 3,   color: '#ff9800' },
  { id: 'luckIII',  name: 'Fate Twist',     desc: 'Legendary+ chances tripled',   effect: 'luck3',     levels: 2, baseCost: 3000,  costMult: 8,   color: '#f44336' },
  { id: 'streak',   name: 'Hot Streak',     desc: 'Consecutive rolls bonus',      effect: 'streak',    levels: 3, baseCost: 200,   costMult: 3,   color: '#00bcd4' },
  { id: 'jackpot',  name: 'Jackpot Chance', desc: '5% chance to 10x coins',       effect: 'jackpot',   levels: 3, baseCost: 500,   costMult: 4,   color: '#e91e63' },
  { id: 'coinIII',  name: 'Gold Rush',      desc: 'All coins earned +100%',       effect: 'coinMult3', levels: 3, baseCost: 5000,  costMult: 5,   color: '#f5c842' },
  { id: 'voidSense',   name: 'Void Sense',      desc: 'Void+ chance greatly up',      effect: 'luck4',    levels: 1, baseCost: 15000, costMult: 10, color: '#673ab7' },
  { id: 'bonusProc',  name: 'Prefix Mastery',  desc: 'Bonus prefix chance +20%',     effect: 'bonusProc',levels: 3, baseCost: 150,   costMult: 3,  color: '#e8a020' },
  { id: 'abyssal',    name: 'Abyssal Seeker',  desc: 'Abyssal rarity chance up',     effect: 'luck5',    levels: 2, baseCost: 40000, costMult: 12, color: '#1de9b6' },
];

const G = {
  coins: 0,
  lifetimeCoins: 0,
  totalRolls: 0,
  upgrades: {},
  collection: {},
  history: [],
  streak: 0,
  bestRarityIdx: -1,
  autoTimer: null,
};

/* ── helpers ─────────────────────────────────────── */

function getUpgradeLevel(id) { return G.upgrades[id] || 0; }

function getUpgradeCost(u) {
  return Math.round(u.baseCost * Math.pow(u.costMult, getUpgradeLevel(u.id)));
}

function getChances() {
  const c = RARITIES.map(r => ({ ...r }));
  const l1 = getUpgradeLevel('luckI');
  const l2 = getUpgradeLevel('luckII');
  const l3 = getUpgradeLevel('luckIII');
  const l4 = getUpgradeLevel('voidSense');

  if (l1 > 0) {
    const shift = l1 * 3;
    c[0].chance = Math.max(5, c[0].chance - shift);
    c[1].chance += shift * 0.4;
    c[2].chance += shift * 0.4;
    c[3].chance += shift * 0.2;
  }
  if (l2 > 0) { for (let i = 4; i < c.length; i++) c[i].chance *= (1 + l2 * 1); }
  if (l3 > 0) { for (let i = 5; i < c.length; i++) c[i].chance *= (1 + l3 * 2); }
  if (l4 > 0) { for (let i = 8; i < c.length; i++) c[i].chance *= 5; }
  const l5 = getUpgradeLevel('abyssal');
  if (l5 > 0) { for (let i = 9; i < c.length; i++) c[i].chance *= (1 + l5 * 3); }

  const total = c.reduce((s, r) => s + r.chance, 0);
  c.forEach(r => r.chance = (r.chance / total) * 100);
  return c;
}

function getCoinMult() {
  return 1
    + getUpgradeLevel('coinI')  * 0.25
    + getUpgradeLevel('coinII') * 0.5
    + getUpgradeLevel('coinIII')* 1.0;
}

function getStreakBonus() {
  const sl = getUpgradeLevel('streak');
  if (!sl) return 1;
  return 1 + Math.min(G.streak, 10) * 0.05 * sl;
}

function rollRarity() {
  const c = getChances();
  let r = Math.random() * 100, cum = 0;
  for (let i = 0; i < c.length; i++) {
    cum += c[i].chance;
    if (r < cum) return i;
  }
  return c.length - 1;
}

/* ── dice SVG ────────────────────────────────────── */

const DICE_DOTS = [
  [[50,50]],
  [[30,30],[70,70]],
  [[30,30],[50,50],[70,70]],
  [[30,30],[70,30],[30,70],[70,70]],
  [[30,30],[70,30],[50,50],[30,70],[70,70]],
  [[30,25],[70,25],[30,50],[70,50],[30,75],[70,75]],
];

function changeDiceFace(n) {
  const svg  = document.getElementById('dice');
  const dots = DICE_DOTS[Math.max(0, n - 1)];
  svg.innerHTML =
    `<defs>
       <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%"   stop-color="#2a2a4a"/>
         <stop offset="100%" stop-color="#1a1a2e"/>
       </linearGradient>
     </defs>
     <rect x="5" y="5" width="90" height="90" rx="18"
           fill="url(#dg)" stroke="#f5c842" stroke-width="2"/>
     ${dots.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#f5c842"/>`).join('')}`;
}

/* ── roll logic ──────────────────────────────────── */

function doRoll() {
  const btn = document.getElementById('roll-btn');
  if (btn.disabled) return;
  btn.disabled = true;

  const dice = document.getElementById('dice');
  dice.classList.remove('rolling', 'glow-pulse');
  void dice.offsetWidth; // force reflow
  dice.classList.add('rolling');
  changeDiceFace(Math.ceil(Math.random() * 6));

  setTimeout(() => {
    finishRoll();
    btn.disabled = false;
    dice.classList.remove('rolling');
    dice.classList.add('glow-pulse');
  }, 620);
}

function finishRoll() {
  G.totalRolls++;
  const ri      = rollRarity();
  const rarity  = RARITIES[ri];
  const element = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  const item    = ITEMS[Math.floor(Math.random() * ITEMS.length)];
  const bonusChance = 0.3 + getUpgradeLevel('bonusProc') * 0.2;
  const bonus   = Math.random() < bonusChance ? BONUSES[Math.floor(Math.random() * BONUSES.length)] : null;

  G.streak++;

  const isJackpot = getUpgradeLevel('jackpot') > 0 && Math.random() < 0.05 * getUpgradeLevel('jackpot');
  const coins = Math.round(rarity.coins * getCoinMult() * getStreakBonus() * (isJackpot ? 10 : 1));

  G.coins        += coins;
  G.lifetimeCoins+= coins;

  if (ri > G.bestRarityIdx) G.bestRarityIdx = ri;

  const key = item.emoji + '|' + rarity.id;
  G.collection[key] = (G.collection[key] || 0) + 1;

  const h = { rarity, element, item, bonus, coins, isJackpot };
  G.history.unshift(h);
  if (G.history.length > 30) G.history.pop();

  showResult(h);
  updateUI();
  updateHistory();
  updateShop();
  updateCollection();
  spawnFloatingCoin(coins, isJackpot);
}

/* ── display ─────────────────────────────────────── */

function showResult(h) {
  const { rarity, element, item, bonus, coins, isJackpot } = h;
  const bname = bonus ? `${bonus} ` : '';

  const multi = [];
  const cm = getCoinMult();
  if (cm > 1)             multi.push(`x${cm.toFixed(1)} coin boost`);
  if (getStreakBonus()>1) multi.push(`x${getStreakBonus().toFixed(2)} streak`);
  if (isJackpot)          multi.push('💥 JACKPOT x10!');

  document.getElementById('result-display').innerHTML =
    `<div class="result-card" style="border-color:${rarity.color}40;box-shadow:0 0 20px ${rarity.color}20">
       <div class="rarity-badge"
            style="background:${rarity.color}25;color:${rarity.color};border:1px solid ${rarity.color}50">
         ${rarity.emoji} ${rarity.name.toUpperCase()}
       </div>
       <div class="rarity-name" style="color:${rarity.color}">${bname}${item.name} ${item.emoji}</div>
       <div class="result-element">${element.emoji} ${element.name} Element</div>
       <div class="coins-earned">+${coins.toLocaleString()} 🪙</div>
       ${multi.length
          ? `<div class="multipliers">${multi.map(m=>`<span class="mult-tag">${m}</span>`).join('')}</div>`
          : ''}
     </div>`;

  const sd = document.getElementById('combo-display');
  const sf = document.getElementById('streak-fill');
  const sn = document.getElementById('streak-num');

  if (G.streak > 1 && getUpgradeLevel('streak') > 0) {
    sd.style.display = 'block';
    sn.textContent   = G.streak;
    sf.style.width   = Math.min(G.streak * 10, 100) + '%';
  } else {
    sd.style.display = 'none';
  }
}

function updateUI() {
  document.getElementById('coins').textContent        = G.coins.toLocaleString();
  document.getElementById('total-rolls').textContent  = G.totalRolls.toLocaleString();
  document.getElementById('lifetime-coins').textContent = G.lifetimeCoins.toLocaleString();

  const br = document.getElementById('best-rarity');
  if (G.bestRarityIdx >= 0) {
    const r = RARITIES[G.bestRarityIdx];
    br.textContent  = r.name;
    br.style.color  = r.color;
  }
  updateRarityTable();
}

function updateHistory() {
  document.getElementById('history-list').innerHTML =
    G.history.slice(0, 20).map(h =>
      `<span class="hist-item"
             style="color:${h.rarity.color};border-color:${h.rarity.color}40;background:${h.rarity.color}15"
             title="${h.rarity.name} ${h.item.name}">
         ${h.item.emoji}
       </span>`
    ).join('');

  const avg = document.getElementById('avg-coins');
  if (G.totalRolls > 0 && avg) {
    avg.textContent = `avg ${Math.round(G.lifetimeCoins / G.totalRolls).toLocaleString()} 🪙/roll`;
  }
}

function updateRarityTable() {
  const c = getChances();
  document.getElementById('rarity-table').innerHTML =
    `<tr>
       <td style="color:var(--muted);font-size:11px">RARITY</td>
       <td style="color:var(--muted);font-size:11px;text-align:right">CHANCE</td>
       <td style="color:var(--muted);font-size:11px;text-align:right">COINS</td>
     </tr>` +
    c.map(r =>
      `<tr>
         <td><span class="rarity-dot" style="background:${r.color}"></span>
             <span style="color:${r.color}">${r.name}</span></td>
         <td style="text-align:right;color:var(--muted)">${r.chance.toFixed(2)}%</td>
         <td style="text-align:right;color:var(--gold)">${Math.round(r.coins * getCoinMult()).toLocaleString()}</td>
       </tr>`
    ).join('');
}

function updateShop() {
  document.getElementById('shop-grid').innerHTML = UPGRADES.map(u => {
    const lvl    = getUpgradeLevel(u.id);
    const maxed  = lvl >= u.levels;
    const cost   = maxed ? 0 : getUpgradeCost(u);
    const afford = G.coins >= cost;
    const cls    = maxed ? 'maxed' : (!afford ? 'cant-afford' : '');
    return `<div class="shop-item ${cls}" onclick="buyUpgrade('${u.id}')">
               <div class="shop-left">
                 <div class="shop-name" style="color:${u.color}">${u.name}</div>
                 <div class="shop-desc">${u.desc}</div>
                 <div class="shop-level">${maxed ? 'MAX LEVEL' : 'Level ' + lvl + ' / ' + u.levels}</div>
               </div>
               <div class="shop-cost">${maxed ? '✓' : cost.toLocaleString() + ' 🪙'}</div>
             </div>`;
  }).join('');
}

function buyUpgrade(id) {
  const u   = UPGRADES.find(x => x.id === id);
  const lvl = getUpgradeLevel(id);
  if (lvl >= u.levels) return;
  const cost = getUpgradeCost(u);
  if (G.coins < cost) return;
  G.coins -= cost;
  G.upgrades[id] = (G.upgrades[id] || 0) + 1;
  if (id === 'autoRoll') setupAuto();
  G.streak = 0;
  updateUI();
  updateShop();
}

function updateCollection() {
  const discovered = Object.keys(G.collection).length;
  document.getElementById('coll-progress').textContent =
    `Discovered: ${discovered} / ${ITEMS.length}`;

  document.getElementById('collection-grid').innerHTML = ITEMS.map(item => {
    let found = false, count = 0, bestColor = '#555';
    RARITIES.forEach(r => {
      const k = item.emoji + '|' + r.id;
      if (G.collection[k]) { found = true; count += G.collection[k]; bestColor = r.color; }
    });
    return `<div class="coll-item ${found ? '' : 'locked'}"
                 style="border-color:${found ? bestColor + '60' : 'var(--border)'}"
                 title="${found ? item.name : '???'}">
               ${item.emoji}
               ${found && count
                 ? `<div class="coll-count">${count > 99 ? '99+' : count}</div>`
                 : ''}
             </div>`;
  }).join('');
}

/* ── auto-roll ───────────────────────────────────── */

function setupAuto() {
  if (G.autoTimer) { clearInterval(G.autoTimer); G.autoTimer = null; }
  const lvl = getUpgradeLevel('autoRoll');
  if (lvl > 0) {
    const delay = 3000 / lvl;
    G.autoTimer = setInterval(() => {
      if (!document.getElementById('roll-btn').disabled) doRoll();
    }, delay);
    const info = document.getElementById('auto-info');
    info.style.display = 'block';
    info.textContent   = `Auto-rolling every ${(delay / 1000).toFixed(1)}s`;
  }
}

/* ── floating coin ───────────────────────────────── */

function spawnFloatingCoin(amount, jackpot) {
  const btn  = document.getElementById('roll-btn');
  const rect = btn.getBoundingClientRect();
  const el   = document.createElement('div');
  el.className   = 'floating-coin';
  el.textContent = (jackpot ? '💥' : '') + '+' + amount.toLocaleString() + '🪙';
  el.style.left  = (rect.left + rect.width / 2 - 40) + 'px';
  el.style.top   = (rect.top - 10) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

/* ── tabs ────────────────────────────────────────── */

function switchTab(name) {
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', ['rarities','shop','collection'][i] === name);
  });
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (name === 'shop')       updateShop();
  if (name === 'collection') updateCollection();
}

/* ── init ────────────────────────────────────────── */

document.getElementById('dice').addEventListener('click', doRoll);
updateUI();
updateShop();
updateCollection();