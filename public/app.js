const themeSwitcher = document.getElementById('themeButton');
const body = document.body;

const theme = localStorage.getItem('theme');

if(theme){
  body.classList.add(theme);
}

themeSwitcher.onclick = () => {
  if(body.classList.contains('standard')) {
    body.classList.replace('standard', 'theme1');
    localStorage.setItem('theme', 'theme1');
  }
  else if(body.classList.contains('theme1')) {
    body.classList.replace('theme1', 'theme2');
    localStorage.setItem('theme', 'theme2');
  }
  else {
    body.classList.replace('theme2', 'standard');
    localStorage.setItem('theme', 'standard');
  }
}