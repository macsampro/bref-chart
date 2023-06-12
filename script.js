const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const largeurEcran = window.innerWidth;
const hauteurEcran = window.innerHeight;
let pjavascript = document.querySelector("#pjavascript");

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

if (largeurEcran <= 390) {
  div1.addEventListener("click", (e) => {
    div1.style.height = "230px";
    if (div1.style.height === "230px") {
      div1.addEventListener("click", (e) => {
        div1.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 520);
      });
    }
  });
  div2.addEventListener("click", (e) => {
    div2.style.height = "480px";
    if (div2.style.height === "480px") {
      div2.addEventListener("click", (e) => {
        div2.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  });
  div3.addEventListener("click", (e) => {
    div3.style.height = "180px";
    if (div3.style.height === "180px") {
      div3.addEventListener("click", (e) => {
        div3.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  });
} else {
  div1.addEventListener("click", (e) => {
    div1.style.height = "210px";
    if (div1.style.height === "210px") {
      div1.addEventListener("click", (e) => {
        div1.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 520);
      });
    }
  });
  div2.addEventListener("click", (e) => {
    div2.style.height = "280px";
    if (div2.style.height === "280px") {
      div2.addEventListener("click", (e) => {
        div2.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  });
  div3.addEventListener("click", (e) => {
    div3.style.height = "180px";
    if (div3.style.height === "180px") {
      div3.addEventListener("click", (e) => {
        div3.style.height = "64px";

        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  });
}

if (largeurEcran <= 390) {
  pjavascript.innerHTML = `<p id="pjavascript">
  let compétencesDePromo = [];<br />
  let humeurPromo = 'Au top';<br /><br />
  if('règles comprises' == true && 'règles <span class="white">ZZZ</span>appliquées' == true) {<br />
  <span class="white">ZZZ</span>compétencesDePromo.push(new
  Compétence());<br />
  } else {<br />
  <span class="white">ZZZ</span>humeurPromo = 'Pas top';<br />
  }
</p>`;
} else {
}
