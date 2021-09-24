inputText = document.querySelector("#input-txt");
translateBtn = document.querySelector("#translate-btn");
output = document.querySelector("#output-div");

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
