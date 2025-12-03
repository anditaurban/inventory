// chart.js - small stub for dashboard charts
function initCharts(){
  const el=document.getElementById('charts');
  if(!el) return;
  el.innerHTML='<p>Placeholder chart area</p>';
}
window.addEventListener('DOMContentLoaded',initCharts);
