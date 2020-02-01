const photoMsg = document.querySelector(".photo-message");
const photoHash = document.querySelector(".photo-hashtag");
const addPhotoForm = document.querySelector(".add-photo-form");

Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";
    const addPhotoBtn = document.getElementById("submitFileBtn");

    addPhotoBtn.addEventListener("click", function(e) {
      if (
        photoMsg.value === " " ||
        photoMsg.value === "" ||
        photoMsg.value === null
      ) {
        photoMsg.placeholder = "Photo message is required.";
        e.preventDefault();
      }

      if (
        photoHash.value === " " ||
        photoHash.value === "" ||
        photoHash.value === null
      ) {
        photoHash.placeholder = "Photo hashtag is required.";
      }
    });

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function(e) {
      hiddenInput.click();
      e.preventDefault();
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

const photoInformation = document.querySelector(".photo-information");
const picturesContainer = document.querySelector(".picturesContainer");

picturesContainer.addEventListener("scroll", function() {
  photoInformation.classList.add("active");
});

const chooseFileBtn = document.querySelector(".file-upload__button");
chooseFileBtn.addEventListener("click", function() {
  photoInformation.classList.remove("active");
});
