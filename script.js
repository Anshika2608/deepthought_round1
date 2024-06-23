document.addEventListener("DOMContentLoaded", function() {
    const arrow1Button = document.querySelector('.arrow1');
    const arrowInButton = document.querySelector('.arrowin');
    const hiddenLeft = document.querySelector('.hidden_left');
    const leftbox=document.querySelector('.left_one')
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
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/fetch-data')
        .then(response => response.json())
        .then(data => {
            // Assuming 'tasks' is an array and you want the first task
            const tasks = data.tasks;

            // Extract asset_title and asset_description from the first task
            const assets = tasks[0].assets; // Assuming you want assets from the first task
            const assetTitle = assets.map(asset => asset.asset_title);
            const assetDescription = assets.map(asset => asset.asset_description);

            // Assuming you want to create HTML elements to display each asset's title and description
            const container = document.getElementById('card1'); // Replace 'asset-container' with your actual container ID

            // Loop through assets and create HTML elements
            assets.forEach(asset => {
                const title = document.createElement('h4');
                title.textContent = asset.asset_title;
                title.classList.add('upper_first');

                const description = document.createElement('p');
                description.textContent = asset.asset_description;
                description.classList.add('mid');

                container.appendChild(title);
                container.appendChild(description);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    })
