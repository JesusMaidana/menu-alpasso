function show(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // scroll the active tab into view
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// Hide scroll hint once user has scrolled the nav
const nav = document.getElementById('navTabs');
const hint = document.getElementById('scrollHint');
if (nav && hint) {
  nav.addEventListener('scroll', () => {
    if (nav.scrollLeft > 20) hint.style.display = 'none';
  }, { passive: true });
}

// Ocultar/mostrar tooltips según la posición del scroll (aparecen en fondo sólido: solo en el Footer)
function handleTooltips() {
  const googleTooltip = document.querySelector('.google-fab-tooltip');
  const igTooltip = document.querySelector('.ig-fab-tooltip');

  // Si estamos a menos de 160px del fondo de la página (sobre el Footer)
  const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 160);

  if (isAtBottom) {
    if (googleTooltip) googleTooltip.classList.remove('hidden');
    if (igTooltip) igTooltip.classList.remove('hidden');
  } else {
    if (googleTooltip) googleTooltip.classList.add('hidden');
    if (igTooltip) igTooltip.classList.add('hidden');
  }
}

window.addEventListener('scroll', handleTooltips, { passive: true });
// Ejecutar una vez al cargar la página para definir el estado inicial
document.addEventListener('DOMContentLoaded', () => {
  handleTooltips();
});
