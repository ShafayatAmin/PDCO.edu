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

// Admin Emails
const adminEmails = [
    "shafayatamin0010@gmail.com", 
    "admin@pdco.com", 
    "hub.bd@yahoo.com", 
    "si5666687@gmail.com", 
    "habibulbaharmozumder@gmail.com", 
    "tanvirhasantasnim547@gmail.com",
    "nasrullahtarek@gmail.com"
];

// 1 Month Membership Emails
const oneMonthEmails = [
    "onemonth1@example.com",
    "onemonth2@example.com"
];

// One-Time Membership Emails
const oneTimeEmails = [
    "rkib34410@gmail.com",
    "amsafwan2009@gmail.com",
    "guest@gmail.com"
];

// Valid password for all accounts
const validPassword = "password123";

