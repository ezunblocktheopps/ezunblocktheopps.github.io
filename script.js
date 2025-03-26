document.getElementById('gameRequestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const gameName = document.getElementById('gameName').value;
    const gameLink = document.getElementById('gameLink').value;
    const reason = document.getElementById('reason').value;

    // Display a confirmation message
    document.getElementById('requestStatus').textContent = `Thanks for requesting "${gameName}"! We'll review your suggestion soon.`;

    // Log the request to the console (for later implementation)
    console.log("Game Requested:", { gameName, gameLink, reason });

    // Reset the form
    event.target.reset();
});
