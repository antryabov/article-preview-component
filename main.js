const sharePanel = document.getElementById('share-panel');
const shareButton = document.getElementById('share-button');
const shareButtonOnPanel = document.getElementById('share-button-additional');

const getClientWidth = document.documentElement.clientWidth;

function toggleSharePanel() {
  sharePanel.classList.toggle('visually-hidden');

  if (getClientWidth < 769) {
    shareButton.classList.toggle('offset-share-panel');
  }
}

shareButton.addEventListener('click', toggleSharePanel);
