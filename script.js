const shareButton = document.getElementById('share-button');
const tooltip = document.getElementById('tooltiptext');

shareButton.addEventListener('click', () => {
    tooltip.classList.toggle('hidden');
})