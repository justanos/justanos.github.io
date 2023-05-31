document.addEventListener("DOMContentLoaded", function() {
  var downloadButton = document.getElementById("btn-auto-click");
  var downloadLabel = document.getElementById("download-label");

  downloadButton.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  downloadLabel.addEventListener("click", function() {
    downloadButton.checked = !downloadButton.checked;
  });
});
