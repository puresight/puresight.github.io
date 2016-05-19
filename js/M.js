module.exports = function(){

/** Namespace M init */
function M(){
  "use strict";

  let bodyElement = window.document.body,
    time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds(),
    min = time.getMinutes(),
    eighth = Math.floor(hour / 3),
    pm = Math.floor(hour / 12),
    timeElements = bodyElement.getElementsByTagName("time");

  M.year = time.getFullYear();
  M.monthday = time.getDate();
  M.month = M.months[time.getMonth()];
  M.weekday = M.weekdays[time.getDay()];

  M.map(timeElements, M.replaceText, M.map(timeElements, M.classTime));
  bodyElement.classList.add(M.month.toLowerCase());
  bodyElement.classList.add(M.weekday.toLowerCase());
  bodyElement.classList.add(M.theme[eighth]);
  bodyElement.classList.add("eighth-" + eighth);

  M.setClocks(hour, minute, second);
  M.ready = true;
}

//Mix properties into namespace M
Object.assign(M, {
  ampm: [
    "am", "pm"
  ],
  months: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  theme: [
    "theme-base-0c", "theme-base-00", "theme-base-0b", "theme-base-00", //am
    "theme-base-0d", "theme-base-00", "theme-base-00", "theme-base-08", //pm
  ],

  /**
   * TODO only works for first clock right now: extend for all clocks
   * TODO Safari needs webkitTransform?
   * @see https://cssanimation.rocks/clocks/
   */
  setClocks: function setClocks(hour, minute, second){
    var hourHand = document.querySelector(".clock .hours"),
      minuteHand = document.querySelector(".clock .minutes"),
      secondHand = document.querySelector(".clock .seconds");
    if (hourHand) {
      hourHand.style.transform   = 'rotateZ('+ (hour * 30 + minute / 2) +'deg)';
      minuteHand.style.transform = 'rotateZ('+ (minute * 6) +'deg)';
      secondHand.style.transform = 'rotateZ('+ (second * 6) +'deg)';
    }
  },

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   * @param array, @param function, @param arguments for the invocation
   */
  map: function map(arr, fxn, paramList){
    "use strict";
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let param = (!paramList || !paramList.length || i >= paramList.length) ? null : paramList[i];
      result.push(fxn.call(arr[i], param));
    }
    return result;
  },

  /**
   * impure function because uses M namespace
   * @this = node
   */
  classTime: function classTime(){
    if (this && this.className) return {
        "day": M.weekday,
        "month-date": M.month + " " + M.monthday + M.th(M.monthday),
        "day-month-date": M.weekday + ", " + M.month + " " + M.monthday + M.th(M.monthday),
        "day-month-date-year": M.weekday + ", " + M.month + " " + M.monthday + M.th(M.monthday) + ", " + M.year,
      }[this.className];
    else return console.log("A time tag's class name was unrecognized") || "";
  },

  /**
   * impure function because mutates DOM
   * @this = node
   * @param text TODO escaping
   */
  appendSpan: function appendSpan(text){
    if (text && this) {
      let span = document.createElement("span");
      span.innerHTML = text;
      return this.appendChild(span);
    } else throw new RangeError();
  },

  /**
   * impure function because mutates DOM
   * @this = node
   * @param text TODO escaping
   */
  replaceText: function replaceText(text){
    if (text && this) {
      let html = "<span>";
      html += text;
      html += "</span>";
      this.innerHTML = html;
      return html;
    } else return console.log("Unexpected parameter") || "";
  },

  /**
   * Presumed: language = en
   * @param num
   * @returns "th" or "nd" or "rd" suffix appropriate to num
   */
  th: function th(num){
    let html = "<sup>";
    if ("number" !== typeof num) throw new TypeError();
    if (num > 3 && num < 21) html+= "th"; // teens are special in English
    else {
      let i = num % 10;
      if (i === 3) html += "rd";
      else if (i === 2) html += "nd";
      else if (i === 1) html += "st";
      else html += "th";
    }
    return html + "</sup>";
  }
});

return M;
}
