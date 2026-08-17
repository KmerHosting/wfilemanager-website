const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

// Use a real application capture in the hero instead of a handcrafted mockup.
const productWindow = document.querySelector('.product-window');
if (productWindow) {
  productWindow.setAttribute('aria-label', 'Real wFileManager File Explorer screenshot');
  productWindow.replaceChildren();
  productWindow.style.minHeight = '0';
  productWindow.style.aspectRatio = '1000 / 475';
  productWindow.style.background = '#f4f4f4';
  productWindow.style.borderColor = '#c6c6c6';

  const screenshot = document.createElement('img');
  screenshot.src = 'assets/wfilemanager-file-explorer.svg';
  screenshot.alt = 'wFileManager File Explorer';
  screenshot.loading = 'eager';
  screenshot.decoding = 'async';
  screenshot.fetchPriority = 'high';
  screenshot.style.width = '100%';
  screenshot.style.height = '100%';
  screenshot.style.objectFit = 'cover';
  screenshot.style.display = 'block';
  productWindow.appendChild(screenshot);
}

const heroVersion = document.querySelector('.hero-meta span:last-child');
if (heroVersion) heroVersion.textContent = 'v0.11.4';

const copyButton = document.querySelector('[data-copy-target]');
const copyStatus = document.querySelector('#copy-status');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget || '');
    const text = target?.textContent?.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = 'Copied';
      if (copyStatus) copyStatus.textContent = 'Command copied to clipboard.';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy command';
        if (copyStatus) copyStatus.textContent = '';
      }, 2200);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection?.removeAllRanges();
      selection?.addRange(range);
      if (copyStatus) copyStatus.textContent = 'Select and copy the highlighted command.';
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const header = document.querySelector('.site-header');
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const section = document.querySelector(id);
    if (!section) return;
    event.preventDefault();
    const headerHeight = header?.getBoundingClientRect().height || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
