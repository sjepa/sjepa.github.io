$(document).ready(function() {
  var copyCitationButton = document.getElementById('copy-citation-button');
  var citationText = document.getElementById('citation-text');

  if (copyCitationButton && citationText && navigator.clipboard) {
    copyCitationButton.addEventListener('click', async function() {
      var originalLabel = copyCitationButton.innerHTML;

      try {
        await navigator.clipboard.writeText(citationText.textContent);
        copyCitationButton.innerHTML = '<span class="icon is-small"><i class="fas fa-check"></i></span>';
        copyCitationButton.title = 'Copied';
        copyCitationButton.setAttribute('aria-label', 'Citation copied');
      } catch (error) {
        copyCitationButton.innerHTML = '<span class="icon is-small"><i class="fas fa-times"></i></span>';
        copyCitationButton.title = 'Copy failed';
        copyCitationButton.setAttribute('aria-label', 'Copy failed');
      }

      window.setTimeout(function() {
        copyCitationButton.innerHTML = originalLabel;
        copyCitationButton.title = 'Copy citation';
        copyCitationButton.setAttribute('aria-label', 'Copy citation');
      }, 1500);
    });
  }
});
