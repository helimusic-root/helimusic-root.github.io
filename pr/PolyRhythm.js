var AboutPage=function(){return{initialize:function(b){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPagePath(IndexPage)+App.getLastConfigInCurrentSessionInURLParams()})},draw:function(){},getPath:function(){return"about.html"}}}(),AdManager=function(){(function(){for(var b=document.querySelectorAll("body > div#ad > div"),c=0;c<b.length;c++)b[c].addEventListener("click",function(){window.location="https://www.facebook.com/unicef"})})()}(),
Base64ArrayBufferCodec=function(){for(var b=new Uint8Array(256),c=0;64>c;c++)b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(c)]=c;return{encode:function(b){b=new Uint8Array(b);var a,c=b.length,d="";for(a=0;a<c;a+=3)d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b[a]>>2],d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b[a]&3)<<4|b[a+1]>>4],d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b[a+1]&15)<<
2|b[a+2]>>6],d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b[a+2]&63];2===c%3?d=d.substring(0,d.length-1)+"=":1===c%3&&(d=d.substring(0,d.length-2)+"==");return d},decode:function(c){var a=.75*c.length,g=c.length,d=0,k,h,f,e;"="===c[c.length-1]&&(a--,"="===c[c.length-2]&&a--);for(var r=new ArrayBuffer(a),m=new Uint8Array(r),a=0;a<g;a+=4)k=b[c.charCodeAt(a)],h=b[c.charCodeAt(a+1)],f=b[c.charCodeAt(a+2)],e=b[c.charCodeAt(a+3)],m[d++]=k<<2|h>>4,m[d++]=(h&15)<<4|f>>2,m[d++]=(f&
3)<<6|e&63;return r}}}(),Config=function(){return{fromURLParams:function(b){var c={};c.top=parseInt(b.t)||3;c.bottom=parseInt(b.b)||2;c.tempo=parseInt(b.p)||12;return c},toURLParams:function(b){var c;c="?t="+b.top;c+="&b="+b.bottom;return c+="&p="+b.tempo},fromLocalStorage:function(){var b=localStorage.getItem("polyrhythm_config");return null!==b?JSON.parse(b):null},saveToLocalStorage:function(b){localStorage.setItem("polyrhythm_config",JSON.stringify(b))},isValidConfig:function(b){function c(a){return 2>
a||9<a?!1:!0}function e(a){return 1>a||120<a?!1:!0}return null===b?!1:c(b.top)&&c(b.bottom)&&e(b.tempo)},getDefaultConfig:function(){return{top:3,bottom:2,tempo:12}},isSameConfig:function(b,c){return null===b||null===c?!1:b.top===c.top&&b.bottom===c.bottom&&b.tempo===c.tempo}}}(),Header=function(){function b(){window.location=App.getPagePath(AboutPage)}function c(){e=document.querySelector("div#header > div#controls > div.control#index");e.addEventListener("click",function(){window.location=App.getPagePath(IndexPage)+
App.getLastConfigInCurrentSessionInURLParams()});a=document.querySelector("div#header > div#controls > div.control#share");a.addEventListener("click",function(){window.location=App.getPagePath(SharePage)});document.querySelector("div#header > div#title  > div#text").addEventListener("click",b);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",b)}var e=null,a=null;return{initialize:function(){c();document.querySelector("div#header > div#title  > div#text").innerHTML=
Locale.getApplicationTitle()},highlight:function(b){a.classList.remove("highlighted");b===SharePage?a.classList.add("highlighted"):e.classList.add("highlighted")}}}(),IndexPage=function(){function b(){App.replaceURL(App.getPagePath(IndexPage)+Config.toURLParams(a));sessionStorage.setItem("polyrhythm_urlparams",Config.toURLParams(a));document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getConfigDescription(a);var b=Config.fromLocalStorage(),f=document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#load");
null===b||Config.isSameConfig(a,b)?f.classList.add("hidden"):f.classList.remove("hidden")}function c(c){if("topMore"===c.target.id){if(9===a.top)return;a.top+=1}if("topLess"===c.target.id){if(2===a.top)return;--a.top}if("bottomMore"===c.target.id){if(9===a.bottom)return;a.bottom+=1}if("bottomLess"===c.target.id){if(2===a.bottom)return;--a.bottom}var f=Math.floor(240/Math.max(a.top,a.bottom));a.tempo>f&&(a.tempo=f);"minusminus"===c.target.id&&(a.tempo=1>a.tempo-10?1:a.tempo-10);"minus"===c.target.id&&
(1>a.tempo-1?a.tempo=1:--a.tempo);"plusplus"===c.target.id&&(a.tempo=a.tempo+10>f?f:a.tempo+10);"plus"===c.target.id&&(a.tempo=a.tempo+1>f?f:a.tempo+1);document.querySelector("body > div#container > div#settings > div#rhythms > div#value").innerHTML=a.top+":"+a.bottom;d.setConfig(a);d.draw();b();document.querySelector("body > div#container > div#settings > div#tempo > div#value").innerHTML=a.tempo}function e(){d.draw()}var a=null,g=!1,d=null,k=function(){function b(a,c){return c?b(c,a%c):a}function c(){0===
l%a.top&&m(l/a.top);0===l%a.bottom&&e(l/a.bottom);l=(l+1)%n;p=setTimeout(c,q)}function k(a,c,b){a.setAttribute("fill",c);a.style.transformOrigin="50% 50%";a.style.transform="scale("+b+")"}function e(a){g||SoundPlayer.playSound(0);var c=d.getStaveNoteHeadElement("top",a),b=d.getStaveNoteStemElement("top",a);null!==c&&null!==b&&(k(c,"green",1.8),b.setAttribute("stroke","green"),setTimeout(function(){k(c,"black",1);b.setAttribute("stroke","black")},200))}function m(a){g||SoundPlayer.playSound(1);var c=
d.getStaveNoteHeadElement("bottom",a),b=d.getStaveNoteStemElement("bottom",a);null!==c&&null!==b&&(k(c,"red",1.8),b.setAttribute("stroke","red"),setTimeout(function(){k(c,"black",1);b.setAttribute("stroke","black")},200))}var p=null,q=Number.MAX_VALUE,l=0,n=Number.MAX_VALUE;return{play:function(){var f=a.top,d=a.bottom;n=f*(d/b(f,d));q=60/(n*a.tempo)*1E3;l=0;c()},stop:function(){clearTimeout(p);p=null;q=Number.MAX_VALUE;l=0;n=Number.MAX_VALUE}}}();return{initialize:function(h){SoundPlayer.initialize();
a=Config.fromURLParams(h);Config.isValidConfig(a)||(alert("Invalid config. Revert to default."),a=Config.getDefaultConfig());document.querySelector("body > div#container > div#settings > div#rhythms > div#value").innerHTML=a.top+":"+a.bottom;document.querySelector("body > div#container > div#settings > div#tempo > div#value").innerHTML=a.tempo;d=new Player(document.querySelector("body > div#container > div#music  > div#sheet"));document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#load");
d.setConfig(a);b();h=document.querySelectorAll("body > div#container > div#settings div.control");for(var f=0;f<h.length;f++)h[f].addEventListener("click",c);document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#load").addEventListener("click",function(){a=Config.fromLocalStorage();d.setConfig(a);b();e()});document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#mute").addEventListener("click",function(a){g=a.target.classList.contains("muted");
a.target.classList.toggle("muted")});document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#play").addEventListener("click",function(c){Config.saveToLocalStorage(a);document.querySelector("body > div#container > div#music > div#header > div#controls > div.control#load").classList.add("hidden");var b=c.target.classList.contains("playing");c.target.classList.toggle("playing");b?(k.stop(),document.querySelector("body > div#container > div#settings").classList.remove("hidden")):
(k.play(),document.querySelector("body > div#container > div#settings").classList.add("hidden"))});e()},draw:e,getPath:function(){return"index.html"}}}(),Locale=function(){function b(c,b){var f;void 0===b&&(b=a);f=b in c?c[b]:c.en;for(var d=2;d<arguments.length;d++)f=f.replace("{"+(d-1)+"}",arguments[d]);return f}function c(a,c){return b(k,c,a.top,a.bottom,a.tempo)}var e=["en","zh-cn"],a="en",g={en:"HeliMusic","zh-cn":"\u55e8\u4e50"},d={en:"PolyRhythm","zh-cn":"\u590d\u8282\u594f"},k={en:"PolyRhythm {1}:{2} in tempo {3}",
"zh-ch":"\u590d\u8282\u594f{1}:{2}\u8282\u62cd{3}"},h={en:"Share <b>{1}</b> to your friends using buttons above or your browser's sharing functions!","zh-cn":"\u4f7f\u7528\u4e0a\u9762\u7684\u6309\u94ae\u6216\u8005\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd\u628a{1}\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\uff01"};(function(){if(null!==localStorage.getItem("language")&&0<=e.indexOf(localStorage.language))a=localStorage.language;else{var c=navigator.languages&&navigator.languages[0]||navigator.language||
navigator.userLanguage,c=c.toLowerCase();a=0<=e.indexOf(c)?c:"en"}})();return{getProjectName:function(a){return b(g,a)},getApplicationTitle:function(a){return b(d,a)},getSharingTitle:function(a,d){return b(h,d,c(a))},getConfigDescription:c}}();
function Player(b){function c(){e.innerHTML="";var a=new Vex.Flow.Renderer(e,Vex.Flow.Renderer.Backends.SVG);context=a.getContext();a.resize(e.clientWidth,e.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}var e=b,a=null,g=[],d=[];return{setConfig:function(c){a=c},draw:function(){var b=c(),h=b.width/10;320<b.width&&480>=b.width?h=b.width/16:200<b.width&&320>=b.width?h=b.width/20:200>=b.width&&(h=4);h=new Vex.Flow.Stave(h,16,b.width-3*h);h.addClef("treble");
h.setContext(b).draw();var f=e.querySelectorAll("svg path"),f=f[1].outerHTML.replace(/stroke-width="1"/i,'stroke-width="1.25" stroke="black"')+f[4].outerHTML.replace(/stroke-width="1"/i,'stroke-width="1.25" stroke="black"');e.querySelector("svg").innerHTML=f;g=[];for(f=0;f<a.top;f++)g.push(new Vex.Flow.StaveNote({clef:"treble",keys:["d/5"],duration:"8",stem_direction:1}));d=[];for(f=0;f<a.bottom;f++)d.push(new Vex.Flow.StaveNote({clef:"treble",keys:["e/4"],duration:"8",stem_direction:-1}));f=[new Vex.Flow.Beam(g)];
Vex.Flow.Formatter.FormatAndDraw(b,h,g);f.forEach(function(a){a.setContext(b).draw()});f=[new Vex.Flow.Beam(d)];Vex.Flow.Formatter.FormatAndDraw(b,h,d);f.forEach(function(a){a.setContext(b).draw()})},getStaveNoteHeadElement:function(b,c){"bottom"===b&&(c+=a.top);var d=document.querySelectorAll("g.vf-stavenote > g.vf-note > g.vf-notehead > path");return d.length>c?d[c]:null},getStaveNoteStemElement:function(b,c){c+=2;"bottom"===b&&(c+=a.top+1);var d=document.querySelectorAll("svg > path");return d.length>
c?d[c]:null}}}
var SharePage=function(){function b(a){var b=a.target.id;b in e?(a=e[b].replace("URL",encodeURIComponent(c.url)).replace("DESCRIPTION",encodeURIComponent(c.description)).replace("VIA","Metronome"),window.open(a,"_blank")):"mail"==b?(a="mailto:?subject="+encodeURIComponent(c.description)+"&body="+encodeURIComponent(c.url),window.open(a,"_blank")):"link"==a.target.id&&(a=document.querySelector("body > input#copy"),a.classList.remove("hidden"),a.value=c.url,a.select(),document.execCommand("copy"),a.classList.add("hidden"));
window.location=App.getPagePath(IndexPage)+App.getLastConfigInCurrentSessionInURLParams()}var c={url:"",description:""},e={qq:"http://v.t.qq.com/share/share.php?url=URL&title=DESCRIPTION",weibo:"http://service.weibo.com/share/share.php?url=URL&title=DESCRIPTION",qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=URL&title=DESCRIPTION",facebook:"https://www.facebook.com/sharer/sharer.php?u=URL&t=DESCRIPTION",twitter:"https://twitter.com/intent/tweet?text=DESCRIPTION&url=URL&via=VIA"};
return{initialize:function(a){a=App.getCanonicalPagePath(IndexPage)+App.getLastConfigInCurrentSessionInURLParams();App.replaceURL(a);var e=Config.fromURLParams(App.getParams());document.querySelector("body > div#container > div#share > div#title").innerHTML=Locale.getSharingTitle(e);c.url=a;c.description=Locale.getConfigDescription(e)+", "+Locale.getApplicationTitle()+", "+Locale.getProjectName();a=document.querySelectorAll("body > div#container > div#share > div#services > div.service");for(e=0;e<
a.length;e++)a[e].addEventListener("click",b);document.querySelector("body > div#container > div#controls > div#ok").addEventListener("click",function(){window.location=App.getPagePath(IndexPage)+App.getLastConfigInCurrentSessionInURLParams()})},draw:function(){},getPath:function(){return"share.html"}}}(),SoundPlayer=function(){var b=null,c={};return{initialize:function(){function e(a,e){var d=document.createElement("script");d.src=a;d.onload=function(){b.decodeAudioData(Base64ArrayBufferCodec.decode(window.dynamicJSData[e]),
function(a){delete window.dynamicJSData[e];c[e]=a})};document.querySelectorAll("head")[0].appendChild(d)}window.AudioContext=window.AudioContext||window.webkitAudioContext;b=new AudioContext;e(App.getBaseURL()+"sound/first.js","sound:0");e(App.getBaseURL()+"sound/second.js","sound:1")},playSound:function(e){e="sound:"+e;if(!c.hasOwnProperty(e))return!1;var a=b.createBufferSource();a.buffer=c[e];a.connect(b.destination);a.start(0);return!0}}}(),App=function(){function b(a){return g+a.getPath()}function c(){var c=
window.location.href;a=0===c.indexOf(b(AboutPage))?AboutPage:0===c.indexOf(b(SharePage))?SharePage:IndexPage}var e={},a=null,g="";return{initialize:function(d){d=void 0===d?{}:d;Header.initialize();(function(){g=window.location.href;for(var a=g.lastIndexOf("/"),c=["file://","http://","https://"],b=0;b<c.length;b++){var d=c[b];0===g.indexOf(d)&&(g=a<d.length?g+"/pr/":g.substring(0,a)+"/pr/")}})();(function(){for(var a=window.location.search,a=("?"===a[0]?a.substr(1):a).split("&"),b=0;b<a.length;b++){var c=
a[b].split("=");d[decodeURIComponent(c[0])]=decodeURIComponent(c[1]||"")}d.lastPage=sessionStorage.lastPage||null;e=d})();c();Header.highlight(a);a.initialize(d);sessionStorage.setItem("lastPage",b(a));window.addEventListener("resize",function(){a.draw()})},getParams:function(){return e},getBaseURL:function(){return g},getCanonicalPagePath:function(a){return"http://helimusic.com/pr/"+a.getPath()},getPagePath:b,replaceURL:function(a){0!==g.indexOf("file://")&&window.history.replaceState("","",a)},
getLastConfigInCurrentSessionInURLParams:function(){return sessionStorage.getItem("polyrhythm_urlparams")||""}}}();
