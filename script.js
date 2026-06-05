const VERSION = 'v0.1.0';

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
  { id: 'voidSense',   name: 'Void Sense',        desc: 'Void+ chance greatly up',         effect: 'luck4',      levels: 1, baseCost: 15000, costMult: 10, color: '#673ab7' },
  { id: 'bonusProc',  name: 'Prefix Mastery',    desc: 'Bonus prefix chance +20%',        effect: 'bonusProc',  levels: 3, baseCost: 150,   costMult: 3,  color: '#e8a020' },
  { id: 'abyssal',    name: 'Abyssal Seeker',    desc: 'Abyssal rarity chance up',        effect: 'luck5',      levels: 2, baseCost: 40000, costMult: 12, color: '#1de9b6' },
  { id: 'doubleOrNth',name: 'Double or Nothing', desc: '10% chance: 2x coins OR 0',       effect: 'doubleOrNth',levels: 3, baseCost: 800,   costMult: 4,  color: '#ff5252' },
  { id: 'pity',       name: 'Pity System',       desc: 'After 50 dry rolls, +luck surge', effect: 'pity',       levels: 3, baseCost: 1200,  costMult: 3,  color: '#ce93d8' },
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
  dryStreak: 0,
  lastDailyBonus: null,
  soundEnabled: true,
  milestones: {},
};

const MILESTONES = [
  { id: 'rolls10',    label: '10 Rolls',         check: g => g.totalRolls >= 10,       reward: 50,    icon: '🎲' },
  { id: 'rolls100',   label: '100 Rolls',        check: g => g.totalRolls >= 100,      reward: 500,   icon: '🎲' },
  { id: 'rolls1000',  label: '1,000 Rolls',      check: g => g.totalRolls >= 1000,     reward: 5000,  icon: '🎲' },
  { id: 'coins1k',    label: 'Earn 1K Coins',    check: g => g.lifetimeCoins >= 1000,  reward: 100,   icon: '🪙' },
  { id: 'coins100k',  label: 'Earn 100K Coins',  check: g => g.lifetimeCoins >= 100000,reward: 2000,  icon: '🪙' },
  { id: 'firstLeg',   label: 'First Legendary',  check: g => g.bestRarityIdx >= 4,     reward: 300,   icon: '🟡' },
  { id: 'firstDiv',   label: 'First Divine',     check: g => g.bestRarityIdx >= 6,     reward: 2000,  icon: '💠' },
  { id: 'firstVoid',  label: 'First Void',       check: g => g.bestRarityIdx >= 8,     reward: 10000, icon: '💜' },
  { id: 'firstAbyss', label: 'First Abyssal',    check: g => g.bestRarityIdx >= 9,     reward: 40000, icon: '🌊' },
  { id: 'codex10',    label: 'Codex: 10 Items',  check: g => Object.keys(g.collection).length >= 10, reward: 200, icon: '📖' },
  { id: 'codexAll',   label: 'Codex: All Items', check: g => Object.keys(g.collection).length >= ITEMS.length, reward: 25000, icon: '📖' },
];

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

  // Pity system: after 50 dry rolls (no epic+), boost chances
  const pityLvl = getUpgradeLevel('pity');
  if (pityLvl > 0 && G.dryStreak >= 50) {
    const boost = 1 + (G.dryStreak - 50) * 0.02 * pityLvl;
    for (let i = 3; i < c.length; i++) c[i].chance *= boost;
  }

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

  // Pity: reset dry streak if epic or better
  if (ri >= 3) { G.dryStreak = 0; } else { G.dryStreak++; }

  const isJackpot = getUpgradeLevel('jackpot') > 0 && Math.random() < 0.05 * getUpgradeLevel('jackpot');

  // Double-or-Nothing
  let donResult = null;
  const donLvl = getUpgradeLevel('doubleOrNth');
  if (donLvl > 0 && Math.random() < 0.10) {
    donResult = Math.random() < 0.5 ? 'double' : 'zero';
  }

  let coins = Math.round(rarity.coins * getCoinMult() * getStreakBonus() * (isJackpot ? 10 : 1));
  if (donResult === 'double') coins *= 2;
  if (donResult === 'zero')   coins  = 0;

  G.coins        += coins;
  G.lifetimeCoins+= coins;

  if (ri > G.bestRarityIdx) G.bestRarityIdx = ri;

  const key = item.emoji + '|' + rarity.id;
  G.collection[key] = (G.collection[key] || 0) + 1;

  const h = { rarity, element, item, bonus, coins, isJackpot, donResult };
  G.history.unshift(h);
  if (G.history.length > 30) G.history.pop();

  checkMilestones();
  showResult(h);
  updateUI();
  updateHistory();
  updateShop();
  updateCollection();
  spawnFloatingCoin(coins, isJackpot, donResult);
  saveGame();
}

