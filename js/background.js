const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bodyElement = document.body;
const backgroundImagePath = `url(img/${chosenImage})`;

bodyElement.style["backgroundImage"] = backgroundImagePath;
