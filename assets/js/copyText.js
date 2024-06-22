function copyText() {
    var textToCopy = document.getElementById("copyText").innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    var successful = document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    if (successful) {
        alert("The homepage has been successfully copied to the clipboard!");
    } else {
        alert("Copy failed, please copy manually:https://highsun.github.io/Pixel_Knight/");
    }
}