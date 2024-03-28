const formid = "controltower-form";
const buttonid = "controltower-update";
const formHTML = `
<label for="inserted_form_username">Username</label>
<input type="text" name="username" id="inserted_form_username" />
<label for="inserted_form_password">Password</label>
<input type="text" name="password" id="inserted_form_password" />
<label for="inserted_form_sn">Serial number</label>
<input type="text" name="sn" id="inserted_form_sn" />
<input type="submit" value="update" />
`;
const BLANK = "";

class ControlTower {
  constructor() {
    this.form = document.getElementById(formid);
    this.updateButton = document.getElementById(buttonid);
    this.#addListeners();
  }

  renderForm() {
    this.form.innerHTML = formHTML;
  }

  #addListeners() {
    const form = this.form;
    
    this.updateButton.addEventListener("click", () => {
      form.innerHTML = formHTML;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const { username, password, sn } = formProps;

      if (!username || username.trim() === BLANK) {
        alert("Username field is required");
        return;
      } else if (!password || password.trim() === BLANK) {
        alert("Password field is required");
        return;
      } else if (!sn || password.trim() === BLANK) {
        alert("Serial number is required");
        return;
      }

      chrome.storage.local.set({
        HUAWEI_ROUTER_CREDS: {
          username: username,
          password: password,
          sn: sn,
        },
      });
    });
  }
}

// bind methods and locators when the extension is loaded
window.controltower = new ControlTower();
