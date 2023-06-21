document.addEventListener('DOMContentLoaded', function() {
  var adblockMessage = document.getElementById('adblock-message');
  var ad = document.createElement('div');
  ad.innerHTML = '&nbsp;';
  ad.className = 'ad';
  ad.style.width = '1px';
  ad.style.height = '1px';
  ad.style.display = 'none';
  document.body.appendChild(ad);

  window.setTimeout(function() {
    if (ad.offsetHeight === 0) {
      adblockMessage.style.display = 'block';
    }
    document.body.removeChild(ad);
  }, 100);
});

