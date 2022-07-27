const xdbControl = document.getElementById('xdb-control');
const propjectsControl = document.getElementById('propjects-control');
const postControl = document.getElementById('post-control');

const defaultState = document.getElementById('default-state');
const xbeDb = document.getElementById('xbe-db');
const availableProjects = document.getElementById('available-projects');
const postProject = document.getElementById('post-project');


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