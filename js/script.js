//Public domain eligrey/classList.js
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}

//Namespace M
function M(doc){
  "use strict";
  M.doc = doc;
  let bodyElement = doc.body,
    time = new Date(),
    year = time.getFullYear(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds(),
    min = time.getMinutes(),
    eighth = Math.floor(hour / 3),
    pm = Math.floor(hour / 12),
    timeElements = bodyElement.getElementsByTagName("time"),
    monthday = time.getDate(),
    weekday = M.weekdays[time.getDay()],
    month = M.months[time.getMonth()];

  M.every(timeElements, M.appendSpan, {
    "day": weekday,
    "day-month-date": weekday + ", " + month + " " + monthday,
    "day-month-date-year": weekday + ", " + month + " " + monthday + ", " + year,
  });
  bodyElement.classList.add(month.toLowerCase());
  bodyElement.classList.add(weekday.toLowerCase());
  bodyElement.classList.add(M.theme[eighth]);
  bodyElement.classList.add("eighth-" + eighth);

  M.setClocks(hour, minute, second);
  bodyElement.classList.remove("loading"); // all loading is done
}

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
    "theme-base-0c", "theme-base-00", "theme-base-0a", "theme-base-00", //am
    "theme-base-0d", "theme-base-0b", "theme-base-00", "theme-base-08", //pm
  ],

  /**
   * @see https://cssanimation.rocks/clocks/
   */
  setClocks: function setClocks(hour, minute, second){
    var hourHand = document.querySelector(".clock .hours"),
      minuteHand = document.querySelector(".clock .minutes"),
      secondHand = document.querySelector(".clock .seconds");
    if (hourHand) {
      //Safari needs?: webkitTransform
      hourHand.style.transform   = 'rotateZ('+ (hour * 30 + minute / 2) +'deg)';
      minuteHand.style.transform = 'rotateZ('+ (minute * 6) +'deg)';
      secondHand.style.transform = 'rotateZ('+ (second * 6) +'deg)';
    }
  },

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   * @param array, @param function, @param this context
   */
  every: function every(arr, fxn, that){
    "use strict";
    let success = true;
    for (let i = 0; i < arr.length; ++i) {
      let item = arr[i];
      if (!fxn.call(item, that[item.className])) success = false;
    };
    return success;
  },

  /**
   * this = node to append
   * @param text TODO escaping
   */
  appendSpan: function appendSpan(text){
    if (text) {
      let span = document.createElement("span");
      span.innerHTML = text;
      return this.appendChild(span);
    }
  }
});

M(document);