/* ── display ─────────────────────────────────────── */

function showResult(h) {
  const { rarity, element, item, bonus, coins, isJackpot, donResult } = h;
  const bname = bonus ? `${bonus} ` : '';

  const multi = [];
  const cm = getCoinMult();
  if (cm > 1)              multi.push(`x${cm.toFixed(1)} coin boost`);
  if (getStreakBonus()>1)  multi.push(`x${getStreakBonus().toFixed(2)} streak`);
  if (isJackpot)           multi.push('💥 JACKPOT x10!');
  if (donResult==='double')multi.push('🎰 DOUBLE!');
  if (donResult==='zero')  multi.push('💀 NOTHING!');

  // Flash overlay for Legendary+
  const ri = RARITIES.findIndex(r => r.id === rarity.id);
  if (ri >= 4) flashScreen(rarity.color);

  document.getElementById('result-display').innerHTML =
    `<div class="result-card" style="border-color:${rarity.color}40;box-shadow:0 0 20px ${rarity.color}20">
       <div class="rarity-badge"
            style="background:${rarity.color}25;color:${rarity.color};border:1px solid ${rarity.color}50">
         ${rarity.emoji} ${rarity.name.toUpperCase()}
       </div>
       <div class="rarity-name" style="color:${rarity.color}">${bname}${item.name} ${item.emoji}</div>
       <div class="result-element">${element.emoji} ${element.name} Element</div>
       <div class="coins-earned">${coins > 0 ? '+' + coins.toLocaleString() : '💀 +0'} 🪙</div>
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

function spawnFloatingCoin(amount, jackpot, donResult) {
  const btn  = document.getElementById('roll-btn');
  const rect = btn.getBoundingClientRect();
  const el   = document.createElement('div');
  el.className   = 'floating-coin';
  let label = '';
  if (donResult === 'zero') label = '💀 +0🪙';
  else if (donResult === 'double') label = '🎰 x2 +' + amount.toLocaleString() + '🪙';
  else label = (jackpot ? '💥' : '') + '+' + amount.toLocaleString() + '🪙';
  el.textContent = label;
  el.style.left  = (rect.left + rect.width / 2 - 40) + 'px';
  el.style.top   = (rect.top - 10) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function flashScreen(color) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;inset:0;background:${color};opacity:0;pointer-events:none;z-index:900;transition:opacity 0.1s`;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = '0.18'; });
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 200);
}

/* ── milestones ──────────────────────────────────── */

function checkMilestones() {
  MILESTONES.forEach(m => {
    if (!G.milestones[m.id] && m.check(G)) {
      G.milestones[m.id] = true;
      G.coins         += m.reward;
      G.lifetimeCoins += m.reward;
      showMilestoneToast(m);
    }
  });
}

