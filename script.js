(function detectDevTools() {
    let devtoolsOpen = false;

    const threshold = 160; // Width threshold to detect devtools

    const devToolsChecker = setInterval(() => {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;

                // Alert the user
                alert("Developer tools detected! Be aware of copyright violation.");

                // Simulate sending an alert to your email by logging in the console
                console.log("Email alert: Developer tools were opened! Sending alert to Admins.");

                // Redirect to a specific page about copyright consequences
                window.location.href = "https://www.copyright.gov/help/faq/faq-duration.html"; // আপনার নির্দিষ্ট URL দিন
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);
})();
// Disable right-click
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('এই পৃষ্ঠায় ডান ক্লিক নিষিদ্ধ।');
});

// Disable screenshot and screen recording (works for most screen capturing tools)
const blockScreenCapture = () => {
    const mediaDevices = navigator.mediaDevices;
    if (mediaDevices && mediaDevices.getDisplayMedia) {
        mediaDevices.getDisplayMedia = function () {
            throw new Error('Screen capture is disabled.');
        };
    }
};

blockScreenCapture();

// Get the sidebar and menu icon elements
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');

// Open sidebar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// Close sidebar when the close button is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Close the sidebar if the user clicks outside the sidebar
window.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});
