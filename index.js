window.onload = () => {
  let now_ = new Date().getTime();
  changeDueTo(now_);
  setInterval(() => {
    let now = new Date().getTime();
    changeDueTo(now);
  }, 1000);
};
function changeDueTo(now) {
  let down = new Date("Dec 15, 2021 16:37:52").getTime();

  let left = generateTimeRemining(now, down);

  let days = document.querySelectorAll(".number")[0];
  let hours = document.querySelectorAll(".number")[1];
  let minutes = document.querySelectorAll(".number")[2];
  let seconds = document.querySelectorAll(".number")[3];

  days.innerHTML = left.days.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  hours.innerHTML = left.hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  minutes.innerHTML = left.minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  seconds.innerHTML = left.seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
function generateTimeRemining(now, down) {
  let timeReminingObject = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let timeRemining = down - now;

  let oneDay = 1000 * 60 * 60 * 24;
  let oneHour = 1000 * 60 * 60;
  let oneMinute = 1000 * 60;
  let oneSecond = 1000;

  let days = Math.floor(timeRemining / oneDay);
  let hours = Math.floor((timeRemining % oneDay) / oneHour);
  let minutes = Math.floor((timeRemining % oneHour) / oneMinute);
  let seconds = Math.floor((timeRemining % oneMinute) / oneSecond);
  timeReminingObject.days = days;
  timeReminingObject.hours = hours;
  timeReminingObject.minutes = minutes;
  timeReminingObject.seconds = seconds;
  return timeReminingObject;
}
