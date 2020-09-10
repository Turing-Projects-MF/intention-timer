// var activityButtons = document.querySelectorAll('.activity-buttons');
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var studyImage = document.querySelector('.study-img');
var meditateImage = document.querySelector('.meditate-img');
var exerciseImage = document.querySelector('.exercise-img');
// for (var i = 0; i < activityButtons.length; i++) {
//   activityButtons[i].addEventListener('click', buttonColorizer);
// };

studyButton.addEventListener('mousedown', buttonColorizer)
meditateButton.addEventListener('click', buttonColorizer)
exerciseButton.addEventListener('click', buttonColorizer)


function buttonColorizer(event) {
  if (event.target === studyButton) {
    buttonUnColorizer();
    studyButton.classList.add('study-style');
    studyImage.src = './assets/study-active.svg';
  } if (event.target === meditateButton) {
    buttonUnColorizer();
    meditateButton.classList.add('meditate-style');
      meditateImage.src = './assets/meditate-active.svg';
  } if (event.target === exerciseButton) {
    buttonUnColorizer();
    exerciseButton.classList.add('exercise-style');
      exerciseImage.src = './assets/exercise-active.svg';
  }
}

function buttonUnColorizer() {
  studyButton.classList.remove('study-style');
  meditateButton.classList.remove('meditate-style');
  exerciseButton.classList.remove('exercise-style');
  imageHandler();
}

function imageHandler() {
  studyImage.src = './assets/study.svg';
  meditateImage.src = './assets/meditate.svg';
  exerciseImage.src = './assets/exercise.svg';
}
