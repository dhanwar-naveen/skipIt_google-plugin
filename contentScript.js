// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === "clickButtons") {
//     var buttons = document.querySelectorAll("button");
//     buttons.forEach(function (button) {
//       if (button.innerText.toLowerCase() === "click") {
//         button.click();
//       }
//     });
//     sendResponse({ message: "Skipped" });
//   }
// });

function clickButtons() {
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    if (button.innerText.toLowerCase() === "skip") {
      button.click();
    }
  });
}

// Execute clickButtons() when the page finishes loading
window.addEventListener("load", clickButtons);

// Execute clickButtons() when new elements are added to the page dynamically
var observer = new MutationObserver(function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type === "childList") {
      clickButtons();
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "clickButtons") {
    clickButtons();
    sendResponse({ message: "Skipped" });
  }
});
