const videoContainers = document.querySelectorAll('.card-large');

videoContainers.forEach(container => {
    const video = container.querySelector('video');
    const loadingIndicator = container.querySelector('.loading-indicator');
    video.addEventListener('canplay', () => {
        //console.log('Video loaded');
        loadingIndicator.style.display = 'none';
        video.style.display = 'block';
    });
});

const videoContainer = document.querySelectorAll('.card-small');

videoContainer.forEach(container => {
    const video = container.querySelector('video');
    const loadingIndicator = container.querySelector('.loading-indicator');

    video.addEventListener('canplay', () => {
        //console.log('Video loaded');
        loadingIndicator.style.display = 'none';
        video.style.display = 'grid';
    });
});
