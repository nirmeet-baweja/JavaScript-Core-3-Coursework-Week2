const main = document.querySelector("main");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let img = document.createElement("img");
    img.src = data.img;
    main.appendChild(img);
  })
  .catch((error) => console.log(error));