function showMilestoneToast(m) {
  const el = document.createElement('div');
  el.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(60px);
    background:#1a1a2e;border:2px solid var(--gold);border-radius:14px;
    padding:12px 24px;text-align:center;z-index:990;color:var(--gold);
    font-family:'Cinzel Decorative',serif;font-size:13px;
    box-shadow:0 0 30px rgba(245,200,66,0.4);
    transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),opacity 0.4s;
    opacity:0;
  `;
  el.innerHTML = `${m.icon} <strong>MILESTONE!</strong> ${m.label}<br><span style="font-size:11px;color:#aaa;font-family:monospace">+${m.reward.toLocaleString()} 🪙 bonus</span>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.transform = 'translateX(-50%) translateY(0)'; el.style.opacity = '1'; });
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(60px)'; setTimeout(() => el.remove(), 500); }, 3500);
}

/* ── daily bonus ─────────────────────────────────── */

function checkDailyBonus() {
  const today = new Date().toDateString();
  if (G.lastDailyBonus === today) return;
  G.lastDailyBonus = today;
  const bonus = 100 + G.totalRolls * 2;
  G.coins         += bonus;
  G.lifetimeCoins += bonus;
  saveGame();
  showMilestoneToast({ icon: '🌅', label: 'Daily Bonus!', reward: bonus });
}

/* ── save / load ─────────────────────────────────── */

const SAVE_KEY = 'diceOfFate_save';

function saveGame() {
  const data = {
    coins: G.coins, lifetimeCoins: G.lifetimeCoins, totalRolls: G.totalRolls,
    upgrades: G.upgrades, collection: G.collection, bestRarityIdx: G.bestRarityIdx,
    streak: G.streak, dryStreak: G.dryStreak, lastDailyBonus: G.lastDailyBonus,
    soundEnabled: G.soundEnabled, milestones: G.milestones,
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch(e) {}
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.assign(G, data);
    G.history = [];
    G.autoTimer = null;
  } catch(e) { console.warn('Save load failed', e); }
}

function resetGame() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  localStorage.removeItem(SAVE_KEY);
  location.reload();
}

function updateMilestonesTab() {
  const el = document.getElementById('milestones-list');
  if (!el) return;
  el.innerHTML = MILESTONES.map(m => {
    const done   = !!G.milestones[m.id];
    const active = !done && m.check(G);
    return `<div style="display:flex;align-items:center;gap:8px;padding:6px 4px;border-bottom:1px solid var(--border);opacity:${done?'0.5':'1'}">
      <span style="font-size:18px">${m.icon}</span>
      <div style="flex:1">
        <div style="font-size:12px;color:${done?'#4caf50':active?'var(--gold)':'var(--text)'};font-weight:600">${m.label}</div>
        <div style="font-size:10px;color:var(--muted)">Reward: +${m.reward.toLocaleString()} 🪙</div>
      </div>
      <span style="font-size:14px">${done ? '✅' : active ? '🔓' : '🔒'}</span>
    </div>`;
  }).join('');
}

/* ── tabs ────────────────────────────────────────── */

function switchTab(name) {
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', ['rarities','shop','collection','milestones'][i] === name);
  });
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (name === 'shop')       updateShop();
  if (name === 'collection') updateCollection();
  if (name === 'milestones') updateMilestonesTab();
}

/* ── init ────────────────────────────────────────── */

loadGame();
document.getElementById('dice').addEventListener('click', doRoll);
document.getElementById('version-badge').textContent = VERSION;

// Sound toggle button
const soundBtn = document.getElementById('sound-btn');
if (soundBtn) {
  soundBtn.textContent = G.soundEnabled ? '🔊' : '🔇';
  soundBtn.addEventListener('click', () => {
    G.soundEnabled = !G.soundEnabled;
    soundBtn.textContent = G.soundEnabled ? '🔊' : '🔇';
    saveGame();
  });
}

// Reset button
const resetBtn = document.getElementById('reset-btn');
if (resetBtn) resetBtn.addEventListener('click', resetGame);

updateUI();
updateShop();
updateCollection();
updateMilestonesTab();

// Check daily bonus after short delay so UI is ready
setTimeout(checkDailyBonus, 800);

// Auto-restore auto-roller if it was purchased
if (getUpgradeLevel('autoRoll') > 0) setupAuto();