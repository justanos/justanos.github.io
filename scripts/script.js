window.onload = function() {
  var checkbox = document.getElementById('darkModeSwitch');

  // Retrieve saved mode from localStorage
  var savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  });
};