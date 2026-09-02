/* P3 /redesign — generated from index.html by _build_webflow.py. Do not edit
   by hand: edit index.html and rebuild, or the standalone page and the Webflow
   page drift apart. */
(function () {
  if (document.getElementById("rd-root")) return;

  var css = "#rd-root /* Both faces are variable. font-stretch and optical sizing are declared because\n   Bricolage's default optical size is 96, #rd-root which renders 11px caps from the\n   display master and makes small labels look broken. */\n@font-face{font-family:\"Bricolage Grotesque\";src:url(\"https://tparis7.github.io/P3-Mobile-App-Redesign/assets/fonts/BricolageGrotesque.ttf\") format(\"truetype\");\n  font-weight:200 800;font-stretch:75% 100%;font-display:swap;}@font-face{font-family:\"Plus Jakarta Sans\";src:url(\"https://tparis7.github.io/P3-Mobile-App-Redesign/assets/fonts/PlusJakartaSans.ttf\") format(\"truetype\");\n  font-weight:200 800;font-display:swap;}#rd-root{\n  font-optical-sizing:auto;\n  --canvas:#ece6df; --canvas-2:#f4f1ee; --card:#faf8f6;\n  --hair:#ddd4ca; --hair-soft:rgba(74,16,32,.10);\n  --ink:#1a1a1a; --deep:#4a1020; --muted:#4a453f; --faint:#6b5f52;\n  --crimson:#d93a3a; --crimson-dk:#b82e2e;\n  --head:\"Bricolage Grotesque\",ui-sans-serif,system-ui,sans-serif;\n  --body:\"Plus Jakarta Sans\",ui-sans-serif,system-ui,-apple-system,sans-serif;\n  --s1:8px; --s2:12px; --s3:16px; --s4:24px; --s5:40px; --s6:64px;\n}#rd-root *, #rd-root *::before, #rd-root *::after{box-sizing:border-box}#rd-root /* A grey flash over a phone-sized screenshot reads as the image breaking. */\na, #rd-root button{-webkit-tap-highlight-color:transparent}#rd-root /* Hash links land below the sticky bar rather than under it. */\n.pcard{scroll-margin-top:80px}#rd-root [hidden]{display:none !important}#rd-root img{-webkit-user-drag:none;user-select:none}#rd-root :focus-visible{outline:2px solid var(--crimson);outline-offset:3px;border-radius:4px}#rd-root{margin:0;background:var(--canvas);color:var(--ink);font-family:var(--body);\n     -webkit-font-smoothing:antialiased}#rd-root /* ---------------- masthead ---------------- */\n/* Tight on purpose: the toggle and the first row of screens have to be the\n   first things on screen, #rd-root so the header gets only what it needs to introduce\n   them. It carried a three-figure scorecard until Sep 1. */\n.mast{background:var(--canvas-2);padding:clamp(26px,3vw,40px) 0 clamp(22px,2.4vw,32px)}#rd-root .wrap{max-width:1400px;margin:0 auto;\n  padding-inline:max(clamp(20px,4vw,64px),env(safe-area-inset-left),env(safe-area-inset-right))}#rd-root .mast-row{display:flex;align-items:flex-start;gap:clamp(18px,2.4vw,30px)}#rd-root .mast-icon{width:64px;height:64px;border-radius:16px;flex:none;box-shadow:0 10px 26px rgba(40,15,22,.14)}#rd-root .mast h1{font-family:var(--head);font-weight:800;font-size:clamp(1.75rem,3.2vw,2.5rem);\n  line-height:.98;letter-spacing:-.035em;color:var(--deep);margin:0}#rd-root .mast .sub{font-size:.9375rem;font-weight:500;line-height:1.5;color:var(--faint);max-width:74ch;margin:10px 0 0}#rd-root /* The counts that were a three-figure scorecard now live on the toggle, #rd-root which\n   is where a reader is already looking. All that has to survive up here is the\n   one claim the pairs cannot make on their own, #rd-root as a link to where it is made. */\n.jump{margin:12px 0 0}#rd-root /* NOT inline-flex with a gap: that makes every text node a flex item and\n    spaces the words apart. The arrow gets its own margin instead. */\n.jump a{display:inline-block;text-decoration:none;\n  font-size:13px;font-weight:700;color:var(--crimson-dk);\n  background:rgba(217,58,58,.08);border-radius:999px;padding:8px 15px;transition:background .2s}#rd-root .jump a:hover{background:rgba(217,58,58,.15)}#rd-root .jump b{font-weight:800}#rd-root .jump a span{margin-left:6px}#rd-root /* ---------------- new capabilities band ---------------- */\n.newband{border-top:3px solid var(--crimson);padding-block:clamp(56px,7vw,104px);\n  background:\n    radial-gradient(ellipse 70% 46% at 50% -8%, rgba(217,58,58,.30), transparent 62%),\n    linear-gradient(180deg,#4a1020 0%,#3a0d19 60%,#2d0812 100%);}#rd-root .newband .kicker{font-size:11px;font-weight:800;letter-spacing:.16em;\n  color:rgba(250,248,246,.62);margin:0 0 14px;text-align:center}#rd-root .newband h2{font-family:var(--head);font-weight:800;font-size:clamp(1.875rem,3.6vw,2.875rem);\n  line-height:1.05;letter-spacing:-.03em;color:#faf8f6;margin:0 auto;max-width:58ch;text-align:center}#rd-root .newband h2 .hl{color:var(--crimson)}#rd-root .newband .lede{font-size:15px;font-weight:500;line-height:1.6;color:rgba(250,248,246,.72);\n  max-width:60ch;margin:16px auto 0;text-align:center}#rd-root .newgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(16px,1.8vw,26px);\n  margin-top:clamp(36px,4vw,56px)}#rd-root .ncard{background:rgba(250,248,246,.05);border:1px solid rgba(250,248,246,.14);\n  border-radius:20px;padding:18px 18px 22px;transition:transform .22s,border-color .22s}#rd-root .ncard .shotwrap{position:relative;margin:0 0 16px}#rd-root /* Inline beside the title, #rd-root not laid over the screenshot: three of these four\n   screens put their own header in the top-left corner, #rd-root so the badge was\n   covering the very thing the card exists to show. */\n.ncard .sticker{display:inline-block;vertical-align:middle;margin-left:9px;position:relative;top:-2px;\n  background:var(--crimson);color:#fff;font-family:var(--body);\n  font-size:9.5px;font-weight:800;letter-spacing:.12em;padding:4px 9px;border-radius:999px}#rd-root .ncard h3{font-family:var(--head);font-weight:700;font-size:1.25rem;line-height:1.2;\n  letter-spacing:-.02em;color:#faf8f6;margin:0 0 8px}#rd-root .ncard p{font-size:14px;font-weight:500;line-height:1.55;color:rgba(250,248,246,.78);margin:0}#rd-root /* ---------------- sticky bar ---------------- */\n.bar{position:sticky;top:0;z-index:40;background:var(--card);border-bottom:1px solid transparent;\n  transition:box-shadow .2s,border-color .2s}#rd-root .bar.is-stuck{border-bottom-color:var(--hair);box-shadow:0 6px 20px rgba(40,15,22,.07)}#rd-root .bar-inner{max-width:1400px;margin:0 auto;padding:10px clamp(20px,4vw,64px);\n  display:flex;align-items:center;gap:clamp(16px,2vw,28px);min-height:64px}#rd-root .bar .mark{height:26px;flex:none}#rd-root .seg{position:relative;display:grid;grid-template-columns:1fr 1fr;width:clamp(240px,26vw,320px);\n  background:rgba(74,16,32,.07);border-radius:999px;padding:4px;isolation:isolate;flex:none}#rd-root .seg::before{content:\"\";position:absolute;z-index:0;top:4px;left:4px;width:calc(50% - 4px);\n  height:calc(100% - 8px);border-radius:999px;background:var(--deep);\n  box-shadow:0 3px 12px rgba(74,16,32,.28);transition:transform .32s cubic-bezier(.65,0,.35,1)}#rd-root .seg[data-role=\"mentor\"]::before{transform:translateX(100%)}#rd-root .seg button{position:relative;z-index:1;min-height:44px;appearance:none;border:0;background:none;\n  cursor:pointer;font:800 .875rem var(--body);color:var(--faint);transition:color .2s}#rd-root .seg button[aria-selected=\"true\"]{color:#fff}#rd-root #chips{display:flex;gap:6px;flex-wrap:wrap;margin-left:auto}#rd-root #chips a{font-size:11.5px;font-weight:700;letter-spacing:.02em;color:var(--faint);\n  text-decoration:none;padding:6px 11px;border-radius:999px;background:rgba(74,16,32,.05)}#rd-root #chips a:hover{color:var(--deep);background:rgba(74,16,32,.10)}#rd-root /* ---------------- pair grid ----------------\n   One full-width band per pair meant eleven near-full screens of scrolling for\n   a reader who wanted the shape of the change in under a minute. The pairs are\n   a dense grid now: everything stays side by side, #rd-root three across on a wide\n   laptop, #rd-root and the whole mentee set is three rows instead of seven screens.\n   Detail did not go anywhere \u2014 every card opens the 2x lightbox. */\n.panel{background:var(--canvas-2);padding-block:clamp(32px,3.5vw,52px)}#rd-root .pairgrid{max-width:1400px;margin:0 auto;\n  padding-inline:max(clamp(20px,4vw,64px),env(safe-area-inset-left),env(safe-area-inset-right));\n  display:grid;grid-template-columns:repeat(auto-fit,minmax(390px,1fr));gap:clamp(18px,2vw,28px)}#rd-root .pcard{background:var(--card);border:1px solid var(--hair);border-radius:22px;\n  padding:clamp(18px,1.6vw,24px);display:flex;flex-direction:column;\n  scroll-margin-top:80px;transition:border-color .22s,box-shadow .22s,transform .22s}#rd-root .pcard .kicker{font-size:11px;font-weight:800;letter-spacing:.14em;color:var(--faint);margin:0 0 8px}#rd-root .pcard .kicker i{font-style:normal;color:var(--crimson)}#rd-root .pcard h2{font-family:var(--head);font-weight:800;font-size:clamp(1.375rem,1.7vw,1.75rem);\n  line-height:1.05;letter-spacing:-.03em;color:var(--deep);margin:0}#rd-root .rule{border:0;height:2px;width:34px;background:var(--crimson);margin:12px 0}#rd-root .note{font-size:.9375rem;font-weight:500;line-height:1.55;color:var(--muted);margin:0 0 clamp(16px,1.6vw,22px)}#rd-root .note b{font-weight:700;color:var(--deep)}#rd-root .hint{font-size:11.5px;font-weight:600;color:var(--faint);text-align:center;margin:14px 0 0}#rd-root .stage{position:relative;display:flex;gap:clamp(12px,1.2vw,18px);align-items:flex-start;\n  justify-content:center;margin-top:auto}#rd-root .stage::before{content:\"\";position:absolute;inset:-4% 44% -6% -8%;pointer-events:none;z-index:0;\n  background:radial-gradient(ellipse 62% 52% at 50% 62%, rgba(217,58,58,.16), transparent 70%)}#rd-root .shot{position:relative;z-index:1;margin:0;display:flex;flex-direction:column;align-items:center;gap:10px}#rd-root /* Both labels get the SAME box \u2014 same padding, #rd-root same border, #rd-root same height \u2014 or\n   the two phones below them start at different y and the pair reads crooked.\n   Only the fill and the colour differ. */\n.lab{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:800;\n  letter-spacing:.13em;padding:5px 10px;border-radius:999px;border:1px solid transparent;\n  height:24px;line-height:1;white-space:nowrap}#rd-root .lab.new{color:var(--crimson-dk);background:var(--canvas-2);border-color:rgba(217,58,58,.22)}#rd-root .lab.new::before{content:\"\";width:5px;height:5px;border-radius:50%;background:var(--crimson)}#rd-root .lab.cur{color:var(--faint);background:transparent}#rd-root .lab.cur::before{content:\"\";width:5px;height:5px;background:var(--hair)}#rd-root /* Belt and braces: even if a label ever wraps, #rd-root the frames stay on one line. */\n.stage{align-items:flex-end}#rd-root .shot{justify-content:flex-end}#rd-root .zoomwrap{position:relative;appearance:none;border:0;padding:0;background:none;cursor:zoom-in;display:block}#rd-root .frame{--fp:calc(var(--pw)*.0303);--fr:calc(var(--pw)*.135);\n  width:var(--pw);padding:var(--fp);border-radius:var(--fr);position:relative;\n  transition:transform .22s,box-shadow .22s}#rd-root .screen{aspect-ratio:660/1360;border-radius:calc(var(--fr) - var(--fp));overflow:hidden;\n  background:linear-gradient(180deg,#efe9e3,#e4ded7);position:relative}#rd-root .screen img{width:100%;height:100%;object-fit:cover;display:block}#rd-root .screen.missing img{display:none}#rd-root .screen.missing::after{content:\"Capturing\";position:absolute;inset:0;display:grid;place-items:center;\n  font-family:var(--head);font-weight:800;font-size:.8rem;color:#b9afa5}#rd-root /* The redesign frame catches light: a bright top edge, #rd-root a warm crimson halo, #rd-root and a soft sheen down the left rail. The screenshot itself is never covered \u2014\n   the sheen sits on the FRAME, #rd-root outside .screen, #rd-root so no glass glare is laid over\n   the evidence. */\n.frame--new{background:linear-gradient(158deg,#4a4148 0%,#141115 34%,#0d0b0e 68%,#332b33 100%);\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.22),\n    inset 0 0 0 1px rgba(255,255,255,.12),\n    0 2px 4px rgba(40,15,22,.06),\n    0 12px 24px rgba(40,15,22,.12),\n    0 30px 52px -18px rgba(74,16,32,.26),\n    0 0 34px -6px rgba(217,58,58,.27),\n    0 0 90px -20px rgba(217,58,58,.24)}#rd-root .frame--new::after{content:\"\";position:absolute;inset:0;border-radius:inherit;pointer-events:none;\n  background:linear-gradient(112deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,.04) 16%,\n             transparent 34%,transparent 100%)}#rd-root .frame--cur{background:var(--canvas-2);box-shadow:0 0 0 1px var(--hair),0 6px 14px -9px rgba(74,16,32,.22)}#rd-root /* A light touch only. Dimming the old app to flatter the new one is the one\n   thing that makes a comparison read as rigged, #rd-root so this takes the edge off the\n   current app's saturated red without changing what is legible in it. Scale, #rd-root crop and framing stay identical between the two. */\n.frame--cur .screen img{filter:saturate(.88)}#rd-root .zbadge{position:absolute;top:7px;right:7px;z-index:3;font-size:14px;line-height:1;opacity:.4;\n  color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.5);transition:opacity .2s;pointer-events:none}#rd-root .frame--cur .zbadge{color:var(--faint);text-shadow:none}#rd-root /* ---------------- closing ---------------- */\n.closing{background:var(--card);border-top:1px solid var(--hair);padding-block:clamp(40px,4.5vw,64px)}#rd-root .closing p{font-family:var(--head);font-weight:800;font-size:clamp(1.25rem,2vw,1.75rem);\n  line-height:1.25;letter-spacing:-.025em;color:var(--deep);margin:0;max-width:52ch}#rd-root .closing p .hl{color:var(--crimson)}#rd-root .closing .meta{font-family:var(--body);font-size:13px;font-weight:600;color:var(--faint);\n  margin-top:16px;max-width:70ch}#rd-root .closing a{color:var(--crimson-dk);font-weight:700;text-decoration:none}#rd-root .closing a:hover{text-decoration:underline}#rd-root /* ---------------- lightbox ---------------- */\n.lb{position:fixed;inset:0;z-index:90;background:rgba(26,18,20,.84);display:grid;place-items:center;\n  padding:clamp(16px,3vw,40px)}#rd-root .lb-x{position:absolute;top:16px;right:18px;appearance:none;border:0;background:rgba(250,248,246,.12);\n  color:#fff;font-size:26px;line-height:1;width:44px;height:44px;border-radius:50%;cursor:pointer}#rd-root .lb-title{position:absolute;top:22px;left:24px;margin:0;color:rgba(250,248,246,.82);\n  font-size:12px;font-weight:800;letter-spacing:.14em}#rd-root .lb-switch{display:none;gap:8px;margin-bottom:16px;justify-content:center}#rd-root .lb-switch button{appearance:none;border:0;min-height:44px;padding:0 18px;border-radius:999px;\n  font:800 12px var(--body);letter-spacing:.08em;background:rgba(250,248,246,.14);color:#fff;cursor:pointer}#rd-root .lb-switch button[aria-pressed=\"true\"]{background:var(--crimson)}#rd-root .lb-row{display:flex;gap:24px;align-items:center}#rd-root .lb-fig{margin:0;text-align:center}#rd-root .lb-fig img{max-height:78vh;max-height:78dvh;width:auto;border-radius:16px;display:block;\n  box-shadow:0 0 0 1px rgba(255,255,255,.14),0 30px 60px rgba(0,0,0,.5)}#rd-root .lb-fig figcaption{color:rgba(250,248,246,.72);font-size:11px;font-weight:800;letter-spacing:.14em;margin-top:12px}#rd-root .lb[data-mode=\"single\"] .lb-fig[data-side=\"current\"]{display:none}#rd-root .lb[data-mode=\"single\"] .lb-switch{display:none}#rd-root /* ---------------- reveal ---------------- */\n.pcard{opacity:0;transform:translateY(16px);\n  transition:opacity .5s cubic-bezier(.22,.61,.36,1),transform .5s cubic-bezier(.22,.61,.36,1)}#rd-root .pcard.is-in{opacity:1;transform:none}#rd-root .pcard.no-anim{transition:none}@media (hover:hover) and (pointer:fine){#rd-root .pcard:hover{border-color:rgba(217,58,58,.28);box-shadow:0 18px 40px -22px rgba(74,16,32,.30)}#rd-root .zoomwrap:hover .frame--new{transform:translateY(-3px);\n    box-shadow:inset 0 0 0 1px rgba(255,255,255,.10),0 2px 4px rgba(40,15,22,.06),\n               0 12px 24px rgba(40,15,22,.12),0 40px 68px -20px rgba(74,16,32,.26)}#rd-root .zoomwrap:hover .frame--cur{box-shadow:0 0 0 1px rgba(217,58,58,.5),0 8px 18px -10px rgba(74,16,32,.22)}#rd-root .zoomwrap:hover .zbadge{opacity:1}#rd-root .ncard:hover{transform:translateY(-4px);border-color:rgba(250,248,246,.26)}\n}#rd-root /* ---------------- breakpoints ---------------- */\n.stage{--pw:clamp(150px,12vw,210px)}@media (max-width:1239px){#rd-root .stage{--pw:clamp(146px,15vw,190px)} }@media (max-width:1039px){#rd-root #chips{display:none} }@media (max-width:899px){#rd-root .pairgrid{grid-template-columns:1fr;gap:16px}#rd-root .pcard{max-width:640px;margin-inline:auto;width:100%}#rd-root .stage{--pw:clamp(150px,24vw,230px)}\n}@media (max-width:759px){#rd-root /* The four things above the first pair have to earn their height on a phone:\n     the header, #rd-root its lede, #rd-root the New Features link and the toggle are all that\n     stand between opening the page and seeing a comparison. */\n  .mast{padding:20px 0 18px}#rd-root /* flex-start, #rd-root not center: centring against a three-line block floats the\n     icon beside the lede instead of sitting with the title. */\n  .mast-row{gap:13px;align-items:flex-start}#rd-root .mast-icon{width:46px;height:46px;border-radius:12px}#rd-root .mast h1{font-size:clamp(1.375rem,6.2vw,1.75rem);letter-spacing:-.03em;line-height:1.04}#rd-root .mast .sub{font-size:.8125rem;line-height:1.45;margin-top:7px}#rd-root .jump{margin-top:10px}#rd-root .jump a{font-size:12px;padding:7px 13px}#rd-root /* Full-width toggle: at 240px it sat marooned against the left edge with the\n     wordmark hidden, #rd-root and half the bar was doing nothing. */\n  .seg{width:100%;max-width:none}#rd-root .seg button{font-size:.8125rem}#rd-root .bar-inner{padding-inline:16px;gap:10px}#rd-root /* The rules divide figures sitting on ONE line. Once they wrap they read as\n     indentation instead, #rd-root so the divider becomes a horizontal rule and the\n     column goes flush left. */\n  .pcard{padding:16px;border-radius:18px}#rd-root .pcard h2{font-size:1.25rem}#rd-root .note{font-size:.875rem;margin-bottom:14px}#rd-root .stage{--pw:clamp(126px,calc((100vw - 78px)/2),180px);gap:10px}#rd-root .bar-inner{min-height:52px;gap:12px}#rd-root .bar .mark{display:none}#rd-root /* Two-up as far down as it stays legible. One-up means four consecutive\n     full-height phones, #rd-root which is four screens of scrolling for four cards. */\n  .newgrid{grid-template-columns:repeat(2,1fr);gap:12px}#rd-root .ncard{padding:10px 10px 14px;border-radius:16px}#rd-root .ncard .shotwrap{margin-bottom:12px}#rd-root .ncard h3{font-size:1.0625rem}#rd-root .ncard p{font-size:12.5px;line-height:1.5}#rd-root .ncard .sticker{font-size:9px;padding:3px 7px;margin-left:7px}#rd-root .newband{padding-block:44px}#rd-root .newband h2{font-size:clamp(1.5rem,7vw,1.875rem)}#rd-root .newband .lede{font-size:14px}#rd-root .lb-row{display:block}#rd-root .lb-fig{display:none}#rd-root .lb-fig.is-active{display:block}#rd-root .lb-switch{display:flex}#rd-root .lb-fig img{max-width:88vw;max-height:calc(100vh - 148px);max-height:calc(100dvh - 148px);height:auto}\n}#rd-root /* 339, #rd-root not 379: a 375px iPhone is the most common device that will open this\n   and it must get the two-up grid. Only a 320px-class screen falls to one. */\n@media (max-width:339px){#rd-root .newgrid{grid-template-columns:1fr} }@media (prefers-reduced-motion:reduce){#rd-root *, #rd-root *::before, #rd-root *::after{transition:none !important;animation:none !important}#rd-root .pcard{opacity:1;transform:none}\n}\n";
  var style = document.createElement("style");
  style.id = "rd-style";
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement("div");
  root.id = "rd-root";
  root.innerHTML = "\n\n<header class=\"mast\">\n  <div class=\"wrap mast-row\">\n    <img class=\"mast-icon\" src=\"https://tparis7.github.io/P3-Mobile-App-Redesign/assets/app-icon.png\" alt=\"\">\n    <div>\n      <h1>P3 Mobile &mdash; the redesign, screen by screen</h1>\n      <p class=\"sub\">Every screen rebuilt in the P3 web platform&rsquo;s design language. September 2026, on TestFlight with the beta team.</p>\n      <p class=\"jump\"><a href=\"#new\">New Features <span aria-hidden=\"true\">&darr;</span></a></p>\n    </div>\n  </div>\n</header>\n\n<div id=\"sentinel\" aria-hidden=\"true\"></div>\n\n<div class=\"bar\" id=\"bar\">\n  <div class=\"bar-inner\">\n    <img class=\"mark\" src=\"https://tparis7.github.io/P3-Mobile-App-Redesign/assets/p3-logo-horizontal.png\" alt=\"P3\">\n    <div class=\"seg\" id=\"seg\" role=\"tablist\" data-role=\"mentee\" aria-label=\"Role\">\n      <button role=\"tab\" id=\"tab-mentee\" aria-selected=\"true\" aria-controls=\"panel-mentee\" tabindex=\"0\">Mentee</button>\n      <button role=\"tab\" id=\"tab-mentor\" aria-selected=\"false\" aria-controls=\"panel-mentor\" tabindex=\"-1\">Mentor</button>\n    </div>\n    <nav id=\"chips\" aria-label=\"Contents\"></nav>\n  </div>\n</div>\n\n<main>\n  <section class=\"panel\" id=\"panel-mentee\" role=\"tabpanel\" aria-labelledby=\"tab-mentee\"></section>\n  <section class=\"panel\" id=\"panel-mentor\" role=\"tabpanel\" aria-labelledby=\"tab-mentor\" hidden></section>\n</main>\n\n<section class=\"newband\" id=\"new\">\n  <div class=\"wrap\">\n    <p class=\"kicker\">NEW IN THE REDESIGN</p>\n    <h2 id=\"new-h2\">Four things the current app <span class=\"hl\">cannot do at all</span>.</h2>\n    <p class=\"lede\">A repaint cannot add a feature. These four surfaces have no counterpart in the app on the App Store today.</p>\n    <div class=\"newgrid\" id=\"newgrid\"></div>\n  </div>\n</section>\n\n<section class=\"closing\">\n  <div class=\"wrap\">\n    <p>Same flows, same navigation, <span class=\"hl\">repainted</span> &mdash; and four capabilities that simply were not there before.</p>\n    <p class=\"meta\">The concept mockups this page grew out of are kept at <a href=\"concept.html\">concept.html</a>. The app on the store today: <a href=\"https://apps.apple.com/us/app/p3-pulse-of-perseverance/id6478132244\">P3: Pulse of Perseverance</a>.</p>\n  </div>\n</section>\n\n<div class=\"lb\" id=\"lb\" hidden role=\"dialog\" aria-modal=\"true\" aria-label=\"Screen comparison\" data-mode=\"pair\">\n  <button class=\"lb-x\" id=\"lb-x\" aria-label=\"Close\">&times;</button>\n  <p class=\"lb-title\" id=\"lb-title\"></p>\n  <div>\n    <div class=\"lb-switch\" id=\"lb-switch\" role=\"group\" aria-label=\"Which build\">\n      <button data-side=\"redesign\" aria-pressed=\"true\">Redesign</button>\n      <button data-side=\"current\" aria-pressed=\"false\">Today&rsquo;s app</button>\n    </div>\n    <div class=\"lb-row\">\n      <figure class=\"lb-fig is-active\" data-side=\"redesign\"><img alt=\"\"><figcaption>Redesign</figcaption></figure>\n      <figure class=\"lb-fig\" data-side=\"current\"><img alt=\"\"><figcaption>Today&rsquo;s app</figcaption></figure>\n    </div>\n  </div>\n</div>\n\n";

  /* Below Webflow's nav, above its footer: this page keeps the site chrome. */
  var footer = document.querySelector("footer, .p3-footer, [class*='footer']");
  if (footer && footer.parentNode) footer.parentNode.insertBefore(root, footer);
  else document.body.appendChild(root);

  
const PAIRS = {
  mentee: [
    {key:"welcome",   label:"Welcome",       note:'One entry point for both roles, with <b>Apple and Google sign-in</b>.'},
    {key:"home",      label:"Home",          note:'<b>Ask a mentor comes first</b>, then progress, then what to explore. What a student does most is what the screen opens on.'},
    {key:"milestones",label:"Milestones",    note:'The Ascent: <b>a pathway you can see yourself climbing</b>, instead of a list with a progress bar.'},
    {key:"mentors",   label:"Mentors",       note:'Your mentors first, then who we would match you with. <b>Photographs and names, with the clutter stripped out.</b>'},
    {key:"community", label:"Community",     note:'<b>Thumbnail first</b>, real answers from mentors, across Featured, Latest and Following.'},
    {key:"opps",      label:"Opportunities", note:'Recommended for you, with <b>imagery and filters ported from the web platform</b>.'},
    {key:"profile",   label:"Profile",       note:'One page instead of a settings maze: <b>who you are, your pathway, and the few things you actually reach for.</b>'},
  ],
  mentor: [
    {key:"home",      label:"Home",          note:'The current app opens a mentor on their own profile. <b>The redesign opens on their mentees&rsquo; progress</b> and the questions still waiting.'},
    {key:"mentees",   label:"Mentees",       note:'Roster, capacity and requests in one place. <b>Each mentee&rsquo;s industry reads off the glyph and their milestone progress off the bar</b>, without opening anyone.'},
    {key:"community", label:"Community",     note:'What students are asking, <b>promoted out of a segment buried inside the mentor&rsquo;s own profile</b>.'},
    {key:"opps",      label:"Opportunities", note:'<b>Posting is the page.</b> The feed is a tab.'},
  ],
};
const NEW = [
  {key:"conversations",   title:"Conversations",    note:"A direct thread with your mentor: share a scholarship, ask a question, keep the answer."},
  {key:"pulse-ai",        title:"Pulse AI",         note:"An AI career coach inside the app. It opens with somewhere to start, not a blank box."},
  {key:"career-timeline", title:"Career Timeline",  note:"Education, experience and goals as one record the student owns and a mentor can read."},
  {key:"pathway-discover",title:"Pathway Discover", note:"Pathways ranked from what a student has already told P3, surfaced on Home as Find your fit."},
];
const ROLE_LABEL = {mentee:"MENTEE", mentor:"MENTOR"};
const COUNT_WORD = {1:"One",2:"Two",3:"Three",4:"Four"};
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = n => String(n).padStart(2,"0");
const shot = (role,key,side) => `https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots/${role}/${key}-${side}.webp`;

function phone(role, p, side, i){
  const isNew = side === "redesign";
  const eager = role === "mentee" && i === 0;
  return `<figure class="shot shot--${isNew?'new':'cur'}">
    <span class="lab ${isNew?'new':'cur'}">${isNew?'REDESIGN':"TODAY’S APP"}</span>
    <button class="zoomwrap" data-role="${role}" data-key="${p.key}" data-side="${side}" data-label="${p.label}"
            aria-label="Enlarge ${p.label}, ${isNew?'redesign':"today’s app"}">
      <div class="frame frame--${isNew?'new':'cur'}">
        <span class="zbadge" aria-hidden="true">&#10530;</span>
        <div class="screen"><img src="${shot(role,p.key,side)}" alt="${p.label}, ${isNew?'redesign':"today’s app"}"
          width="660" height="1360" decoding="async" draggable="false"
          ${eager?'fetchpriority="high"':'loading="lazy"'}
          onerror="this.parentNode.classList.add('missing')"></div>
      </div>
    </button>
  </figure>`;
}
function buildPairCard(role, p, i, total){
  const hint = i === 0 ? '<p class="hint">Tap either screen to enlarge.</p>' : '';
  return `<article class="pcard" id="${role}-${p.key}">
    <p class="kicker">${ROLE_LABEL[role]} &middot; <i>${pad(i+1)}</i> / ${pad(total)}</p>
    <h2>${p.label}</h2><hr class="rule">
    <p class="note">${p.note}</p>
    <div class="stage">${phone(role,p,"redesign",i)}${phone(role,p,"current",i)}</div>
    ${hint}
  </article>`;
}
function buildNewCard(item){
  return `<article class="ncard" data-key="${item.key}">
    <div class="shotwrap">
      <button class="zoomwrap" data-mode="single" data-key="${item.key}" data-label="${item.title}"
              aria-label="Enlarge ${item.title}">
        <div class="frame frame--new">
          <span class="zbadge" aria-hidden="true">&#10530;</span>
          <div class="screen"><img src="https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots/new/${item.key}.webp" alt="${item.title}"
            width="660" height="1360" loading="lazy" decoding="async" draggable="false"></div>
        </div>
      </button>
    </div>
    <h3>${item.title}<span class="sticker">NEW</span></h3><p>${item.note}</p>
  </article>`;
}

// Build both panels once; switching only flips `hidden`.
for (const role of ["mentee","mentor"]) {
  const list = PAIRS[role];
  document.getElementById("panel-"+role).innerHTML =
    `<div class="pairgrid">` + list.map((p,i) => buildPairCard(role,p,i,list.length)).join("") + `</div>`;
}
document.getElementById("newgrid").innerHTML = NEW.map(buildNewCard).join("");

// The new cards are the only claim that can go stale: a capture that 404s
// removes its card and rewrites every number that counted it.
function recount(){
  const live = document.querySelectorAll("#newgrid .ncard").length;
  document.getElementById("new-h2").innerHTML =
    `${COUNT_WORD[live]||live} things the current app <span class="hl">cannot do at all</span>.`;
  document.getElementById("new").hidden = live === 0;
  writeScore(live);
}
// The header claim and the section heading are the same number, written from
// the same array, so a capture that fails to load cannot leave one of them lying.
// The header link is a plain label now, so only the section heading carries a
// count and there is nothing left that could disagree with it.
function writeScore(){}
document.querySelectorAll("#newgrid img").forEach(img => {
  img.addEventListener("error", () => { img.closest(".ncard")?.remove(); recount(); });
});
recount();

// ---- role switching
const seg = document.getElementById("seg");
const tabs = {mentee:document.getElementById("tab-mentee"), mentor:document.getElementById("tab-mentor")};
function stampIn(role){
  document.querySelectorAll(`#panel-${role} .pcard`).forEach(b => {
    b.classList.add("no-anim","is-in");
    requestAnimationFrame(() => requestAnimationFrame(() => b.classList.remove("no-anim")));
  });
}
function buildChips(role){
  document.getElementById("chips").innerHTML =
    PAIRS[role].map(p => `<a href="#${role}-${p.key}">${p.label}</a>`).join("");
}
function setRole(role){
  seg.dataset.role = role;
  for (const r of ["mentee","mentor"]) {
    tabs[r].setAttribute("aria-selected", String(r===role));
    tabs[r].tabIndex = r===role ? 0 : -1;
    document.getElementById("panel-"+r).hidden = r!==role;
  }
  stampIn(role);
  buildChips(role);
  const bar = document.getElementById("bar");
  if (bar.classList.contains("is-stuck")) {
    window.scrollTo({top: document.getElementById("sentinel").offsetTop, behavior:"auto"});
  }
  history.replaceState(null, "", "#"+role);
}
Object.entries(tabs).forEach(([r,el]) => el.addEventListener("click", () => setRole(r)));
seg.addEventListener("keydown", e => {
  const order = ["mentee","mentor"];
  const cur = order.indexOf(seg.dataset.role);
  let next = null;
  if (e.key === "ArrowRight") next = order[(cur+1)%2];
  else if (e.key === "ArrowLeft") next = order[(cur+1)%2];
  else if (e.key === "Home") next = order[0];
  else if (e.key === "End") next = order[1];
  if (next) { e.preventDefault(); setRole(next); tabs[next].focus(); }
});

// ---- reveal + sticky
if (!reduced) {
  const io = new IntersectionObserver((entries,obs) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); obs.unobserve(en.target); } });
  }, {threshold:.2, rootMargin:"0px 0px -12% 0px"});
  document.querySelectorAll(".pcard").forEach(b => io.observe(b));
} else {
  document.querySelectorAll(".pcard").forEach(b => b.classList.add("is-in"));
}
new IntersectionObserver(([e]) => {
  document.getElementById("bar").classList.toggle("is-stuck", !e.isIntersecting);
}, {threshold:0}).observe(document.getElementById("sentinel"));

