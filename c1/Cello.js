var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var c=0;return $jscomp.iteratorPrototype(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.polyfill=function(a,c,f,e){if(c){f=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in f||(f[d]={});f=f[d]}a=a[a.length-1];e=f[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.from",function(a){return a?a:function(c,a,e){$jscomp.initSymbolIterator();a=null!=a?a:function(b){return b};var d=[],b=c[Symbol.iterator];if("function"==typeof b)for(c=b.call(c);!(b=c.next()).done;)d.push(a.call(e,b.value));else for(var b=c.length,k=0;k<b;k++)d.push(a.call(e,c[k]));return d}},"es6-impl","es3");$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};
$jscomp.owns=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};
$jscomp.polyfill("WeakMap",function(a){function c(b){$jscomp.owns(b,e)||$jscomp.defineProperty(b,e,{value:{}})}function f(b){var a=Object[b];a&&(Object[b]=function(b){c(b);return a(b)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;var e="$jscomp_hidden_"+Math.random().toString().substring(2);f("freeze");f("preventExtensions");
f("seal");var d=0,b=function(b){this.id_=(d+=Math.random()+1).toString();if(b){$jscomp.initSymbol();$jscomp.initSymbolIterator();b=$jscomp.makeIterator(b);for(var a;!(a=b.next()).done;)a=a.value,this.set(a[0],a[1])}};b.prototype.set=function(b,a){c(b);if(!$jscomp.owns(b,e))throw Error("WeakMap key fail: "+b);b[e][this.id_]=a;return this};b.prototype.get=function(b){return $jscomp.owns(b,e)?b[e][this.id_]:void 0};b.prototype.has=function(b){return $jscomp.owns(b,e)&&$jscomp.owns(b[e],this.id_)};b.prototype["delete"]=
function(b){return $jscomp.owns(b,e)&&$jscomp.owns(b[e],this.id_)?delete b[e][this.id_]:!1};return b},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(a){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),g=d.next();if(g.done||g.value[0]!=b||"s"!=g.value[1])return!1;g=d.next();return g.done||4!=g.value[0].x||"t"!=g.value[1]||!d.next().done?!1:!0}catch(m){return!1}}())return a;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var c=new WeakMap,f=function(a){this.data_={};this.head_=b();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}};f.prototype.set=function(b,c){var a=e(this,b);a.list||(a.list=this.data_[a.id]=[]);a.entry?a.entry.value=c:(a.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:b,value:c},a.list.push(a.entry),this.head_.previous.next=a.entry,this.head_.previous=a.entry,this.size++);return this};f.prototype["delete"]=
function(b){b=e(this,b);return b.entry&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.data_[b.id],b.entry.previous.next=b.entry.next,b.entry.next.previous=b.entry.previous,b.entry.head=null,this.size--,!0):!1};f.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=b();this.size=0};f.prototype.has=function(b){return!!e(this,b).entry};f.prototype.get=function(b){return(b=e(this,b).entry)&&b.value};f.prototype.entries=function(){return d(this,function(b){return[b.key,
b.value]})};f.prototype.keys=function(){return d(this,function(b){return b.key})};f.prototype.values=function(){return d(this,function(b){return b.value})};f.prototype.forEach=function(b,a){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,b.call(a,d[1],d[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var e=function(b,a){var d;d=a&&typeof a;"object"==d||"function"==d?c.has(a)?d=c.get(a):(d=""+ ++k,c.set(a,d)):d="p_"+a;var e=b.data_[d];if(e&&$jscomp.owns(b.data_,d))for(var m=0;m<
e.length;m++){var f=e[m];if(a!==a&&f.key!==f.key||a===f.key)return{id:d,list:e,index:m,entry:f}}return{id:d,list:e,index:-1,entry:void 0}},d=function(b,a){var d=b.head_;return $jscomp.iteratorPrototype(function(){if(d){for(;d.head!=b.head_;)d=d.previous;for(;d.next!=d.head;)return d=d.next,{done:!1,value:a(d)};d=null}return{done:!0,value:void 0}})},b=function(){var b={};return b.previous=b.next=b.head=b},k=0;return f},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(a){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),e=new a($jscomp.makeIterator([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var d=e.entries(),b=d.next();if(b.done||b.value[0]!=c||b.value[1]!=c)return!1;b=d.next();return b.done||b.value[0]==c||4!=b.value[0].x||b.value[1]!=b.value[0]?!1:d.next().done}catch(k){return!1}}())return a;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var c=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var c;!(c=a.next()).done;)this.add(c.value)}this.size=this.map_.size};c.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};c.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};c.prototype.clear=function(){this.map_.clear();this.size=0};c.prototype.has=function(a){return this.map_.has(a)};c.prototype.entries=
function(){return this.map_.entries()};c.prototype.values=function(){return this.map_.values()};c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(a,c){var d=this;this.map_.forEach(function(b){return a.call(c,b,b,d)})};return c},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(a,c){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var f=0,e={next:function(){if(f<a.length){var d=f++;return{value:c(d,a[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(a){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"about.html"}}}(),AdManager=function(){(function(){for(var a=document.querySelectorAll("body > div#ad > div"),c=0;c<a.length;c++)a[c].addEventListener("click",function(){window.location="https://www.facebook.com/unicef"})})()}(),CatalogPage=function(){function a(){var a=
document.createElement("script");a.src=App.getPiecesPath()+"indexes.js";a.onload=function(){var a=window.dynamicJSData["pieces:indexes"],c=a.scales;1==b.length?a.hasOwnProperty(b[0])&&(c=a[b[0]]):1<b.length&&"scales"==b[0]&&a.scales.hasOwnProperty(b[1])&&(c=a.scales[b[1]]);d={query:b,tiles:[]};a=[];for(m in c)c.hasOwnProperty(m)&&"_"!==m.substring(0,1)&&a.push(m);a.sort(function(b,a){var d=Locale.getTranslation(c[b]._desc,"en"),e=Locale.getTranslation(c[a]._desc,"en");return d<e?-1:d>e?1:0});for(var g=
0;g<a.length;g++){var m=a[g],p=c[m];if("_"!==m.substring(0,1)){var m={id:m,description:p._desc},f=0;for(keyInNextLevel in p)p.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(f+=1);0>=f?m.type="piece":(m.type="folder",m.total=f);d.tiles.push(m)}}e()};document.querySelectorAll("head")[0].appendChild(a)}function c(b){b=b.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+b)}function f(b){window.location=App.getPagePath(IndexPage)+
"?p="+encodeURIComponent(b.target.getAttribute("data"))}function e(){for(var b=0;b<d.tiles.length;b++){var a=d.tiles[b];if("folder"==a.type){var e=document.createElement("div");e.classList.add("tile");e.classList.add("folder");e.setAttribute("data",a.id);e.innerHTML=Locale.getTranslation(a.description);e.addEventListener("click",c);k.appendChild(e)}else e=document.createElement("div"),e.classList.add("tile"),e.classList.add("piece"),e.setAttribute("data",a.id),e.innerHTML=Locale.getTranslation(a.description),
e.addEventListener("click",f),k.appendChild(e),a.hasOwnProperty("data")}}var d={},b="",k=null;return{initialize:function(c){k=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(d=window.catalogSnapshot);parseInt(c.p);b=Array.from(new Set((c.q||"").split(",")));a()},draw:function(){},getPath:function(){return"catalog.html"}}}(),Header=function(){var a=null,c=null,f=null;return{initialize:function(){(function(){var a=function(){var a=window.navigator.userAgent,b=window.navigator.platform,
c=["Win32","Win64","Windows","WinCE"],e=["iPhone","iPad","iPod"],f="unknown";-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(b)?f="OSX":-1!==e.indexOf(b)?f="iOS":-1!==c.indexOf(b)?f="Windows":/Android/.test(a)?f="Android":/Linux/.test(b)&&(f="Linux");return f}();"Android"!==a&&"iOS"!==a||("standalone"in navigator?navigator.standalone:window.matchMedia("(display-mode: standalone)").matches||40>screen.height-document.documentElement.clientHeight)||document.querySelector("div#header > div#controls > div.control#homescreen").addEventListener("click",
function(){})})();(function(){function e(){window.location=App.getPagePath(AboutPage)}a=document.querySelector("div#header > div#controls > div.control#pdf");a.addEventListener("click",function(){window.location=App.getPagePath(PDFPage)});c=document.querySelector("div#header > div#controls > div.control#share");c.addEventListener("click",function(){window.location=App.getPagePath(SharePage)});f=document.querySelector("div#header > div#controls > div.control#open");f.addEventListener("click",function(){window.location=
App.getPagePath(CatalogPage)});document.querySelector("div#header > div#title  > div#text").addEventListener("click",e);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",e)})();document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},highlight:function(e){a.classList.remove("highlighted");c.classList.remove("highlighted");f.classList.remove("highlighted");e===PDFPage?a.classList.add("highlighted"):e===SharePage?c.classList.add("highlighted"):
e===CatalogPage&&f.classList.add("highlighted")}}}(),IndexPage=function(){var a=null,c=0,f=function(){function d(b){b=b.target.id;a.getData();if("pre"===b){var d=a.getPreBar(c);b=a.getTotalVerticals()-1;null!==d&&(b=d.first);window.location=window.location.pathname+"?p="+a.getData().id+"&v="+b}else"next"===b?(d=a.getNextBar(c),b=0,null!==d&&(b=d.first),window.location=window.location.pathname+"?p="+a.getData().id+"&v="+b):"reload"===b&&(window.location=window.location.pathname+"?p="+a.getData().id+
"&v=0")}return{initialize:function(){for(var b=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),a=0;a<b.length;a++)b[a].addEventListener("click",d)},enableControls:function(){for(var b=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),a=0;a<b.length;a++)b[a].classList.remove("disabled")}}}(),e=function(){function d(b){var a=b.clientX,c=b.clientY;"ontouchstart"in window&&(a=b.touches[0].clientX,
c=b.touches[0].clientY);f(a,c)}function b(b){b=null;for(var d=document.querySelectorAll("body > div#container > div#notes > div.note"),f=0;f<d.length;f++)if(d[f].classList.contains("selected")){b=d[f];break}if(null!==b){b.classList.remove("selected");StringInstrumentSimulator.stop();var d=a.getBar(c),f=c-d.first,g=d.verticals[f],g=Array.from(g.notes.keys());"playAllNotesAndMoveNext"!==b.id&&"muteAndMoveNext"!==b.id?(g=[parseInt(b.getAttribute("value"))],n.changeNotesColor(f,g,"green"),n.changeNotesSize(f,
g,1)):(n.changeNotesColor(f,g,"black"),n.changeNotesSize(f,g,1),c+=1,b=!1,c>=d.first+d.verticals.length&&(b=!0),c>=a.getTotalVerticals()&&(c=0),b?e.firstDraw():(f+=1,g=d.verticals[f],g=Array.from(g.notes.keys()),n.changeNotesColor(f,g,"green"),n.changeNotesSize(f,g,1),h()))}}function f(b,d){for(var e=null,f=document.querySelectorAll("body > div#container > div#notes > div.note"),g=0;g<f.length;g++){var m=f[g].getBoundingClientRect();if(b>=m.left&&b<=m.right&&d>=m.top&&d<=m.bottom){e=f[g];break}}if(null!==
e){for(;!e.classList.contains("note");)e=e.parentNode;e.classList.add("selected");var g=a.getBar(c),f=c-g.first,m=g.verticals[f],k=[],h=[];if("playAllNotesAndMoveNext"===e.id)for(g=0;g<m.notes.length;g++)k.push(Note.getNoteFrequency(m.notes[g])),h.push(g);else if("muteAndMoveNext"===e.id)for(g=0;g<m.notes.length;g++)k.push(0),h.push(g);else e=parseInt(e.getAttribute("value")),k.push(Note.getNoteFrequency(m.notes[e])),h.push(e);"r"===m.duration.substr(-1)?StringInstrumentSimulator.play([0]):StringInstrumentSimulator.play(k);
n.changeNotesColor(f,h,"red");n.changeNotesSize(f,h,1.3)}}function h(){for(var b=document.querySelectorAll("body > div#container > div#notes > div.note"),d=0;d<b.length;d++)"playAllNotesAndMoveNext"!==b[d].id&&"muteAndMoveNext"!==b[d].id&&b[d].parentNode.removeChild(b[d]);var b=document.querySelector("body > div#container > div#notes"),d=a.getBar(c),e=d.verticals[c-d.first];if("r"!==e.duration.substr(-1))for(d=e.notes.length-1;0<=d;d--){var f=document.createElement("div");f.classList.add("note");
f.setAttribute("value",""+d);var k=f,h;h=Note.getNoteDetail(e.notes[d]);var l=""===h.accidental?"":"withAccidental";h=('<div class="natural YYY">'+h.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+h.octave+"</div>").replace("XXX",""===h.accidental?"hidden":h.accidental).replace("YYY",l).replace("ZZZ",l);k.innerHTML=h;b.appendChild(f)}}function l(){n.display();h()}var n=null;return{initialize:function(){var a="mousedown",c="mouseup";"ontouchstart"in window&&(a="touchstart",
c="touchend");window.addEventListener(a,d);window.addEventListener(c,b);n=new MusicPlayer(document.querySelector("body > div#container > div#music > div#sheet"))},playNoteAtPosition:f,reDraw:l,firstDraw:function(){n.setPiece(a);n.setFocus(c);l();var b=a.getBar(c),d=c-b.first;n.changeNotesColor(d,Array.from(b.verticals[d].notes.keys()),"green");document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getTranslation(a.getData().descriptions)}}}();return{initialize:function(d){function b(b){c>=
a.getTotalVerticals()&&(c=0);e.firstDraw();f.enableControls();null!==b&&e.playNoteAtPosition(b.x,b.y);sessionStorage.lastPieceId=a.getData().id}var k=d.p||"default";c=parseInt(d.v)||0;var h=null;"unhandledEvent"in d&&d.lastPage===App.getPagePath(IndexPage)&&(h=d.unhandledEvent);e.initialize();f.initialize();a=MusicStorageManager.getPiece(k);null!==a?b(h):(LoadingIconManager.show(),d=document.createElement("script"),d.src=App.getPiecesPath()+k+".js",d.onload=function(){a=Piece.createFromObject(window.dynamicJSData["pieces:"+
k]);MusicStorageManager.setPiece(a);b(h);LoadingIconManager.hide()},d.onerror=function(){window.location=App.getPagePath(CatalogPage)},document.querySelectorAll("head")[0].appendChild(d))},draw:function(){null!==a&&e.reDraw()},getPath:function(){return"index.html"}}}(),LoadingIconManager=function(){var a=0,c=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){110<(new Date).getTime()-a&&c.classList.remove("hidden")},100)},hide:function(){c.classList.add("hidden");
a=(new Date).getTime()}}}(),Locale=function(){function a(){if("language"in localStorage&&0<=e.indexOf(localStorage.language))d=localStorage.language;else{var b=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,b=b.toLowerCase();d=0<=e.indexOf(b)?b:"en"}}function c(b,a){var c;void 0===a&&(a=d);c=a in b?b[a]:b.en;for(var e=2;e<arguments.length;e++)c=c.replace("{"+(e-1)+"}",arguments[e]);return c}function f(b,a){if(null===b)return"";var d=b.getData().descriptions,
c=d.en;d.hasOwnProperty(a)&&(c=d[a]);return c}var e=["en","zh-cn"],d="en",b={en:"HeliMusic","zh-cn":"\u55e8\u4e50"},k={en:"Cello","zh-cn":"\u5927\u63d0\u7434"},h={en:"More resources from {1}","zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 {1}"},l={en:"Cannot load piece {1} from {2}. Please choose a new one.","zh-cn":"\u65e0\u6cd5\u4ece{2}\u4e0b\u8f7d\u66f2\u76ee{1}\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},n={en:"Share <b>{1}</b> to your friends using buttons above or your browser's sharing functions!",
"zh-cn":"\u4f7f\u7528\u4e0a\u9762\u7684\u6309\u94ae\u6216\u8005\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd\u628a{1}\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\uff01"};a();return{checkLanguage:a,getProjectName:function(a){return c(b,a)},getApplicationTitle:function(b){return c(k,b)},getPrintFooter:function(b){return c(h,b,window.location.hostname)},getTranslation:c,getPieceLoadingFailureNotice:function(b,a){return c(l,a,b,App.getPiecesPath())},getSharingTitle:function(b,a){return c(n,a,f(b))},
getPieceDescription:f}}();
function MusicPlayer(a){function c(b){for(var a=b.first,d=[],c=0;c<b.verticals.length;c++){for(var f=[],g=0;g<b.verticals[c].notes.length;g++)f.push({color:"black",size:"1.0"});d.push(f)}return{isOnBar:function(b){return a===b.first},changeNotesSize:function(b,a,c){for(var e=0;e<a.length;e++)d[b][a[e]].size=c},changeNotesColor:function(b,a,c){for(var e=0;e<a.length;e++)d[b][a[e]].color=c},drawAllOrnaments:function(){for(var b=0<=navigator.userAgent.toLowerCase().indexOf("firefox"),a=0;a<d.length;a++)for(var c=
0;c<d[a].length;c++){if("1.0"!==d[a][c].size&&!b){var f=e(a,[c]);f[0].style.transformOrigin="50% 50%";f[0].style.transform="scale("+d[a][c].size+")"}"black"!==d[a][c].color&&(f=e(a,[c]),f[0].setAttribute("fill",d[a][c].color))}}}}function f(){b.innerHTML="";var a=new Vex.Flow.Renderer(b,Vex.Flow.Renderer.Backends.SVG);context=a.getContext();a.resize(b.clientWidth,b.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function e(b,a){for(var d=document.querySelectorAll("#vf-"+
h[b].attrs.id+" g.vf-notehead path"),c=[],e=0;e<a.length;e++)c.push(d[a[e]]);return c}function d(b){var a=k.getBar(b);return b-a.first}var b=a,k=null,h=[],l=0,n=null;return{setPiece:function(b){k=b;l=0},setFocus:function(b){l=b},display:function(){var b=f(),a=new Vex.Flow.Stave(4,64,b.width-8),d=k.getBar(l);a.addClef(d.clef).addTimeSignature(d.time).addKeySignature(VFUtility.toVFKeySignature(d.key));a.setMeasure(k.getData().bars.indexOf(d)+1);a.setContext(b).draw();h=[];for(var e={},y=0;y<d.verticals.length;y++)h.push(VFUtility.prepareStaveNote(d.key,
d.clef,d.verticals[y],e));e=Vex.Flow.Beam.generateBeams(h);Vex.Flow.Formatter.FormatAndDraw(b,a,h);e.forEach(function(a){a.setContext(b).draw()});null!==n&&n.isOnBar(d)?n.drawAllOrnaments():n=new c(d)},changeNotesSize:function(b,a,c){c=void 0===c?"1.0":c;if(!(0<=navigator.userAgent.toLowerCase().indexOf("firefox"))){b=d(b);for(var f=e(b,a),g=0;g<f.length;g++)f[g].style.transformOrigin="50% 50%",f[g].style.transform="scale("+c+")";n.changeNotesSize(b,a,c)}},changeNotesColor:function(b,a,c){c=void 0===
c?"black":c;b=d(b);for(var f=e(b,a),g=0;g<f.length;g++)f[g].setAttribute("fill",c);n.changeNotesColor(b,a,c)}}}var MusicStorageManager=function(){return{getPiece:function(a){"default"===a&&(a=Locale.getApplicationTitle("en")+a);a=localStorage.getItem("_piece_"+a);return null===a?null:Piece.createFromString(a)},setPiece:function(a){a=a.getData();var c="_piece_"+a.id;"default"===a.id&&(c="_piece_"+Locale.getApplicationTitle("en")+a.id);localStorage.setItem(c,JSON.stringify(a))}}}();
function MusicViewer(a){function c(){d.innerHTML="";var b=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===d.tagName.toUpperCase()&&(b=Vex.Flow.Renderer.Backends.CANVAS);b=new Vex.Flow.Renderer(d,b);l=b.getContext();b.resize(d.clientWidth,d.clientHeight);l.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return l}function f(a,c,e){c=void 0===c?0:c;e=void 0===e?0:e;var f={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};c=(0===c?d.clientWidth:c)-8;var k=0===e?d.clientHeight:e;e=Math.floor(k/160);for(var k=40+.33*(k-160*e),g=b.getData(),m=[],l=0;l<e;l++)m.push({height:160,staves:[]});for(l=0;l<e&&a<g.bars.length;l++){for(var n=[],p="",u="",x="",q=a;q<g.bars.length;q++){var v=g.bars[q],r={clef:"",key:"",time:"",verticals:v.verticals.length,size:0};v.clef!==p&&(p=r.clef=v.clef,r.size+=25);v.key!==u&&
(u=r.key=v.key,r.size+=8*f[v.key]);v.time!==x&&(x=r.time=v.time,r.size+=14);r.size+=50*r.verticals;n.push(r)}u=0;p=g.bars.length-a;for(q=a;q<g.bars.length;q++)if(u+=n[q-a].size,u>c){p=q>a?q-a:1;break}for(q=u=0;q<p;q++)u+=n[q].size;for(q=x=0;q<p;q++)h=v=q+a,r=n[q].size/u*c,m[l].staves.push({barIndex:v,left:x+4,width:r}),x+=r;a+=p}return{rows:m,staveOffsetTop:k}}function e(a){var d=b.getData();a=0==a?d.bars.length-1:a-1;for(var c=0,e=0;e<d.bars.length;e++){for(var k=c,g=f(c),h=0;h<g.rows.length;h++)for(var l=
0;l<g.rows[h].length;l++){if(a===g.rows[h][l].barIndex)return 0==h+l?k:c;c=g.rows[h][l].barIndex}c+=1}}var d=a,b=null,k=0,h=0,l=null,n=null;c();return{setPiece:function(a){b=a},setFirstBar:function(b){k=b},display:function(){c();var a=b.getData(),d=f(k),e=d.staveOffsetTop;n=d;for(var h=0;h<d.rows.length;h++){for(var y="",B="",C="",w=0;w<d.rows[h].staves.length;w++){var t=a.bars[d.rows[h].staves[w].barIndex],A=new Vex.Flow.Stave(d.rows[h].staves[w].left,e,d.rows[h].staves[w].width);0==w&&A.setMeasure(d.rows[h].staves[w].barIndex+
1);t.clef!==y&&(y=t.clef,A.addClef(t.clef));t.key!==B&&(B=t.key,A.addKeySignature(VFUtility.toVFKeySignature(t.key)));t.time!==C&&(C=t.time,A.addTimeSignature(t.time));A.setContext(l).draw();for(var u=[],x={},q=0;q<t.verticals.length;q++)u.push(VFUtility.prepareStaveNote(t.key,t.clef,t.verticals[q],x));t=Vex.Flow.Beam.generateBeams(u);Vex.Flow.Formatter.FormatAndDraw(l,A,u);t.forEach(function(b){b.setContext(l).draw()})}e+=d.rows[h].height}},getLastBar:function(){return h},getCurrentLayout:function(){return n},
getFirstBarInPreviousPage:e,getFirstBarInLastPage:function(){return e(0)}}}
var Note=function(){function a(a){var b={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};a=c(a);var d=a.natural+a.accidental;return b.hasOwnProperty(d)?(b=b[d],b[1]+12*(a.octave-b[0])):-1}function c(a){var b={natural:"",octave:-1,accidental:""};if(0>=a.length)return b;b.natural=a[0];b.octave=parseInt(a.substring(a.length-1,a.length));b.accidental="";b.accidentalASCII="";2<a.length&&(1==a.indexOf("\u266d")?(b.accidental="\u266d",b.accidentalASCII="b"):1==a.indexOf("\u266f")?(b.accidental="\u266f",b.accidentalASCII="#"):1==a.indexOf("\ud834\udd2b")?
(b.accidental="\ud834\udd2b",b.accidentalASCII="bb"):1==a.indexOf("\ud834\udd2a")&&(b.accidental="\ud834\udd2a",b.accidentalASCII="##"));return b}function f(a,b){var c=e[a],d="";"\u266d"==c.sharpflat&&"BEADGCF".indexOf(b)<c.amount?d="\u266d":"\u266f"==c.sharpflat&&"FCGDAEB".indexOf(b)<c.amount&&(d="\u266f");return d}var e={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:a,getNoteFrequency:function(c){c=a(c);"DoubleBass"===Locale.getApplicationTitle("en")&&
(c-=12);return 0>c?0:440*Math.pow(Math.pow(2,1/12),c-49)},getNoteDetail:c,getDefaultAccidental:f,getDefaultAccidentalASCII:function(a,b){return f(a,b).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(a){a=a.substring(0,1);return 0<="GAB".indexOf(a)?a+"3":a+"4"}}}(),PDFConverter=function(a,c){function f(){var a=e.querySelectorAll("div.page");k+=1;k>=a.length?d(b):(b.addPage(),b.addHTML(a[k],f))}var e=a,d=c,b=null,k=0;return{convert:function(){var a=e.querySelectorAll("div.page");
0>=a.length?d(null):(b=new jsPDF("p","pt","a4"),k=0,b.addHTML(a[0],f))}}},PDFPage=function(){function a(){LoadingIconManager.show();var a=document.querySelector("body > div#pdfRenderer");a.style.display="block";var c=new PDFRenderer(a),d=MusicStorageManager.getPiece(App.getDefaultPieceId());null===d?alert("Cannot show PDF"):(c.render(d),(new PDFConverter(a,function(b){a.style.display="none";window.top.pdfdata=b.output("arraybuffer");document.querySelector("body > div#container > div#wrapper").innerHTML=
'<embed src="/pdf.js/viewer.html">'})).convert(d))}var c=function(){return{onComplete:function(){LoadingIconManager.hide()},onerror:onerror}}();return{initialize:function(f){App.replaceURL(App.getPiecePath());window.top.PDFJS=c;LoadingIconManager.show();document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()});a()},draw:function(){},getPath:function(){return"pdf.html"}}}(),PDFRenderer=function(a){return{render:function(c){a.innerHTML=
"";for(var f=-1,e=-1,d=0;8>d;d++){e+=1;f+=1;if(f>=c.getData().bars.length)break;var b;b=e;var k=document.createElement("div");k.classList.add("page");k.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===b?"":"hide");a.appendChild(k);b=k;b.querySelector("div.title").innerHTML=Locale.getTranslation(c.getData().descriptions);b.querySelector("div.footer").innerHTML=Locale.getPrintFooter();b=new MusicViewer(b.querySelector("canvas.music"));
b.setPiece(c);b.setFirstBar(f);b.display();f=b.getLastBar()}}}},Piece=function(){function a(a){function c(a){for(var b=0;b<e.bars.length;b++)if(e.bars[b].first<=a&&a<e.bars[b].first+e.bars[b].verticals.length)return e.bars[b];return null}var e=null,e="string"===typeof a?JSON.parse(raw):a;return{getData:function(){return e},getBar:c,getPreBar:function(a){a=c(a);return null===a?null:c(a.first-1)},getNextBar:function(a){a=c(a);return null===a?null:c(a.first+a.verticals.length)},getTotalVerticals:function(){var a=
e.bars[e.bars.length-1];return a.first+a.verticals.length}}}return{createFromObject:function(c){return new a(c)},createFromString:function(c){return new a(c)}}}(),SharePage=function(){function a(a){var d=a.target.id;d in f?(a=f[d].replace("URL",encodeURIComponent(c.url)).replace("DESCRIPTION",encodeURIComponent(c.description)).replace("VIA","Metronome"),window.open(a,"_blank")):"mail"==d?(a="mailto:?subject="+encodeURIComponent(c.description)+"&body="+encodeURIComponent(c.url),window.open(a,"_blank")):
"link"==a.target.id&&(a=document.querySelector("body > input#copy"),a.classList.remove("hidden"),a.value=c.url,a.select(),document.execCommand("copy"),a.classList.add("hidden"));window.location=App.getPiecePath()}var c={url:"",description:""},f={qq:"http://v.t.qq.com/share/share.php?url=URL&title=DESCRIPTION",weibo:"http://service.weibo.com/share/share.php?url=URL&title=DESCRIPTION",qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=URL&title=DESCRIPTION",facebook:"https://www.facebook.com/sharer/sharer.php?u=URL&t=DESCRIPTION",
twitter:"https://twitter.com/intent/tweet?text=DESCRIPTION&url=URL&via=VIA"};return{initialize:function(e){e=App.getDefaultPieceId();e=MusicStorageManager.getPiece(e);document.querySelector("body > div#container > div#share > div#title").innerHTML=Locale.getSharingTitle(e);App.replaceURL(App.getPiecePath());c.url=App.getCanonicalPagePath(IndexPage)+"?p="+e.getData().id;c.description=Locale.getPieceDescription(e)+", "+Locale.getApplicationTitle()+", "+Locale.getProjectName();e=document.querySelectorAll("body > div#container > div#share > div#services > div.service");
for(var d=0;d<e.length;d++)e[d].addEventListener("click",a);document.querySelector("body > div#container > div#controls > div#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"share.html"}}}(),StringInstrumentSimulator=function(){function a(){if(null!=c)return!0;if("AudioContext"in window)c=new AudioContext;else if("webkitAudioContext"in window)c=new webkitAudioContext;else return c=null,!1;f=c.createGain();f.gain.value=0;f.connect(c.destination);
return!0}var c=null,f=null,e=[];return{play:function(d){a();for(var b=0;b<d.length;b++)if(!(0>=d[b])){var k=c.createOscillator();k.frequency.value=d[b];var h=k,l=Math.PI,n=new Float32Array(12),g=new Float32Array(12),m=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],l=[0,0,l/2,0,l/2,0,l/2,0,l/2,0,l/2,0];n[0]=0;g[0]=0;for(var p=1;12>p;p++)n[p]=m[p]*m[0]*Math.cos(l[p]),g[p]=m[p]*m[0]*Math.sin(l[p]);n=c.createPeriodicWave(g,n);h.setPeriodicWave(n);k.connect(f);k.start(0);e.push(k)}f.gain.linearRampToValueAtTime(0,
c.currentTime);f.gain.linearRampToValueAtTime(.5,c.currentTime+.05)},stop:function(){a();f.gain.linearRampToValueAtTime(.5,c.currentTime);f.gain.linearRampToValueAtTime(0,c.currentTime+.05);setTimeout(function(){for(var a=0;a<e.length;a++){var b=e[a];b.stop(0);b.disconnect(f)}e=[]},50)},playAndStop:function(a,b,c){}}}(),VFUtility=function(){function a(a){a=Note.getNoteDetail(a);return a.natural+a.accidentalASCII+"/"+a.octave}return{toVFKeySignature:function(a){a!==a.toUpperCase()&&(a=a.toUpperCase()+
"m");return a=a.replace(Note.flat,"b").replace(Note.sharp,"#")},prepareStaveNote:function(c,f,e,d){for(var b,k,h,l=[],n=0;n<e.notes.length;n++)l.push(a(e.notes[n]));f=new Vex.Flow.StaveNote({clef:f,keys:l,duration:e.duration});if("r"!==e.duration.substr(-1))for(n=0;n<e.notes.length;n++)a:{var g=c,l=f,m=n,p=d;h=l.keys[m];var z=h.indexOf("/");b=h.substring(0,1);k=parseInt(h.substring(z+1));h=h.substring(1,z);z=b+k;k=!1;if(p.hasOwnProperty(z))if(p[z]==h)break a;else k=!0;p[z]=h;"bb"==h?l.addAccidental(m,
new Vex.Flow.Accidental("bb")):"##"==h?l.addAccidental(m,new Vex.Flow.Accidental("##")):(b=Note.getDefaultAccidentalASCII(g,b),"#"==b?"#"==h?k&&l.addAccidental(m,new Vex.Flow.Accidental("#")):"b"==h?l.addAccidental(m,new Vex.Flow.Accidental("b")):l.addAccidental(m,new Vex.Flow.Accidental("n")):"b"==b?"#"==h?l.addAccidental(m,new Vex.Flow.Accidental("#")):"b"==h?k&&l.addAccidental(m,new Vex.Flow.Accidental("b")):l.addAccidental(m,new Vex.Flow.Accidental("n")):"#"==h?l.addAccidental(m,new Vex.Flow.Accidental("#")):
"b"==h?l.addAccidental(m,new Vex.Flow.Accidental("b")):k&&l.addAccidental(m,new Vex.Flow.Accidental("n")))}c=e.duration;"dd"==c.substring(c.length-2)?f.addDotToAll().addDotToAll():(e=e.duration,"d"==e.substring(e.length-1)&&f.addDotToAll());return f}}}(),App=function(){function a(a){return d+a.getPath()}function c(){var b=window.location.href;e=0===b.indexOf(a(CatalogPage))?CatalogPage:0===b.indexOf(a(AboutPage))?AboutPage:0===b.indexOf(a(PDFPage))?PDFPage:0===b.indexOf(a(SharePage))?SharePage:IndexPage}
var f={},e=null,d="";return{initialize:function(b){b=void 0===b?{}:b;Header.initialize();(function(){d=window.location.href;for(var a=d.lastIndexOf("/"),b=["file://","http://","https://"],c=0;c<b.length;c++){var e=b[c];0===d.indexOf(e)&&(d=a<e.length?d+"/c1/":d.substring(0,a)+"/c1/")}})();(function(){for(var a=window.location.search,a=("?"===a[0]?a.substr(1):a).split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1]||"")}b.lastPage=sessionStorage.lastPage||
null;f=b})();c();Header.highlight(e);e.initialize(b);sessionStorage.setItem("lastPage",a(e));window.addEventListener("resize",function(){e.draw()})},getParams:function(){return f},getBaseURL:function(){return d},getCanonicalPagePath:function(a){return"http://helimusic.com/c1/"+a.getPath()},getPagePath:a,replaceURL:function(a){0!==d.indexOf("file://")&&window.history.replaceState("","",a)},getPiecePath:function(a){a=void 0===a?null:a;a=null===a?App.getDefaultPieceId():a.getData().id;return App.getPagePath(IndexPage)+
"?p="+a},getPiecesPath:function(){return d+"pieces/"},getDefaultPieceId:function(){var a=f,c="default";a.hasOwnProperty("p")?c=a.p:"lastPieceId"in sessionStorage&&(c=sessionStorage.lastPieceId);return c}}}();
