function scroll() {
  let scrollElements = document.querySelectorAll(".card");
  scrollElements.forEach((el) => {
    if (window.innerHeight > el.getBoundingClientRect().top) {
      el.classList.add("card-vis");
    } else {
      el.classList.remove("card-vis");
    }
    console.log(window.innerHeight + "\t" + el.getBoundingClientRect().top);
  });
}
