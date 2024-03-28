const isHuaweiRouterPage = document.getElementById("spanwelcomtext") != null;

if (!isHuaweiRouterPage) {
  throw Error("Wrong page");
}

async function fillCredFields() {
  const storage = {};

  const res = await chrome.storage.local.get(["HUAWEI_ROUTER_CREDS"]);
  if (res instanceof Error) {
    console.error(res);
    return;
  }

  Object.assign(storage, res["HUAWEI_ROUTER_CREDS"]);
  Object.freeze(storage);

  if (Object.getOwnPropertyNames(storage).length === 0) {
    // TODO: Convert these codes to enums

    (async () => {
      const res = await chrome.runtime.sendMessage({ code: 0 });
      if (res.exit != 0) {
        console.error(res);
      }
    })();

    return;
  }

  const usernameField = document.getElementById("txt_Username");
  const passwordField = document.getElementById("txt_Password");
  const snField = document.getElementById("txt_loginsn");
  const { username, password, sn } = storage;

  if (usernameField && passwordField && snField) {
    usernameField.setAttribute("value", username);
    passwordField.setAttribute("value", password);
    snField.setAttribute("value", sn);
  }
}

fillCredFields();
chrome.storage.onChanged.addListener(() => fillCredFields());
