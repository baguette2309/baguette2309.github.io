const header = document.querySelector("header");

const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

function makeTranslucent() {
  var elementTarget = document.getElementById("heading");
  if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 60)) {
    header.classList.add("translucent");
  } else {
    header.classList.remove("translucent")
  }
};

window.addEventListener("scroll", throttle(makeTranslucent, 100));

// --------- scroll effects

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// --------- link-image hover listeners to make animated border

const linkImages = document.querySelectorAll(".link-img");
linkImages.forEach((img) => {
  img.addEventListener('mouseover', () => {
    var parent = img.parentElement.parentElement;
    parent.classList.add('animBorder');
  });

  img.addEventListener('mouseout', () => {
      var parent = img.parentElement.parentElement;
      parent.classList.remove('animBorder');
  });
});