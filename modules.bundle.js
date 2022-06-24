"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[54,930],{23:(t,e,n)=>{n.d(e,{b:()=>w});var a=n(322);const r=n.p+"9791eda45730d66280b3.svg";n.p;var i=n(198),o=n(843),s=n(169),u=n(241),c=n(582),d=n(264),l=n(909),f=n(642),h=n(371),g=n(970),m=n(41);const w=(()=>{let t=[{completed:!1,createDate:"2022-06-18",description:"today, upcoming, urgent",dueDate:"2022-06-18",tags:"personal work",title:"task 1",urgent:!0},{completed:!1,createDate:"2022-06-18",description:"today, upcoming",dueDate:"2022-06-18",tags:"personal",title:"task 2",urgent:!1},{completed:!1,createDate:"2022-06-18",description:"upcoming, urgent",dueDate:"2022-06-19",tags:"work",title:"task 3",urgent:!0},{completed:!1,createDate:"2022-06-18",description:"upcoming",dueDate:"2022-06-19",tags:"work personal travel",title:"task 4",urgent:!1}];function e(){return console.log(t),t}function n(t){!function(){let t=document.getElementById("tasks-container").childNodes;for(let e=t.length-1;e>=0;e--)t[e].remove()}();for(let e in t)w(t[e])}function w(t){document.getElementById("tasks-container").appendChild(function(t){const e=document.createElement("div");e.classList.add("task-container");const n=document.createElement("div");n.classList.add("task-center-container"),document.createElement("div");const a=document.createElement("h1");a.classList.add("task-title"),a.contentEditable="true",a.innerHTML=t.title;const w=document.createElement("p");w.classList.add("task-descript"),w.contentEditable="true",w.innerHTML=t.description;const p=document.createElement("input");p.classList.add("task-progress"),p.type="checkbox";const v=document.createElement("p");v.classList.add("task-date"),v.contentEditable="true",v.innerHTML=t.dueDate.slice(5);const b=document.createElement("label"),y=document.createElement("div");1==t.urgent?(b.classList.add("u-contain"),y.classList.add("u-input")):(b.classList.add("b-contain"),y.classList.add("b-input"));const T=document.createElement("span");if(T.classList.add("task-tag-span"),t.tags.includes("personal")){const t=new Image(18,18);t.src=i,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("work")){const t=new Image(18,18);t.src=o,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("travel")){const t=new Image(18,18);t.src=s,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("dining")){const t=new Image(18,18);t.src=u,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("birthdays")){const t=new Image(18,18);t.src=c,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("excercise")){const t=new Image(18,18);t.src=d,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("meetings")){const t=new Image(18,18);t.src=l,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("favorites")){const t=new Image(18,18);t.src=f,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("campaigning")){const t=new Image(18,18);t.src=h,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("intramural")){const t=new Image(18,18);t.src=g,t.classList.add("task-tags"),T.appendChild(t)}if(t.tags.includes("drinks")){const t=new Image(18,18);t.src=m,t.classList.add("task-tags"),T.appendChild(t)}const C=document.createElement("span");C.classList.add("del-span");const k=new Image(20,20);return k.src=r,k.classList.add("icon-center"),C.addEventListener("click",(t=>{t.target.parentNode.parentNode.remove()})),C.appendChild(k),b.append(p,y),n.append(a,w),e.append(b,n,T,v,C),e}(t))}return{addTask:function(e){console.log(e),t.push(e)},returnLib:e,filterSearchItems:function(t){const a=e();let r=[];if(""!=t){for(let e=0;e<a.length;e++)for(let n in a[e]){const i=a[e][n];"boolean"!=typeof i&&i.includes(t)&&r.push(a[e])}n(r)}else n(a)},filterTodayItems:function(){n(t.filter((t=>t.dueDate==(0,a.ut)())))},filterUrgentItems:function(){n(t.filter((t=>!0===t.urgent)))},filterPersonalItems:function(){n(t.filter((t=>t.tags.includes("personal"))))},filterWorkItems:function(){n(t.filter((t=>t.tags.includes("work"))))},createFilter:function(a,r){const i=a.slice(4),o=document.createElement("li");o.classList.add("type-opt"),o.id=`nav${i}`;const s=document.createElement("span"),u=new Image(20,20);u.src=r,u.classList.add("icon-white");const c=document.createElement("span");c.classList.add("sort-title"),c.innerHTML=i,o.addEventListener("click",(e=>{const a=t.filter((t=>t.tags.includes(i.toLowerCase())));console.log(a),n(a)}));const d=document.createElement("button");d.classList.add("delete-task-tag"),d.innerHTML="-",d.addEventListener("click",(t=>{n(e()),t.target.parentNode.remove(),t.stopPropagation()})),s.append(u),o.append(s,c,d),document.body.childNodes[1].childNodes[0].childNodes[2].appendChild(o)},refreshScreen:n,addTaskToDom:w}})()},322:(t,e,n)=>{function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return a(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function i(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(a(1,arguments),!r(t)&&"number"!=typeof t)return!1;var e=i(t);return!isNaN(Number(e))}n.d(e,{FF:()=>ut,ut:()=>it,_q:()=>ot,nJ:()=>dt,Wq:()=>st});var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var c,d={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,s=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?m(u,(function(t){return t.test(s)})):g(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(s.length);return{value:o,rest:d}}}function g(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function m(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const w={code:"en-US",formatDistance:function(t,e,n){var a,r=s[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:d,formatRelative:function(t,e,n,a){return l[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(c.matchPattern);if(!n)return null;var a=n[0],r=t.match(c.parsePattern);if(!r)return null;var i=c.valueCallback?c.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(t,e){a(2,arguments);var n=i(t).getTime(),r=p(e);return new Date(n+r)}function b(t,e){a(2,arguments);var n=p(e);return v(t,-n)}var y=864e5;function T(t){a(1,arguments);var e=1,n=i(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function C(t){a(1,arguments);var e=i(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=T(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=T(s);return e.getTime()>=o.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function k(t){a(1,arguments);var e=C(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=T(n);return r}var M=6048e5;function D(t,e){a(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,s=null==o?0:p(o),u=null==n.weekStartsOn?s:p(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=i(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function x(t,e){a(1,arguments);var n=i(t),r=n.getUTCFullYear(),o=e||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:p(u),d=null==o.firstWeekContainsDate?c:p(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var f=D(l,e),h=new Date(0);h.setUTCFullYear(r,0,d),h.setUTCHours(0,0,0,0);var g=D(h,e);return n.getTime()>=f.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function P(t,e){a(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:p(i),s=null==n.firstWeekContainsDate?o:p(n.firstWeekContainsDate),u=x(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=D(c,e);return d}var E=6048e5;function U(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const L=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return U("yy"===e?a%100:a,e.length)},S=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):U(n+1,2)},W=function(t,e){return U(t.getUTCDate(),e.length)},N=function(t,e){return U(t.getUTCHours()%12||12,e.length)},Y=function(t,e){return U(t.getUTCHours(),e.length)},O=function(t,e){return U(t.getUTCMinutes(),e.length)},q=function(t,e){return U(t.getUTCSeconds(),e.length)},H=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return U(Math.floor(a*Math.pow(10,n-3)),e.length)};function F(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+U(i,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+U(Math.floor(r/60),2)+n+U(r%60,2)}const z={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return L(t,e)},Y:function(t,e,n,a){var r=x(t,a),i=r>0?r:1-r;return"YY"===e?U(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):U(i,e.length)},R:function(t,e){return U(C(t),e.length)},u:function(t,e){return U(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return U(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return U(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return S(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return U(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){a(1,arguments);var n=i(t),r=D(n,e).getTime()-P(n,e).getTime();return Math.round(r/E)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):U(o,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=i(t),n=T(e).getTime()-k(e).getTime();return Math.round(n/M)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):W(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/y)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return U(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return U(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return N(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Y(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):U(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):U(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):O(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):q(t,e)},S:function(t,e){return H(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return j(r);default:return j(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return j(r);default:return j(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(r,":");default:return"GMT"+j(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(r,":");default:return"GMT"+j(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return U(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return U((a._originalDate||t).getTime(),e.length)}};function B(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function Q(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var A={p:Q,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return B(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(r,e)).replace("{{time}}",Q(i,e))}};const G=A;function X(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var R=["D","DD"],J=["YY","YYYY"];function _(t){return-1!==R.indexOf(t)}function V(t){return-1!==J.indexOf(t)}function $(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function at(t,e,n){a(2,arguments);var r=String(e),s=n||{},u=s.locale||w,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:p(c),l=null==s.firstWeekContainsDate?d:p(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=u.options&&u.options.weekStartsOn,h=null==f?0:p(f),g=null==s.weekStartsOn?h:p(s.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var m=i(t);if(!o(m))throw new RangeError("Invalid time value");var v=X(m),y=b(m,v),T={firstWeekContainsDate:l,weekStartsOn:g,locale:u,_originalDate:m},C=r.match(Z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,G[e])(t,u.formatLong,T):t})).join("").match(K).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return rt(n);var r=z[a];if(r)return!s.useAdditionalWeekYearTokens&&V(n)&&$(n,e,t),!s.useAdditionalDayOfYearTokens&&_(n)&&$(n,e,t),r(y,n,u.localize,T);if(a.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return C}function rt(t){return t.match(tt)[1].replace(et,"'")}function it(){return at(new Date,"yyyy-MM-dd")}function ot(){return at(new Date,"PP")}function st(t,e,n,a,r){return{title:t,description:e,createDate:it(),dueDate:n,urgent:a,tags:r,completeted:!1}}function ut(){const t=[],e=document.getElementsByClassName("task-input");for(let n in e)"checkbox"!=e[n].type?t.push(e[n].value):t.push(e[n].checked);const n=document.getElementById("tag-container");return t.push(n.className),console.log(ct(t)),ct(t)}function ct(t){return t.filter((t=>void 0!==t))}function dt(t){return Object.create(st.apply(null,t))}},41:(t,e,n)=>{t.exports=n.p+"9af5656253d0fb17f128.svg"},582:(t,e,n)=>{t.exports=n.p+"d22a29c0b3e82e835bb9.svg"},198:(t,e,n)=>{t.exports=n.p+"3d7c5132c96e2f454135.svg"},241:(t,e,n)=>{t.exports=n.p+"bc0142087b77ef02e195.svg"},169:(t,e,n)=>{t.exports=n.p+"6c290ee8d97be7dc786a.svg"},909:(t,e,n)=>{t.exports=n.p+"d19a68aa8d460db94ec8.svg"},371:(t,e,n)=>{t.exports=n.p+"84d2527e05621d84bba3.svg"},970:(t,e,n)=>{t.exports=n.p+"ec5e59f359c89a92cd9a.svg"},642:(t,e,n)=>{t.exports=n.p+"844fdbea05b605ceebb3.svg"},264:(t,e,n)=>{t.exports=n.p+"f9bccb86dc9db66575b6.svg"},843:(t,e,n)=>{t.exports=n.p+"af925ce02e7415accb96.svg"}},t=>{t(t.s=23)}]);