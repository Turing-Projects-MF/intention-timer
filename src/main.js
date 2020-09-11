// var activityButtons = document.querySelectorAll('.activity-buttons');
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var studyImage = document.querySelector('.study-img');
var meditateImage = document.querySelector('.meditate-img');
var exerciseImage = document.querySelector('.exercise-img');
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionChosen = document.querySelector('#activity-choice');
var minutesChosen = document.querySelector('#total-minutes');
var secondsChosen = document.querySelector('#total-seconds');

var savedActivities = [];
var activity;

// for (var i = 0; i < activityButtons.length; i++) {
//   activityButtons[i].addEventListener('click', buttonColorizer);
// };

studyButton.addEventListener('mousedown', buttonColorizer);
meditateButton.addEventListener('click', buttonColorizer);
exerciseButton.addEventListener('click', buttonColorizer);
startActivityButton.addEventListener('click', chooseActivity);


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

function chooseActivity() {
  var activityInput = '';
  var descriptionInput = descriptionChosen.value;
  var minutesInput = minutesChosen.value;
  var secondsInput = secondsChosen.value;
  activity = new Activity(activityInput, descriptionInput, minutesInput, secondsInput);
console.log(activity)}

function buttonCategorizer(event) {
  var selection = ''
  if (event.target === studyButton) {
    this.category = 'study';
  } if (event.target === meditateButton) {
    this.category = 'meditate';
  } if (event.target === exerciseButton) {
    this.category = 'exercise';
  }
}
