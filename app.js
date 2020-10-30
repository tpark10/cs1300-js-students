var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=Okrz3ZsnLxMqFAJU1c4OCpGEhnpiz90tftzz7z3J0K4";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED

      const fragment = document.createDocumentFragment(); 

      const { data } = JSON.parse(request.response);

      data.map(plant => {

        const { common_name, image_url } = plant; 

        //creating head element
        const plantElement = document.createElement('div');
        plantElement.classList.add('plant-item');

        //adding image for plantElement
        var img = document.createElement('img');
        img.src = image_url; 
        plantElement.appendChild(img);

        //adding name for plantElement
        var name_variable = document.createElement('p');
        var name = document.createTextNode(common_name);
        name_variable.appendChild(name);
        plantElement.appendChild(name_variable);

    
        //adding head element on HTML
        document.body.appendChild(plantElement);


      })
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////


