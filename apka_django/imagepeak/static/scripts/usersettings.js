Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";
    const addPhotoBtn = document.getElementById("submitFileBtn");

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;

      if (label.textContent != defaultLabelText) {
        addPhotoBtn.classList.remove("active");
      }
    });
  }
);

/*Password Change*/

const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const repeatPassword = document.getElementById("repeatPassword");
const passwordChangeForm = document.getElementById("passwordChangeForm");
const errorField = document.getElementById("errorField");

passwordChangeForm.addEventListener("submit", e => {
  let messages = [];
  if (newPassword.value != repeatPassword.value) {
    messages.push("Repeat your password correctly");
  }

  if (
    newPassword.value === "" ||
    newPassword.value === " " ||
    newPassword.value === null ||
    newPassword.value.length <= 5
  ) {
    messages.push(
      "Password must have at least 6 characters and cannot contains spaces"
    );
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorField.innerText = messages.join(", ");
  }
});
