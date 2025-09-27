// js/simple-test.js
(function () {
  // Create banner
  const banner = document.createElement('div');
  banner.id = 'simple-test-banner';
  banner.innerHTML = `
    <div class="st-inner">
      <strong>Test script loaded</strong>
      <span class="st-time"></span>
      <button class="st-close" aria-label="Close test banner">✕</button>
    </div>
  `;

  // Basic styles (self-contained so you don't need to modify style.css)
  const css = `
    #simple-test-banner {
      position: fixed;
      left: 12px;
      right: 12px;
      top: 12px;
      z-index: 99999;
      background: linear-gradient(90deg,#ffb86b,#ff7ab6);
      color: #081126;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0,0,0,.25);
      font-family: Inter, system-ui, Arial, sans-serif;
    }
    #simple-test-banner .st-inner {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:10px 12px;
    }
    #simple-test-banner .st-time { opacity:.9; font-size: .95rem; margin-left:8px; }
    #simple-test-banner .st-close {
      background:transparent;
      border:none;
      font-size:16px;
      cursor:pointer;
      padding:4px 8px;
      border-radius:6px;
    }
    @media (max-width:520px) {
      #simple-test-banner .st-inner { flex-direction:column; align-items:flex-start; gap:6px; }
      #simple-test-banner .st-close { align-self:flex-end; }
    }
  `;
  // Inject style
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Put banner in DOM (at top so it doesn't get covered)
  document.documentElement.appendChild(banner);

  // Set time
  function updateTime() {
    const el = banner.querySelector('.st-time');
    const now = new Date();
    el.textContent = now.toLocaleString();
  }
  updateTime();
  // update every 30s so it's obviously live
  const timer = setInterval(updateTime, 30000);

  // Close button
  banner.querySelector('.st-close').addEventListener('click', () => {
    banner.remove();
    clearInterval(timer);
  });

  // Optional: small console confirmation
  console.info('simple-test.js loaded — banner inserted.');
})();
