document.addEventListener('DOMContentLoaded', () => {
  const checklist = document.querySelectorAll('.checklist-list input[type="checkbox"]');
  const checkAllBtn = document.getElementById('checkAllBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const sidebarLinks = document.querySelectorAll('.icon-bar a');

  checkAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = true);
  });

  clearAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = false);
  });

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      sidebarLinks.forEach(l => l.classList.remove('active'));

      link.classList.add('active');

      const stepId = link.getAttribute('data-step');
      const checkbox = document.getElementById(stepId);
      if (checkbox) {
        checkbox.checked = !checkbox.checked; 
      }
    });
  });
});
