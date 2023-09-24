const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Declare an array listing the filenames of each image
const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

// Declare an object listing the alternative text for each image
const imageName = {
  "pic1.jpg": "Image 1",
  "pic2.jpg": "Image 2",
  "pic3.jpg": "Image 3",
  "pic4.jpg": "Image 4",
  "pic5.jpg": "Image 5",
};

// Function to toggle the darken effect on the displayed image
function toggleDarkenEffect() {
  overlay.classList.toggle("darken-overlay");
}

btn.addEventListener("click", toggleDarkenEffect);

// Loop through the array of filenames and insert <img> elements into thumb-bar
for (const image of imageFiles) {
  const newImage = document.createElement("img");
  const imagePath = `./images/${image}`; // Replace 'path_to_your_images' with the actual path to your images
  newImage.setAttribute("src", imagePath);
  newImage.setAttribute("alt", imageName[image]);
  thumbBar.appendChild(newImage);

  // Add click event listeners to each <img> inside thumb-bar to display the corresponding image
  newImage.addEventListener("click", function () {
    displayedImage.setAttribute("src", imagePath);
    displayedImage.setAttribute("alt", imageName[image]);
  });
}
