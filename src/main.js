// var activityButtons = document.querySelectorAll('.activity-buttons');
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var studyImage = document.querySelector('.study-img');
var meditateImage = document.querySelector('.meditate-img');
var exerciseImage = document.querySelector('.exercise-img');
var studyText = document.querySelector('#study-text');
var meditateText = document.querySelector('#meditate-text');
var exerciseText = document.querySelector('#exercise-text');
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionChosen = document.querySelector('#activity-choice');
var minutesChosen = document.querySelector('#total-minutes');
var secondsChosen = document.querySelector('#total-seconds');
var timerPanel = document.querySelector('.timer-panel');
var leftPanel = document.querySelector('.left-panel');
var currentTimer = document.querySelector('h1');
var activityDescription = document.querySelector('#activity-description');
var inputFields = document.getElementsByTagName('input');
var buttonTags = document.getElementsByTagName('button');
var errorContainer = document.querySelector('.error-container');
var errorMessage = document.querySelector('.error-message');
var errorImage = document.querySelector('.error-image');
var startButton = document.querySelector('.start-button');
var leftTitle = document.querySelector('#left-title');
var loggedPastActivities = document.querySelector('.logged-activities');
var logActivityButton = document.querySelector('.log-activity-button');
var createActivityButton = document.querySelector('.create-button');
var createContainer = document.querySelector('.create');

var pastActivity = [];
var currentActivity;

studyButton.addEventListener('click', buttonColorizer);
meditateButton.addEventListener('click', buttonColorizer);
exerciseButton.addEventListener('click', buttonColorizer);
startActivityButton.addEventListener('click', chooseActivity);
startButton.addEventListener('click', liveTimer);
logActivityButton.addEventListener('click', displayPastActivities );
createActivityButton.addEventListener('click', refreshActivities);


function buttonColorizer(event) {
  if (event.target === studyButton || event.target === studyText || event.target === studyImage) {
    buttonUnColorizer();
    studyButton.classList.add('study-style', 'selected');
    studyImage.src = './assets/study-active.svg';
  } if (event.target === meditateButton || event.target === meditateText || event.target === meditateImage) {
    buttonUnColorizer();
    meditateButton.classList.add('meditate-style', 'selected');
    meditateImage.src = './assets/meditate-active.svg';
  } if (event.target === exerciseButton || event.target === exerciseText || event.target === exerciseImage) {
    buttonUnColorizer();
    exerciseButton.classList.add('exercise-style', 'selected');
    exerciseImage.src = './assets/exercise-active.svg';
  }
}

function buttonUnColorizer() {
  studyButton.classList.remove('study-style', 'selected');
  meditateButton.classList.remove('meditate-style', 'selected');
  exerciseButton.classList.remove('exercise-style', 'selected');
  imageHandler();
}

function imageHandler() {
  studyImage.src = './assets/study.svg';
  meditateImage.src = './assets/meditate.svg';
  exerciseImage.src = './assets/exercise.svg';
}

function chooseActivity() {
  inputValidator();
  var activityInput = document.querySelector('.selected').value;
  var descriptionInput = descriptionChosen.value;
  var minutesInput = minutesChosen.value;
  var secondsInput = secondsChosen.value;
  currentActivity = new Activity(activityInput, descriptionInput, minutesInput, secondsInput);
  // pastActivity.push(currentActivity);
  if (errorContainer.classList.contains('hidden')) {
    displayCountDown();
    displayHandler();
  }
}

function displayHandler() {
  timerPanel.classList.remove('hidden');
  leftPanel.classList.add('hidden');
}

function displayCountDown() {
  leftTitle.innerHTML = 'Current Activity';
  var timerActivity = `${currentActivity.description}`;
  activityDescription.innerHTML = timerActivity;
  var minutes = currentActivity.minutes < 10 ? "0" + currentActivity.minutes : currentActivity.minutes;
  var seconds = currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds;
  var countDown = `${minutes}:${seconds}`;
  currentTimer.innerHTML = countDown;
}

function inputValidator() {
  if (descriptionChosen.value == '' || minutesChosen.value == '' || secondsChosen.value == '') {
      errorContainer.classList.remove('hidden');
    };
    buttonValidator();
}

function buttonValidator() {
  if (!studyButton.classList.contains('selected') && !meditateButton.classList.contains('selected')
    && !exerciseButton.classList.contains('selected')) {
    errorContainer.classList.remove('hidden');
  }
}

function liveTimer() {
  currentActivity.countdown();
}

function displayPastActivities() {
  pastActivity.push(currentActivity);
  var loggedActivities = ''
  var updateDom;
  for (var i  = 0; i < pastActivity.length; i++) {
    updateDom =
    `
      <div class="completed-activities">
        <div class="right-border ${pastActivity[i].category}"></div>
        <p class="past-category">${pastActivity[i].category}</p>
        <p class="logged-time">${pastActivity[i].minutes}:${pastActivity[i].seconds}</p>
        <p class="past-description">${pastActivity[i].description}</p>
      </div>
      `;
      loggedActivities += updateDom
  } loggedPastActivities.innerHTML = loggedActivities
}

function refreshActivities() {
  createContainer.classList.add('.hidden');
  leftPanel.classList.remove('.hidden');
}
//Add Hidden on loggedActivities button click
//remove hidden from create button
