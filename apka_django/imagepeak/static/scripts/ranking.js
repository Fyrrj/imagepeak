const places = document.querySelectorAll("div.other-user-place");

places.forEach(place => {
  if (place.textContent === "1" || place.textContent === 1) {
    place.style.backgroundColor = "gold";
  }

  if (place.textContent === "2" || place.textContent === 2) {
    place.style.backgroundColor = "silver";
  }
  if (place.textContent === "3" || place.textContent === 3) {
    place.style.backgroundColor = "brown";
  }
});
