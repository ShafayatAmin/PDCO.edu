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
