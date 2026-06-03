/* ============================================================
   THE RITUAL — interactions
   - canvas ritual-circle + ember field
   - decode-on-reveal text
   - animated ascii benchmark bars
   vanilla, dependency-free, reduced-motion aware
   ============================================================ */
(() => {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RED = "#e10600", REDHOT = "#ff2436", ASH = "#e7ddd2";
  const GLYPHS = "✶✷✦✧†•+·/\\|—¶§∴⸸◇◆▲▽".split("");

  /* ---------- DPI-aware canvas helper ---------- */
  function fit(canvas){
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr,0,0,dpr,0,0);
    return ctx;
  }

  /* ---------- HERO: rotating ritual circle ---------- */
  const sig = document.getElementById("sigil");
  if (sig){
    let ctx = fit(sig);
    const methods = ["VISION","HUMAN","ENGINEER","PRODUCER","BANKER"];
    const rings = [
      { r:0.46, n:42, speed: 0.020, set:"·+✦•/\\—|" },
      { r:0.34, n:30, speed:-0.034, set:"✶✷†∴⸸◇" },
      { r:0.22, n:20, speed: 0.052, set:"+·•✧" },
    ];
    let t = 0;
    function draw(){
      const w = sig.clientWidth, h = sig.clientHeight, cx=w/2, cy=h/2;
      const R = Math.min(w,h)/2;
      ctx.clearRect(0,0,w,h);
      ctx.textAlign="center"; ctx.textBaseline="middle";

      // concentric rotating rings
      rings.forEach((ring,ri)=>{
        const rad = ring.r*R, chars = ring.set;
        ctx.font = `${Math.max(9, R*0.045)}px "JetBrains Mono", monospace`;
        for (let i=0;i<ring.n;i++){
          const a = (i/ring.n)*Math.PI*2 + t*ring.speed;
          const x = cx + Math.cos(a)*rad, y = cy + Math.sin(a)*rad;
          const tw = 0.5 + 0.5*Math.sin(t*0.05 + i*1.7 + ri); // twinkle
          ctx.fillStyle = ri===1 ? REDHOT : RED;
          ctx.globalAlpha = 0.18 + tw*0.5;
          ctx.fillText(chars[(i+ (t*0.1|0))%chars.length], x, y);
        }
      });

      // five method nodes on an outer orbit
      ctx.globalAlpha = 1;
      const nodeR = 0.62*R;
      methods.forEach((m,i)=>{
        const a = (i/methods.length)*Math.PI*2 - Math.PI/2 + t*0.006;
        const x = cx + Math.cos(a)*nodeR, y = cy + Math.sin(a)*nodeR;
        const pulse = 0.6 + 0.4*Math.sin(t*0.06 + i*1.25);
        ctx.font = `${Math.max(11,R*0.052)}px "JetBrains Mono", monospace`;
        ctx.fillStyle = REDHOT; ctx.globalAlpha = pulse;
        ctx.fillText("◆", x, y);
        ctx.font = `${Math.max(7,R*0.026)}px "JetBrains Mono", monospace`;
        ctx.fillStyle = ASH; ctx.globalAlpha = 0.25 + pulse*0.4;
        ctx.fillText(m, x, y + R*0.062);
        // thin spoke
        ctx.globalAlpha = 0.10 + pulse*0.10; ctx.strokeStyle = RED; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.stroke();
      });

      // pulsing core
      ctx.globalAlpha = 0.5 + 0.5*Math.abs(Math.sin(t*0.04));
      ctx.fillStyle = REDHOT;
      ctx.font = `${Math.max(20,R*0.12)}px "JetBrains Mono", monospace`;
      ctx.fillText("✶", cx, cy);
      ctx.globalAlpha = 1;

      t += 1;
      if(!reduce) requestAnimationFrame(draw);
    }
    draw();
    addEventListener("resize", ()=>{ ctx = fit(sig); }, {passive:true});
  }

  /* ---------- BACKGROUND: drifting ember glyph field ---------- */
  const bg = document.getElementById("sigil-bg");
  if (bg && !reduce){
    let ctx = fit(bg), W = bg.clientWidth, H = bg.clientHeight;
    const N = Math.min(70, Math.floor(W*H/22000));
    const em = Array.from({length:N}, ()=>spawn(true));
    function spawn(init){
      return {
        x: Math.random()*W,
        y: init ? Math.random()*H : H + 20,
        v: 0.15 + Math.random()*0.5,
        g: GLYPHS[(Math.random()*GLYPHS.length)|0],
        s: 9 + Math.random()*9,
        a: 0.05 + Math.random()*0.35,
        drift: (Math.random()-0.5)*0.3,
      };
    }
    function tick(){
      ctx.clearRect(0,0,W,H);
      for(let i=0;i<em.length;i++){
        const p = em[i];
        p.y -= p.v; p.x += p.drift;
        if (p.y < -20){ Object.assign(p, spawn(false)); }
        ctx.font = `${p.s}px "JetBrains Mono", monospace`;
        ctx.fillStyle = RED; ctx.globalAlpha = p.a * (0.6+0.4*Math.sin(p.y*0.05));
        ctx.fillText(p.g, p.x, p.y);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(tick);
    }
    tick();
    addEventListener("resize", ()=>{ ctx=fit(bg); W=bg.clientWidth; H=bg.clientHeight; }, {passive:true});
  }

  /* ---------- DECODE-on-reveal text ---------- */
  const SYMS = "▓▒░#@%&/\\<>*+=—|✶†";
  function decode(el){
    if (reduce || el.dataset.done) return;
    el.dataset.done = "1";
    const full = el.textContent; const len = full.length;
    let frame = 0; const speed = 1.4;
    (function run(){
      let out = "";
      const settled = Math.floor(frame/speed);
      for (let i=0;i<len;i++){
        const ch = full[i];
        if (ch === " " || i < settled) out += ch;
        else out += SYMS[(Math.random()*SYMS.length)|0];
      }
      el.textContent = out;
      frame++;
      if (settled <= len) requestAnimationFrame(run);
      else el.textContent = full;
    })();
  }

  /* ---------- BENCHMARK bars ---------- */
  const DATA = {
    quality: [
      ["Easy brief",            12, false],
      ["Hard / creative",       28, false],
      ["Hardest (systems)",     19, false],
    ],
    dims: [
      ["Decision-readiness",    37, false],
      ["Evidence honesty",      32, false],
      ["Completeness",          15, false],
      ["Originality",           10, false],
      ["Clean reasoning acc.",   0, true ],  // the published null
    ],
  };
  const CELLS = 26, SCALE = 40; // 40% lift fills the track
  function buildBars(container){
    const key = container.dataset.bars;
    DATA[key].forEach(([label,val,isNull])=>{
      const row = document.createElement("div");
      row.className = "bar" + (isNull ? " null" : "");
      row.innerHTML = `<span class="label">${label}</span><span class="track"></span><span class="val">0%</span>`;
      container.appendChild(row);
      row._val = val;
    });
  }
  function animateBars(container){
    if (container.dataset.run) return; container.dataset.run="1";
    [...container.children].forEach((row,idx)=>{
      const target = row._val, track = row.querySelector(".track"), valEl = row.querySelector(".val");
      const fillTarget = Math.round((target/SCALE)*CELLS);
      let cur = 0;
      const start = () => {
        const step = () => {
          cur += Math.max(1, Math.round(fillTarget/16));
          if (cur > fillTarget) cur = fillTarget;
          const shown = Math.round((cur/CELLS)*SCALE);
          track.textContent = "█".repeat(cur) + "░".repeat(Math.max(0,CELLS-cur));
          valEl.textContent = (target===0 ? "  0%" : "+"+shown+"%");
          if (cur < fillTarget) (reduce ? step() : requestAnimationFrame(step));
          else { track.textContent = "█".repeat(fillTarget) + "░".repeat(CELLS-fillTarget);
                 valEl.textContent = target===0 ? "  0%" : "+"+target+"%"; }
        };
        step();
      };
      if (reduce) start(); else setTimeout(start, idx*140);
    });
  }
  document.querySelectorAll(".bars").forEach(buildBars);

  /* ---------- METHODS grid ---------- */
  const METHODS = [
    ["Vision","Steve Jobs","Should this exist? Is it insanely great?","✶"],
    ["The Human","Don Norman","Is it humane — does it fit how people think?","◇"],
    ["The Engineer","Elon Musk","Is it possible, and are we at the limit?","▲"],
    ["The Producer","Henry Ford","Can we make it, the same way, at scale?","▦"],
    ["The Banker","patient capital","Does it sustain itself and compound?","§"],
  ];
  const mg = document.getElementById("methods-grid");
  if (mg){
    METHODS.forEach(([name,who,q,glyph])=>{
      const el = document.createElement("div");
      el.className = "method"; el.setAttribute("data-glyph", glyph);
      el.innerHTML = `<h3>${name}</h3><p class="who">${who}</p><p class="q">${q}</p>`;
      mg.appendChild(el);
    });
  }

  /* ---------- reveal + trigger observer ---------- */
  if (reduce){
    document.querySelectorAll(".reveal").forEach(s=>s.classList.add("in"));
    document.querySelectorAll("[data-decode]").forEach(decode);
    document.querySelectorAll(".bars").forEach(animateBars);
  } else {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el.classList.contains("reveal")){
          el.classList.add("in");
          el.querySelectorAll("[data-decode]").forEach(decode);
          el.querySelectorAll(".bars").forEach(animateBars);
        }
        io.unobserve(el);
      });
    }, { threshold:0.18 });
    document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
    // hero decode fires immediately
    document.querySelectorAll(".hero [data-decode]").forEach((el,i)=>setTimeout(()=>decode(el), 250 + i*220));
  }
})();
