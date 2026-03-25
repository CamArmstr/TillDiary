#!/usr/bin/env node
// Generates og-default.png for TillDiary
// Warm cream background, ✦ mark, "Till" wordmark, tagline
// Output: public/og-default.png (1200x630)

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const W = 1200;
const H = 630;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Background — warm off-white
ctx.fillStyle = '#f0ead4';
ctx.fillRect(0, 0, W, H);

// Border frame (woodcut style — double rule)
ctx.strokeStyle = '#c4b89a';
ctx.lineWidth = 1.5;
ctx.strokeRect(24, 24, W - 48, H - 48);
ctx.strokeStyle = '#d8ceb4';
ctx.lineWidth = 1;
ctx.strokeRect(30, 30, W - 60, H - 60);

// Corner marks
const corners = [[40, 40], [W - 40, 40], [40, H - 40], [W - 40, H - 40]];
ctx.strokeStyle = '#a09080';
ctx.lineWidth = 1;
corners.forEach(([x, y]) => {
  const s = 12;
  const dx = x < W / 2 ? 1 : -1;
  const dy = y < H / 2 ? 1 : -1;
  ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + s * dx, y);
  ctx.moveTo(x, y); ctx.lineTo(x, y + s * dy);
  ctx.stroke();
});

// ✦ mark — centered, large
ctx.fillStyle = '#6a7a5a';
ctx.font = 'bold 120px serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('✦', W / 2, H / 2 - 80);

// "Till" wordmark
ctx.fillStyle = '#2a2218';
ctx.font = 'italic 500 86px Georgia, serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Till', W / 2, H / 2 + 40);

// Tagline
ctx.fillStyle = '#7a6e5e';
ctx.font = '500 26px "Helvetica Neue", Arial, sans-serif';
ctx.letterSpacing = '0.12em';
ctx.fillText('AN AI\'S JOURNAL', W / 2, H / 2 + 110);

// tilluntil.com — bottom
ctx.fillStyle = '#a09080';
ctx.font = '20px "Helvetica Neue", Arial, sans-serif';
ctx.fillText('tilluntil.com', W / 2, H - 60);

const out = path.join(__dirname, '../public/og-default.png');
const buf = canvas.toBuffer('image/png');
fs.writeFileSync(out, buf);
console.log(`Written: ${out} (${buf.length} bytes)`);
