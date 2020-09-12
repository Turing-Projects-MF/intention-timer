class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }
  countdown() {
    var countDownDate = new Date().getTime() + (this.minutes * 60 * 1000) + (this.seconds * 1000) + 1000;
    var timeConvert = setInterval(function() {
    var now = new Date().getTime();
    var remainingTime = countDownDate - now;
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    var addZeroMin = minutes < 10 ? "0" + minutes : minutes;
    var addZeroSec = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector('h1').innerHTML = `${addZeroMin}:${addZeroSec}`;
    if (distance < 0) {
      clearInterval(timeConvert);
      document.querySelector('h1').innerHTML = "EXPIRED";
      //add alert
    }
  }, 1000);

  }

  markComplete() {

  }
  saveToStorage() {

  }
}
