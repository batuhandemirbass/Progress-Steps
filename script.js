const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cricle = document.querySelectorAll('.cricle');


let currentActive = 1;

next.addEventListener('click',() => {

  currentActive++;
  console.log(currentActive);

  if (currentActive > cricle.length){
    currentActive = cricle.length;
  }
  console.log(currentActive);
  update();
})

prev.addEventListener('click',() => {

  currentActive--;
  console.log(currentActive);

  if (currentActive < 1){
    currentActive = 1;
  }
  update();
})

function update() {
  cricle.forEach((cricles, index) => {
    if (index < currentActive) {
      cricles.classList.add('active');
    } else {
      cricles.classList.remove('active');
    }

  })

  let actives = document.querySelectorAll(".active");
  progress.style.width = (actives.length - 1) / (cricle.length - 1) * 100 + '%';

  if (currentActive === 1 ){
    prev.disabled = true;
  }else if(currentActive === cricle.length){
    next.disabled = true;
  }else{
    prev.disabled = false;
    next.disabled = false;
  }
}
