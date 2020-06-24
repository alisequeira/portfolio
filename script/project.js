const GH_URL = "https://api.github.com/users/alisequeira/repos";

// fetch(GH_URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((repo) => console.log(repo))
//   .catch(() => console.log("algo fallo"));

const $projectDescriptionContainer = document.getElementById(
  "projectDescription"
);
// const $projectContainer = document.getElementById("project");
// const $projectTittle = $projectDescriptionContainer.querySelector("h3");
// const $projectDescription = $projectDescriptionContainer.querySelector("p");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function mainProjectTemplate(data) {
  return `
          <div class="mainPorjectDescription">
          <h2>${data[5].name}</h2>
          <p>${data[5].description}</p>
          <a href="https://github.com/alisequeira/portfolio">
              <button>go to github</button>
          </a>
          </div>
          </div>`;
}

function projectsTemplate1(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[0].name}</h3>
    <p>${data[0].description}</p>
    <br>
    <a href="https://github.com/alisequeira/aboutme-html-and-css-practice" target= "_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}

function projectsTemplate2(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[1].name}</h3>
    <p>${data[1].description}</p>
    <br>
    <a href="https://github.com/alisequeira/brand" target="_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}
function projectsTemplate3(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[2].name}</h3>
    <p>${data[2].description}</p>
    <br>
    <a href="https://github.com/alisequeira/FM-calculator" target="_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}
function projectsTemplate4(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[3].name}</h3>
    <p>${data[3].description}</p>
    <br>
    <a href="https://github.com/alisequeira/googleClone" target="_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}
function projectsTemplate5(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[4].name}</h3>
    <p>${data[4].description}</p>
    <br>
    <a href="https://github.com/alisequeira/graphic-programming-BOOKMARKET" target="_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}
function projectsTemplate6(data) {
  return `<article class="project" id="articleContainer">
    <figure class="projectImg" id="imgFigure">
        <img src="./assets/img/uriel-soberanes-MxVkWPiJALs-unsplash.jpg" alt="">
    </figure>
    <div class="descriptionContent" id="projectDescription">
        <h3>${data[6].name}</h3>
    <p>${data[6].description}</p>
    <br>
    <a href="https://github.com/alisequeira/graphic-programming-BOOKMARKET" target="_blank">
      <button>go to github</button>
    </a>
</div>
</article>`;
}

getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate1(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate2(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate3(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate4(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate5(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
getData(GH_URL).then((data) => {
  const htmlString = mainProjectTemplate(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("mainSection").append(element);
});
getData(GH_URL).then((data) => {
  const htmlString = projectsTemplate6(data);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = htmlString;
  const element = html.body.children[0];
  document.getElementById("projects").append(element);
  // document.getElementById("projects").innerHTML = htmlString;
});
