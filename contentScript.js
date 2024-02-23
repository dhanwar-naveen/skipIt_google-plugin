// Function to click the "Skip" button
function clickButton() {
    var buttons = document.querySelectorAll('button'); // Find all buttons on the page

    // Loop through each button
    buttons.forEach(function(button) {
        if (button.innerText === 'Skip') { // If the button's text is 'Skip'
            button.click(); // Click the button
        }
    });
}

// Wait for the YouTube ad to start and then click the button
function waitForAd() {
    var adObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                clickButton(); // Call the function to click the button
            }
        });
    });

    // Observe changes in the document's body
    adObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Call the function to wait for the ad
waitForAd();
