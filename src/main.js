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
    studyButton.classList.add('study-style');
    studyImage.src = './assets/study-active.svg';
  } if (event.target === meditateButton) {
    meditateButton.classList.add('meditate-style');
      meditateImage.src = './assets/meditate-active.svg';
  } if (event.target === exerciseButton) {
    exerciseButton.classList.add('exercise-style');
      exerciseImage.src = './assets/exercise-active.svg';
  }
}
