document.addEventListener('DOMContentLoaded', () => {
  const checklist = document.querySelectorAll('.checklist-list input[type="checkbox"]');
  const checkAllBtn = document.getElementById('checkAllBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');

  checkAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = true);
  });

  clearAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = false);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  var map = L.map('map').setView([42.34117, -71.24350], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([42.34117, -71.24350]).addTo(map)
    .bindPopup('Hamel House Visitor Center')
    .openPopup();
});

