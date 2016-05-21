//Public domain eligrey/classList.js
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}
//mdn polyfill of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

/** Namespace M init */
function M(win){
  "use strict";

  let bodyElement = win.document.body,
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
  bodyElement.classList.add(win.location.hostname);
  if (!(443 === win.location.port || "" === win.location.port))
    bodyElement.classList.add("debug");

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

M(window);

window.addEventListener("load", function(e) {
  if (!M.ready) throw new Error("M not ready at window load");
  document.body.classList.remove("loading");
});
