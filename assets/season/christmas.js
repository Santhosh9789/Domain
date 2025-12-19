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
        // snowflake.innerHTML = '❄'; // Removed for round snow effect
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds (faster)
        snowflake.style.opacity = Math.random() * 0.5 + 0.3; 
        const size = Math.random() * 5 + 3; // 3px to 8px
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';

        snowContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    // Create a snowflake every 400ms to be lighter and smoother (was 200ms)
    setInterval(createSnowflake, 400);
});
