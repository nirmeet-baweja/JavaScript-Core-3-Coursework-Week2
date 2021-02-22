// get the button from DOM that is used to add new images
const photoBtn = document.querySelector("#photoBtn");

// add an event listener to the button for "click" event
// At each click addNewPhoto() method is called
photoBtn.addEventListener("click", addNewPhoto);

// This function prepends a new dog photo to the DOM.
function addNewPhoto() {
  // retrieve/create the DOM elements that are needed
  const ulDogImgs = document.querySelector("#ulDogImgs");
  let liDogImg = document.createElement("li");
  let dogImg = document.createElement("img");

  // Give the className to the elements.
  // The className is used for styling in CSS
  liDogImg.className = "liDogImg";
  dogImg.className = "dogImg";

  // Using the fetch API to give a call to the API for dog images
  fetch("https://dog.ceo/api/breeds/image/random")
    // convert the response received to a javaScript object and return it
    .then((response) => response.json())
    // extract the img url from the received data and update the DOM accordingly
    .then((data) => {
      dogImg.src = data.message;
      liDogImg.appendChild(dogImg);
      ulDogImgs.prepend(liDogImg);
    })
    // error handling
    .catch((error) => {
      console.log("Unable to load image. Due to ");
      console.log(error);
    });
}
