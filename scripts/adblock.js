<script>
  var ad = document.createElement('div');
  ad.innerHTML = '&nbsp;';
  ad.className = 'ad';
  ad.style.width = '1px';
  ad.style.height = '1px';
  ad.style.display = 'none';
  document.body.appendChild(ad);

  // Check if the dummy ad element is blocked
  window.setTimeout(function() {
    if (ad.offsetHeight === 0) {
      // Ad-blocker detected
      // Display your message or take appropriate action
      alert('Please disable your ad-blocker to support our website.');
    }
    document.body.removeChild(ad);
  }, 100);
</script>
