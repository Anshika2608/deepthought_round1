document.addEventListener("DOMContentLoaded", function() {
    const arrow1Button = document.querySelector('.arrow1');
    const arrowInButton = document.querySelector('.arrowin');
    const hiddenLeft = document.querySelector('.hidden_left');
    hiddenLeft.style.display = 'none';

    // Toggle .hidden_left visibility when .arrow1 is clicked
    arrow1Button.addEventListener('click', function() {
        hiddenLeft.style.display = hiddenLeft.style.display === 'none' ? 'block' : 'none';
        hiddenLeft.classList.toggle('visible');
    });

    // Toggle .hidden_left visibility when .arrowin is clicked
    arrowInButton.addEventListener('click', function() {
        hiddenLeft.style.display = hiddenLeft.style.display === 'none' ? 'block' : 'none';
    });

    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Check if tasks array exists and has at least one element
            if (Array.isArray(data.tasks) && data.tasks.length > 0) {
                const tasks = data.tasks;

                // Iterate through each asset and update the respective card
                tasks[0].assets.forEach((asset, index) => {
                    const card = document.querySelectorAll('.card1')[index]; // Get the respective card

                    if (card) {
                        const titleElement = card.querySelector('.upper_first');
                        const descriptionElement = card.querySelector('.mid p');
                        const videoContainer = card.querySelector('.video-container iframe');

                        if (titleElement && descriptionElement) {
                            titleElement.textContent = asset.asset_title;
                            descriptionElement.innerHTML = `<strong>Description:</strong> ${asset.asset_description}`;
                        } else {
                            console.error('Title or description element not found in card.');
                        }

                        if (videoContainer && asset.asset_content_type === 'video') {
                            videoContainer.src = asset.asset_content.trim();
                        }
                    } else {
                        console.error('Card element not found.');
                    }
                });
            } else {
                console.error('No tasks found in the data.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
