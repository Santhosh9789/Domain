/* Christmas Season Script */
document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none'; // Ensure clicks pass through
    snowContainer.style.zIndex = '9999';
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
        snowflake.style.opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8 opacity (softer)
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10-20px

        snowContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    // Create a snowflake every 400ms to be lighter and smoother (was 200ms)
    setInterval(createSnowflake, 400);
});
