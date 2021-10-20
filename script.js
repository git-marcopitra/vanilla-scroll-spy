var scroll = function () {
  var sections = document.querySelectorAll(".section");

  var linksScrolls = Array.from(sections).map((e) => [
    Math.round(
      e.getBoundingClientRect().top / e.getBoundingClientRect().height
    ),
    e.id,
  ]);

  linksScrolls.forEach(function ([value, id]) {
    if (value === 0) {
      if (!document.querySelector(`a[href="#${id}"]`).classList.contains("selected"))
        document.querySelector(`a[href="#${id}"]`).classList.add("selected");
    } else {
      document.querySelector(`a[href="#${id}"]`).classList.remove("selected");
    }
  });
};

window.addEventListener("scroll", scroll);

window.onload = scroll;
