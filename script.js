const shareButton = document.getElementById('share-button');
const tooltip = document.getElementById('tooltiptext');
const snackbar = document.getElementById('snackbar-div');
const articleContainer = document.getElementById('article-container');

shareButton.addEventListener('click', () => {
    // check the flex-direction of the article container
    const style = window.getComputedStyle(articleContainer);
    const flexDirection = style.getPropertyValue('flex-direction');

    if(flexDirection === "column") // column equals mobile
    {
        snackbar.classList.toggle('hidden');
    } else {
        tooltip.classList.toggle('hidden');
    }
});