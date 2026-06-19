// ════════════════════════════════════════════════════════════
// Culture In Vivo — interactions
// ════════════════════════════════════════════════════════════

// 1) Header transparent → blanc au scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 2) Menu mobile (ouvrir / fermer)
const mobileBtn = document.getElementById('mobileBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

const openMenu = () => {
  mobileOverlay.hidden = false;
  mobileBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};
const closeMenu = () => {
  mobileOverlay.hidden = true;
  mobileBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

mobileBtn.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
// Fermer le menu quand on clique un lien
mobileOverlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

// 3) Chatbot flottant
const chatFab = document.getElementById('chatFab');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');

const toggleChat = () => { chatPanel.hidden = !chatPanel.hidden; };
chatFab.addEventListener('click', toggleChat);
chatClose.addEventListener('click', toggleChat);
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = chatForm.querySelector('.chat-input');
  if (input.value.trim()) {
    alert('Merci ! Nous reviendrons vers vous rapidement.');
    input.value = '';
  }
});

// 4) Inscription newsletter
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail');
  if (email.value.trim()) {
    alert('Merci pour votre inscription !');
    email.value = '';
  }
});
