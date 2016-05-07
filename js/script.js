//START eligrey/classList.js (public domain)
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}
//END eligrey/classList.js (public domain)

function M(body){
    var time = new Date(),
      year = time.getFullYear(),
      hour = time.getHours(),
      minute = time.getMinutes(),
      second = time.getSeconds(),
      min = time.getMinutes(),
      day8th = Math.floor(hour / 3);
    body.classList.add(M.months[time.getMonth()]);
    body.classList.add(M.weekdays[time.getDay()]);
    body.classList.add(M.themebase[day8th]);
    M.setClock(hour, minute, second);
    body.classList.remove("loading");
}

Object.assign(M, {
  months: [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ],
  weekdays: [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
  ],
  themebase: [
    "theme-base-0c", "theme-base-00", "theme-base-0a", "theme-base-00", //am
    "theme-base-0d", "theme-base-0b", "theme-base-00", "theme-base-08", //pm
  ],
  /** @see https://cssanimation.rocks/clocks/ */
  setClock: function(hour, minute, second){
    var hourHand = document.querySelector(".clock .hours"),
      minuteHand = document.querySelector(".clock .minutes"),
      secondHand = document.querySelector(".clock .seconds");
    //Safari needs?: webkitTransform
    hourHand.style.transform = 'rotateZ('+ (hour * 30 + minute / 2) +'deg)';
    minuteHand.style.transform = 'rotateZ('+ (minute * 6) +'deg)';
    secondHand.style.transform = 'rotateZ('+ (second * 6) +'deg)';
  }
});

M(document.body);
