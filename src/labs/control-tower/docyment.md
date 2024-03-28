# Control Tower - Huawei home router auto-fill extension 

This project is a Chrome browser extension developed in JavaScript to auto-fill Huawei home router credentials.  

The application's main functionality revolves around automatically filling in the Huawei home router credentials (username, password, and serial number) whenever the user navigates to the router's login page. 

The [manifest.json](manifest.json) file includes the permissions and files for the extension. Included are style settings in [styles/main.css](styles/main.css), HTML elements in [view/index.html](view/index.html), functionality for the background and content scripts in [scripts/background/main.js](scripts/background/main.js) and [scripts/content/main.js](scripts/content/main.js). A control tower visualised in the [images/hello.png](images/hello.png) file, serves as the default icon for this extension. 

Extensions logics:

```javascript
// scripts/content/main.js
const isHuaweiRouterPage = document.getElementById("spanwelcomtext") != null;
if (!isHuaweiRouterPage) { throw Error("Wrong page"); }
async function fillCredFields() { ... }
fillCredFields();
chrome.storage.onChanged.addListener(() => fillCredFields());

// scripts/extension/pre.js
class ControlTower { ... }
window.controltower = new ControlTower();
```
Extensions page visualizes interface where users can update credentials, which are stored in the browser's local storage.