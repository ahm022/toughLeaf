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