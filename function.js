function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'none';
  }
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        hideElementById('elementID');
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        hideElementById('elementID');
    }
});

*/