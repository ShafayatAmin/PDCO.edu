// Get elements for role selection buttons
const instructorBtn = document.getElementById('instructor-btn');
const premiumBtn = document.getElementById('premium-btn');
const normalBtn = document.getElementById('normal-btn');
const selectedRoleInput = document.getElementById('selected-role');

// Handle role selection
function selectRole(role) {
    // Clear selected classes
    instructorBtn.classList.remove('selected');
    premiumBtn.classList.remove('selected');
    normalBtn.classList.remove('selected');

    // Set the selected class to the clicked button
    if (role === 'instructor') {
        instructorBtn.classList.add('selected');
    } else if (role === 'premium-student') {
        premiumBtn.classList.add('selected');
    } else if (role === 'normal-student') {
        normalBtn.classList.add('selected');
    }

    // Set the hidden input value to the selected role
    selectedRoleInput.value = role;
}

// Add click event listeners to the role buttons
instructorBtn.addEventListener('click', () => selectRole('instructor'));
premiumBtn.addEventListener('click', () => selectRole('premium-student'));
normalBtn.addEventListener('click', () => selectRole('normal-student'));

// Handle login submission with role validation
function handleLogin(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("login-email").value;
    const passwordInput = document.getElementById("login-password").value;
    const selectedRole = document.getElementById("selected-role").value;

    // Validate email based on selected role
    if (selectedRole === 'instructor' && !adminEmails.includes(emailInput)) {
        alert("Instructor role requires an instructor email.");
        return;
    } else if (selectedRole === 'premium-student' && !oneMonthEmails.includes(emailInput)) {
        alert("Premium Student role requires a premium email.");
        return;
    } else if (selectedRole === 'normal-student' && !oneTimeEmails.includes(emailInput)) {
        alert("Normal Student role requires a normal student email.");
        return;
    }

    // Continue with the rest of login logic
    if (passwordInput === validPassword) {
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please check Email and Password.");
    }
}

document.getElementById("login-form").addEventListener("submit", handleLogin);

// Disable right-click
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('এই পৃষ্ঠায় ডান ক্লিক নিষিদ্ধ।');
});
