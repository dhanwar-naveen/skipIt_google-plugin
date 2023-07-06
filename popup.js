document.addEventListener("DOMContentLoaded", function () {
  var startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "clickButtons" },
        function (response) {
          console.log(response.message);
        }
      );
    });
  });
});
