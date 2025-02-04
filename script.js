// box5
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click from bubbling up
        dropdownMenu.classList.toggle("show");
        dropdownBtn.classList.toggle("active"); // Toggle class to rotate the icon
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            dropdownBtn.classList.remove("active"); // Reset icon rotation
        }
    });
});
// -------------



        function showContent(type) {
            const content = {
                customer: "<h3>Customer Focused</h3><p>Providing customer-centric solutions tailored to your needs.</p>",
                agile: "<h3>Agile and Adaptable</h3><p>Ensuring your business remains flexible in a changing environment.</p>",
                compliance: "<h3>Compliance Ready</h3><p>Stay ahead with our cutting-edge compliance solutions.</p>",
                secure: "<h3>Secure and Safe</h3><p>Advanced security solutions to protect your transactions.</p>"
            };
            document.getElementById('content-area').innerHTML = content[type];
        }
        