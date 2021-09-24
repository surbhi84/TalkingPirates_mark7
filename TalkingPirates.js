inputText = document.querySelector("#input-txt");
translateBtn = document.querySelector("#translate-btn");
output = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/pirate.json";

output.style.display = "none";

translateBtn.addEventListener("click", eventHandler);

function eventHandler() {
  var textInput = inputText.value;
  output.style.display = "block";

  fetch(constructUrl(textInput))
    .then((response) => response.json())
    .then((json) => {
      var outputText = json.contents.translated;
      output.innerText = outputText;
    })
    .catch(errorHandler);
}

function constructUrl(text) {
  return url + "?" + "text=" + text;
}
