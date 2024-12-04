// Function to copy the code to clipboard
function copyCode(codeId) {
    var codeElement = document.getElementById(codeId);
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Code copied to clipboard!");
}

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