// ---- lightbox
const lb = document.getElementById("lb");
const lbTitle = document.getElementById("lb-title");
const lbSwitch = document.getElementById("lb-switch");
const figs = {redesign: lb.querySelector('.lb-fig[data-side="redesign"]'),
              current:  lb.querySelector('.lb-fig[data-side="current"]')};
let lastFocus = null;

function load(fig, hiSrc, loSrc, alt){
  const img = fig.querySelector("img");
  img.alt = alt;
  img.onerror = () => { img.onerror = null; img.src = loSrc; };
  img.src = hiSrc;
}
function openLb(btn){
  lastFocus = btn;
  const single = btn.dataset.mode === "single";
  lb.dataset.mode = single ? "single" : "pair";
  lbTitle.textContent = btn.dataset.label.toUpperCase();
  if (single) {
    const k = btn.dataset.key;
    load(figs.redesign, `https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots2x/new/${k}.webp`, `https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots/new/${k}.webp`, btn.dataset.label);
  } else {
    const {role,key,label} = btn.dataset;
    load(figs.redesign, `https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots2x/${role}/${key}-redesign.webp`, shot(role,key,"redesign"), label+", redesign");
    load(figs.current,  `https://tparis7.github.io/P3-Mobile-App-Redesign/assets/shots2x/${role}/${key}-current.webp`,  shot(role,key,"current"),  label+", today’s app");
    showSide(btn.dataset.side || "redesign");
  }
  lb.hidden = false;
  document.documentElement.style.overflow = "hidden";
  document.getElementById("lb-x").focus();
}
function showSide(side){
  Object.entries(figs).forEach(([s,f]) => f.classList.toggle("is-active", s===side));
  lbSwitch.querySelectorAll("button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.side===side)));
}
function closeLb(){
  lb.hidden = true;
  document.documentElement.style.overflow = "";
  lastFocus?.focus();
}
document.addEventListener("click", e => {
  const btn = e.target.closest(".zoomwrap");
  if (btn) { e.preventDefault(); openLb(btn); return; }
  if (e.target.closest("#lb-x") || e.target === lb) closeLb();
  const side = e.target.closest(".lb-switch button");
  if (side) showSide(side.dataset.side);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !lb.hidden) closeLb();
});

// ---- boot
const initial = location.hash.replace("#","") === "mentor" ? "mentor" : "mentee";
setRole(initial);

})();
