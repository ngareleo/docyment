chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.code === 0) {
    console.log("Request for form");
    sendResponse({ exit: 0 });
  }
});
