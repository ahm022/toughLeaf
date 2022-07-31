const xdbControl = document.getElementById('xdb-control');
const propjectsControl = document.getElementById('propjects-control');
const postControl = document.getElementById('post-control');

const defaultState = document.getElementById('default-state');
const xbeDb = document.getElementById('xbe-db');
const availableProjects = document.getElementById('available-projects');
const postProject = document.getElementById('post-project');


const hiring = document.getElementById('hiring');
const xbe = document.getElementById('xbe');
const bgImage = document.getElementById("bg-img");

hiring?.addEventListener('mouseover', function handleMouseOver() {
  xbe.style.opacity = '0.5';
  bgImage.src = "../img/section-four/hiring-bg.png"
});

hiring?.addEventListener('mouseout', function handleMouseOver() {
  xbe.style.opacity = '1';
  bgImage.src = "../img/section-four/mask-group-upper.png"
});

xbe?.addEventListener('mouseover', function handleMouseOver() {
  hiring.style.opacity = '0.5';
  bgImage.src = "../img/section-four/xbe-bg.png"
});

xbe?.addEventListener('mouseout', function handleMouseOver() {
  hiring.style.opacity = '1';
  bgImage.src = "../img/section-four/mask-group-upper.png";
});


xdbControl?.addEventListener('mouseover', function handleMouseOver() {
  defaultState.style.display = 'none';
  availableProjects.style.display = 'none';
  postProject.style.display = 'none';
  xbeDb.style.display = 'flex';
});

xdbControl?.addEventListener('mouseout', function handleMouseOver() {
  defaultState.style.display = 'block';
  availableProjects.style.display = 'none';
  postProject.style.display = 'none';
  xbeDb.style.display = 'none';
});

propjectsControl?.addEventListener('mouseover', function handleMouseOver() {
  defaultState.style.display = 'none';
  availableProjects.style.display = 'flex';
  postProject.style.display = 'none';
  xbeDb.style.display = 'none';
});

propjectsControl?.addEventListener('mouseout', function handleMouseOver() {
  defaultState.style.display = 'block';
  availableProjects.style.display = 'none';
  postProject.style.display = 'none';
  xbeDb.style.display = 'none';
});

postControl?.addEventListener('mouseover', function handleMouseOver() {
  defaultState.style.display = 'none';
  availableProjects.style.display = 'none';
  postProject.style.display = 'flex';
  xbeDb.style.display = 'none';
});

postControl?.addEventListener('mouseout', function handleMouseOver() {
  defaultState.style.display = 'block';
  availableProjects.style.display = 'none';
  postProject.style.display = 'none';
  xbeDb.style.display = 'none';
});

//  swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    
  },
});
var swiperOne = new Swiper(".swiperOne", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var infoSwiper = new Swiper(".infoSwiper", {
  pagination: {
    el: ".swiper-pagination-info",
  }
});

// auth  
const displayLoggedInPage = () => {
  hideRegisterPage()
  document.getElementById('signIn').classList.add("show")
}
const hideLoggedInPage = () => {
  document.getElementById('signIn').classList.remove("show")
}
const displayRegisterPage = () => {
  hideLoggedInPage()
  document.getElementById('signUp').classList.add("show")
}
const hideRegisterPage = () => {
  document.getElementById('signUp').classList.remove("show")
}

const toggleCollapse = (id) => {
  const span = document.getElementById(id);

  let titleDiv = span.parentNode;
  if (titleDiv.classList?.length > 1) {
    titleDiv.classList.remove("blue-color");
    span.textContent = '+';
  }
  else {
    titleDiv.classList.add("blue-color");
    span.textContent = '-';
  }

}