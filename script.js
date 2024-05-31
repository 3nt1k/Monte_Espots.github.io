// script.js
function changeImage(imageNumber) {
    if (imageNumber === 1) {
        document.getElementById("myImage").src = "https://static.tildacdn.one/tild3637-6562-4931-a133-633565373738/_.png"; // Путь к вашему первому изображению при наведении
    } else if (imageNumber === 2) {
        document.getElementById("myImage2").src = "https://static.tildacdn.one/tild3664-3137-4233-b434-626233396265/_.png"; // Путь к вашему второму изображению при наведении
    }
}

function restoreImage() {
    document.getElementById("myImage").src = "https://static.tildacdn.one/tild3461-3538-4535-b162-313633353763/_.png"; // Путь к вашему первому изображению
    document.getElementById("myImage2").src = "https://static.tildacdn.one/tild3436-3135-4339-b566-363636616166/_.png"; // Путь к вашему второму изображению
}