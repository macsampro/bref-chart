let isVisibleDiv1 = false;
let isVisibleDiv2 = false;
let isVisibleDiv3 = false;
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const largeurEcran = window.innerWidth;
const hauteurEcran = window.innerHeight;
let pjavascript = document.querySelector("#pjavascript");
console.log(largeurEcran);

const names = [
  "Samir",
  "Bayram",
  "Thomas",
  "Melina",
  "Fabrice",
  "Loic",
  "Gary",
  "Alexandre",
  "Quentin",
  "Lydie",
  "Nisrine",
  "Maxime",
  "Remi",
  "Jerome",
  "Nicolas",
  "Guillaume",
  "Samra",
  "Loic l'ancien",
];

// -------------------------------------------------------------------------------
function getRandomName() {
  let randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function generateRandomName() {
  let randomName = getRandomName();
  document.getElementById("mon-bouton").textContent = randomName;
  console.log(button.textContent);
  if (button.textContent === "Bayram") {
    button.textContent === "Bayram";
    alert(
      "Suite à une erreur. Les formateurs seront dans l'obligation de payé les croissants à la place de Bayram"
    );
  }
  if (button.textContent === "Samir") {
    button.textContent === "Samir";
    alert(
      "Suite à une erreur. Les formateurs seront dans l'obligation de payé les croissants à la place de Samir"
    );
  }
}

let button = document.querySelector("#mon-bouton");
button.addEventListener("click", generateRandomName);

if (button.textContent === "Bayram") {
  setTimeout(() => {
    button.textContent === "Louis";
  }, 1300);
}
if (button.textContent === "Samir") {
  setTimeout(() => {
    button.textContent === "Louis";
  }, 1300);
}
// -------------------------------------------div visible--------------------------------------------------
if (largeurEcran > 320 && largeurEcran < 390) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "330px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "640px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "180px";
    } else {
      div3.style.height = "64px";
    }
  });
  // } else if (largeurEcran <= 390) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "280px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "570px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "150px";
    } else {
      div3.style.height = "64px";
    }
  });
} else if (largeurEcran >= 390 && largeurEcran < 550) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "250px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "430px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "160px";
    } else {
      div3.style.height = "64px";
    }
  });
} else if (largeurEcran >= 550 && largeurEcran < 750) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "230px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "330px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "160px";
    } else {
      div3.style.height = "64px";
    }
  });
} else if (largeurEcran >= 750 && largeurEcran < 1000) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "230px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "330px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "140px";
    } else {
      div3.style.height = "64px";
    }
  });
} else if (largeurEcran >= 1000) {
  div1.addEventListener("click", () => {
    isVisibleDiv1 = !isVisibleDiv1;
    console.log(isVisibleDiv1);
    if (isVisibleDiv1) {
      div1.style.height = "230px";
    } else {
      div1.style.height = "64px";
    }
  });
  div2.addEventListener("click", () => {
    isVisibleDiv2 = !isVisibleDiv2;
    console.log(isVisibleDiv2);
    if (isVisibleDiv2) {
      div2.style.height = "280px";
    } else {
      div2.style.height = "64px";
    }
  });
  div3.addEventListener("click", () => {
    isVisibleDiv3 = !isVisibleDiv3;
    console.log(isVisibleDiv3);
    if (isVisibleDiv3) {
      div3.style.height = "120px";
    } else {
      div3.style.height = "64px";
    }
  });
}

// -----------------------------------------------------------------------------------------
