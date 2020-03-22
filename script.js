const container = document.querySelector('.container');
const rows = 15;
const cols = 15;
const arry = [];

  //CREATING ARRAY

for (let i = 0; i < cols; i++) {
  arry[i] = [];
  for (let j = 0; j < rows; j++) {
    const circ = document.createElement('div');
    circ.classList.add('circle');
    container.appendChild(circ);
    arry[i].push(circ);
  }
}

  //ADDING EVENT LISTENER

arry.forEach((cols, i) => {
    cols.forEach((circ, j) => {
      circ.addEventListener('click', () => {
        grow(i, j);
      })
    })
  })



//GROW FUNCTION

function grow(i, j) {
  if (arry[i] && arry[i][j]) {
    if (!arry[i][j].classList.contains('grow')) {
      arry[i][j].classList.add('grow');
      setTimeout(() => {
        grow(i+1, j);
        grow(i-1, j);
        grow(i, j-1);
        grow(i, j+1);
      }, 100);

      setTimeout(() => {
        arry[i][j].classList.remove('grow');
      }, 400);
    }
  }
}
