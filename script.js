// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    if(id === '#') return;
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
btn && btn.addEventListener('click', ()=>{
  if(links.style.display === 'flex') links.style.display = 'none';
  else links.style.display = 'flex';
});
