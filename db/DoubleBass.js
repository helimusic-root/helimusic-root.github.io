var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[a]=f.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var a=0;return $jscomp.iteratorPrototype(function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.polyfill=function(c,a,f,e){if(a){f=$jscomp.global;c=c.split(".");for(e=0;e<c.length-1;e++){var d=c[e];d in f||(f[d]={});f=f[d]}c=c[c.length-1];e=f[c];a=a(e);a!=e&&null!=a&&$jscomp.defineProperty(f,c,{configurable:!0,writable:!0,value:a})}};
$jscomp.polyfill("Array.from",function(c){return c?c:function(a,c,e){$jscomp.initSymbolIterator();c=null!=c?c:function(b){return b};var d=[],b=a[Symbol.iterator];if("function"==typeof b)for(a=b.call(a);!(b=a.next()).done;)d.push(c.call(e,b.value));else for(var b=a.length,g=0;g<b;g++)d.push(c.call(e,a[g]));return d}},"es6-impl","es3");$jscomp.makeIterator=function(c){$jscomp.initSymbolIterator();var a=c[Symbol.iterator];return a?a.call(c):$jscomp.arrayIterator(c)};
$jscomp.owns=function(c,a){return Object.prototype.hasOwnProperty.call(c,a)};
$jscomp.polyfill("WeakMap",function(c){function a(b){$jscomp.owns(b,e)||$jscomp.defineProperty(b,e,{value:{}})}function f(b){var c=Object[b];c&&(Object[b]=function(b){a(b);return c(b)})}if(function(){if(!c||!Object.seal)return!1;try{var b=Object.seal({}),a=Object.seal({}),d=new c([[b,2],[a,3]]);if(2!=d.get(b)||3!=d.get(a))return!1;d["delete"](b);d.set(a,4);return!d.has(b)&&4==d.get(a)}catch(m){return!1}}())return c;var e="$jscomp_hidden_"+Math.random().toString().substring(2);f("freeze");f("preventExtensions");
f("seal");var d=0,b=function(b){this.id_=(d+=Math.random()+1).toString();if(b){$jscomp.initSymbol();$jscomp.initSymbolIterator();b=$jscomp.makeIterator(b);for(var a;!(a=b.next()).done;)a=a.value,this.set(a[0],a[1])}};b.prototype.set=function(b,c){a(b);if(!$jscomp.owns(b,e))throw Error("WeakMap key fail: "+b);b[e][this.id_]=c;return this};b.prototype.get=function(b){return $jscomp.owns(b,e)?b[e][this.id_]:void 0};b.prototype.has=function(b){return $jscomp.owns(b,e)&&$jscomp.owns(b[e],this.id_)};b.prototype["delete"]=
function(b){return $jscomp.owns(b,e)&&$jscomp.owns(b[e],this.id_)?delete b[e][this.id_]:!1};return b},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(c){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),a=new c($jscomp.makeIterator([[b,"s"]]));if("s"!=a.get(b)||1!=a.size||a.get({x:4})||a.set({x:4},"t")!=a||2!=a.size)return!1;var d=a.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(k){return!1}}())return c;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var a=new WeakMap,f=function(a){this.data_={};this.head_=b();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}};f.prototype.set=function(b,a){var c=e(this,b);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=a:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:b,value:a},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};f.prototype["delete"]=
function(b){b=e(this,b);return b.entry&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.data_[b.id],b.entry.previous.next=b.entry.next,b.entry.next.previous=b.entry.previous,b.entry.head=null,this.size--,!0):!1};f.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=b();this.size=0};f.prototype.has=function(b){return!!e(this,b).entry};f.prototype.get=function(b){return(b=e(this,b).entry)&&b.value};f.prototype.entries=function(){return d(this,function(b){return[b.key,
b.value]})};f.prototype.keys=function(){return d(this,function(b){return b.key})};f.prototype.values=function(){return d(this,function(b){return b.value})};f.prototype.forEach=function(b,a){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,b.call(a,d[1],d[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var e=function(b,c){var d;d=c&&typeof c;"object"==d||"function"==d?a.has(c)?d=a.get(c):(d=""+ ++g,a.set(c,d)):d="p_"+c;var e=b.data_[d];if(e&&$jscomp.owns(b.data_,d))for(var k=0;k<
e.length;k++){var f=e[k];if(c!==c&&f.key!==f.key||c===f.key)return{id:d,list:e,index:k,entry:f}}return{id:d,list:e,index:-1,entry:void 0}},d=function(b,c){var a=b.head_;return $jscomp.iteratorPrototype(function(){if(a){for(;a.head!=b.head_;)a=a.previous;for(;a.next!=a.head;)return a=a.next,{done:!1,value:c(a)};a=null}return{done:!0,value:void 0}})},b=function(){var b={};return b.previous=b.next=b.head=b},g=0;return f},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(c){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),e=new c($jscomp.makeIterator([a]));if(!e.has(a)||1!=e.size||e.add(a)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var d=e.entries(),b=d.next();if(b.done||b.value[0]!=a||b.value[1]!=a)return!1;b=d.next();return b.done||b.value[0]==a||4!=b.value[0].x||b.value[1]!=b.value[0]?!1:d.next().done}catch(g){return!1}}())return c;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var a=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var c;!(c=a.next()).done;)this.add(c.value)}this.size=this.map_.size};a.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};a.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};a.prototype.clear=function(){this.map_.clear();this.size=0};a.prototype.has=function(a){return this.map_.has(a)};a.prototype.entries=
function(){return this.map_.entries()};a.prototype.values=function(){return this.map_.values()};a.prototype[Symbol.iterator]=a.prototype.values;a.prototype.forEach=function(a,c){var d=this;this.map_.forEach(function(b){return a.call(c,b,b,d)})};return a},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(c,a){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var f=0,e={next:function(){if(f<c.length){var d=f++;return{value:a(d,c[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(c){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"about.html"}}}(),AdManager=function(){(function(){for(var c=document.querySelectorAll("body > div#ad > div"),a=0;a<c.length;a++)c[a].addEventListener("click",function(){window.location="https://www.facebook.com/unicef"})})()}(),CatalogPage=function(){function c(){var a=
document.createElement("script");a.src=App.getPiecesPath()+"indexes.js";a.onload=function(){var a=window.dynamicJSData["pieces:indexes"],c=a.scales;1==b.length?a.hasOwnProperty(b[0])&&(c=a[b[0]]):1<b.length&&"scales"==b[0]&&a.scales.hasOwnProperty(b[1])&&(c=a.scales[b[1]]);d={query:b,tiles:[]};a=[];for(k in c)c.hasOwnProperty(k)&&"_"!==k.substring(0,1)&&a.push(k);a.sort(function(b,a){var d=Locale.getTranslation(c[b]._desc,"en"),e=Locale.getTranslation(c[a]._desc,"en");return d<e?-1:d>e?1:0});for(var p=
0;p<a.length;p++){var k=a[p],n=c[k];if("_"!==k.substring(0,1)){var k={id:k,description:n._desc},f=0;for(keyInNextLevel in n)n.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(f+=1);0>=f?k.type="piece":(k.type="folder",k.total=f);d.tiles.push(k)}}e()};document.querySelectorAll("head")[0].appendChild(a)}function a(b){b=b.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+b)}function f(b){window.location=App.getPagePath(IndexPage)+
"?p="+encodeURIComponent(b.target.getAttribute("data"))}function e(){for(var b=0;b<d.tiles.length;b++){var c=d.tiles[b];if("folder"==c.type){var e=document.createElement("div");e.classList.add("tile");e.classList.add("folder");e.setAttribute("data",c.id);e.innerHTML=Locale.getTranslation(c.description);e.addEventListener("click",a);g.appendChild(e)}else e=document.createElement("div"),e.classList.add("tile"),e.classList.add("piece"),e.setAttribute("data",c.id),e.innerHTML=Locale.getTranslation(c.description),
e.addEventListener("click",f),g.appendChild(e),c.hasOwnProperty("data")}}var d={},b="",g=null;return{initialize:function(a){g=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(d=window.catalogSnapshot);parseInt(a.p);b=Array.from(new Set((a.q||"").split(",")));c()},draw:function(){},getPath:function(){return"catalog.html"}}}(),Header=function(){var c=null,a=null,f=null;return{initialize:function(){(function(){var a;a=window.navigator.userAgent;var c=window.navigator.platform,
b=["Win32","Win64","Windows","WinCE"],f=["iPhone","iPad","iPod"],h="unknown";-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(c)?h="OSX":-1!==f.indexOf(c)?h="iOS":-1!==b.indexOf(c)?h="Windows":/Android/.test(a)?h="Android":/Linux/.test(c)&&(h="Linux");a=h;"Android"!==a&&"iOS"!==a||"standalone"in navigator||window.matchMedia("(display-mode: standalone)")})();(function(){function e(){window.location=App.getPagePath(AboutPage)}c=document.querySelector("div#header > div#controls > div.control#pdf");
c.addEventListener("click",function(){window.location=App.getPagePath(PDFPage)});a=document.querySelector("div#header > div#controls > div.control#share");a.addEventListener("click",function(){window.location=App.getPagePath(SharePage)});f=document.querySelector("div#header > div#controls > div.control#open");f.addEventListener("click",function(){window.location=App.getPagePath(CatalogPage)});document.querySelector("div#header > div#title  > div#text").addEventListener("click",e);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",
e)})();document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},highlight:function(e){c.classList.remove("highlighted");a.classList.remove("highlighted");f.classList.remove("highlighted");e===PDFPage?c.classList.add("highlighted"):e===SharePage?a.classList.add("highlighted"):e===CatalogPage&&f.classList.add("highlighted")}}}(),IndexPage=function(){var c=null,a=0,f=function(){function d(b){b=b.target.id;c.getData();if("pre"===b){var d=c.getPreBar(a);b=c.getTotalVerticals()-
1;null!==d&&(b=d.first);window.location=window.location.pathname+"?p="+c.getData().id+"&v="+b}else"next"===b?(d=c.getNextBar(a),b=0,null!==d&&(b=d.first),window.location=window.location.pathname+"?p="+c.getData().id+"&v="+b):"reload"===b&&(window.location=window.location.pathname+"?p="+c.getData().id+"&v=0")}return{initialize:function(){for(var b=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),a=0;a<b.length;a++)b[a].addEventListener("click",
d)},enableControls:function(){for(var b=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),a=0;a<b.length;a++)b[a].classList.remove("disabled")}}}(),e=function(){function d(b){var a=b.clientX,c=b.clientY;"ontouchstart"in window&&(a=b.touches[0].clientX,c=b.touches[0].clientY);f(a,c)}function b(b){b=null;for(var d=document.querySelectorAll("body > div#container > div#notes > div.note"),n=0;n<d.length;n++)if(d[n].classList.contains("selected")){b=
d[n];break}if(null!==b){b.classList.remove("selected");StringInstrumentSimulator.stop();var d=c.getBar(a),n=a-d.first,f=d.verticals[n],f=Array.from(f.notes.keys());"playAllNotesAndMoveNext"!==b.id&&"muteAndMoveNext"!==b.id?(f=[parseInt(b.getAttribute("value"))],m.changeNotesColor(n,f,"green"),m.changeNotesSize(n,f,1)):(m.changeNotesColor(n,f,"black"),m.changeNotesSize(n,f,1),a+=1,b=!1,a>=d.first+d.verticals.length&&(b=!0),a>=c.getTotalVerticals()&&(a=0),b?e.firstDraw():(n+=1,f=d.verticals[n],f=Array.from(f.notes.keys()),
m.changeNotesColor(n,f,"green"),m.changeNotesSize(n,f,1),h()))}}function f(b,d){for(var e=null,f=document.querySelectorAll("body > div#container > div#notes > div.note"),k=0;k<f.length;k++){var p=f[k].getBoundingClientRect();if(b>=p.left&&b<=p.right&&d>=p.top&&d<=p.bottom){e=f[k];break}}if(null!==e){for(;!e.classList.contains("note");)e=e.parentNode;e.classList.add("selected");var k=c.getBar(a),f=a-k.first,p=k.verticals[f],g=[],h=[];if("playAllNotesAndMoveNext"===e.id)for(k=0;k<p.notes.length;k++)g.push(Note.getNoteFrequency(p.notes[k])),
h.push(k);else if("muteAndMoveNext"===e.id)for(k=0;k<p.notes.length;k++)g.push(0),h.push(k);else e=parseInt(e.getAttribute("value")),g.push(Note.getNoteFrequency(p.notes[e])),h.push(e);"r"===p.duration.substr(-1)?StringInstrumentSimulator.play([0]):StringInstrumentSimulator.play(g);m.changeNotesColor(f,h,"red");m.changeNotesSize(f,h,1.3)}}function h(){for(var b=document.querySelectorAll("body > div#container > div#notes > div.note"),d=0;d<b.length;d++)"playAllNotesAndMoveNext"!==b[d].id&&"muteAndMoveNext"!==
b[d].id&&b[d].parentNode.removeChild(b[d]);var b=document.querySelector("body > div#container > div#notes"),d=c.getBar(a),e=d.verticals[a-d.first];if("r"!==e.duration.substr(-1))for(d=e.notes.length-1;0<=d;d--){var f=document.createElement("div");f.classList.add("note");f.setAttribute("value",""+d);var g=f,h;h=Note.getNoteDetail(e.notes[d]);var l=""===h.accidental?"":"withAccidental";h=('<div class="natural YYY">'+h.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+h.octave+
"</div>").replace("XXX",""===h.accidental?"hidden":h.accidental).replace("YYY",l).replace("ZZZ",l);g.innerHTML=h;b.appendChild(f)}}function l(){m.display();h()}var m=null;return{initialize:function(){var a="mousedown",c="mouseup";"ontouchstart"in window&&(a="touchstart",c="touchend");window.addEventListener(a,d);window.addEventListener(c,b);m=new MusicPlayer(document.querySelector("body > div#container > div#music > div#sheet"))},playNoteAtPosition:f,reDraw:l,firstDraw:function(){m.setPiece(c);m.setFocus(a);
l();var b=c.getBar(a),d=a-b.first;m.changeNotesColor(d,Array.from(b.verticals[d].notes.keys()),"green");document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getTranslation(c.getData().descriptions)}}}();return{initialize:function(d){function b(b){a>=c.getTotalVerticals()&&(a=0);e.firstDraw();f.enableControls();null!==b&&e.playNoteAtPosition(b.x,b.y);sessionStorage.lastPieceId=c.getData().id}var g=d.p||"default";a=parseInt(d.v)||0;var h=null;"unhandledEvent"in
d&&d.lastPage===App.getPagePath(IndexPage)&&(h=d.unhandledEvent);e.initialize();f.initialize();c=MusicStorageManager.getPiece(g);null!==c?b(h):(LoadingIconManager.show(),d=document.createElement("script"),d.src=App.getPiecesPath()+g.substring(0,1)+"/"+g.substring(1,2)+"/"+g+".js",d.onload=function(){c=Piece.createFromObject(window.dynamicJSData["pieces:"+g]);MusicStorageManager.setPiece(c);b(h);LoadingIconManager.hide()},d.onerror=function(){window.location=App.getPagePath(CatalogPage)},document.querySelectorAll("head")[0].appendChild(d))},
draw:function(){null!==c&&e.reDraw()},getPath:function(){return"index.html"}}}(),LoadingIconManager=function(){var c=0,a=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){110<(new Date).getTime()-c&&a.classList.remove("hidden")},100)},hide:function(){a.classList.add("hidden");c=(new Date).getTime()}}}(),Locale=function(){function c(){if("language"in localStorage&&0<=e.indexOf(localStorage.language))d=localStorage.language;else{var b=navigator.languages&&navigator.languages[0]||
navigator.language||navigator.userLanguage,b=b.toLowerCase();d=0<=e.indexOf(b)?b:"en"}}function a(b,a){var c;void 0===a&&(a=d);c=a in b?b[a]:b.en;for(var e=2;e<arguments.length;e++)c=c.replace("{"+(e-1)+"}",arguments[e]);return c}function f(b,a){if(null===b)return"";var c=b.getData().descriptions,d=c.en;c.hasOwnProperty(a)&&(d=c[a]);return d}var e=["en","zh-cn"],d="en",b={en:"HeliMusic","zh-cn":"\u55e8\u4e50"},g={en:"DoubleBass","zh-cn":"\u4f4e\u97f3\u63d0\u7434"},h={en:"More resources from {1}",
"zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 {1}"},l={en:"Cannot load piece {1} from {2}. Please choose a new one.","zh-cn":"\u65e0\u6cd5\u4ece{2}\u4e0b\u8f7d\u66f2\u76ee{1}\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},m={en:"Share <b>{1}</b> to your friends using buttons above or your browser's sharing functions!","zh-cn":"\u4f7f\u7528\u4e0a\u9762\u7684\u6309\u94ae\u6216\u8005\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd\u628a{1}\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\uff01"};c();return{checkLanguage:c,
getProjectName:function(c){return a(b,c)},getApplicationTitle:function(b){return a(g,b)},getPrintFooter:function(b){return a(h,b,window.location.hostname)},getTranslation:a,getPieceLoadingFailureNotice:function(b,c){return a(l,c,b,App.getPiecesPath())},getSharingTitle:function(b,c){return a(m,c,f(b))},getPieceDescription:f}}();
function MusicPlayer(c){function a(b){for(var a=b.first,c=[],d=0;d<b.verticals.length;d++){for(var f=[],g=0;g<b.verticals[d].notes.length;g++)f.push({color:"black",size:"1.0"});c.push(f)}return{isOnBar:function(b){return a===b.first},changeNotesSize:function(b,a,d){for(var e=0;e<a.length;e++)c[b][a[e]].size=d},changeNotesColor:function(b,a,d){for(var e=0;e<a.length;e++)c[b][a[e]].color=d},drawAllOrnaments:function(){for(var b=0<=navigator.userAgent.toLowerCase().indexOf("firefox"),a=0;a<c.length;a++)for(var d=
0;d<c[a].length;d++){if("1.0"!==c[a][d].size&&!b){var f=e(a,[d]);f[0].style.transformOrigin="50% 50%";f[0].style.transform="scale("+c[a][d].size+")"}"black"!==c[a][d].color&&(f=e(a,[d]),f[0].setAttribute("fill",c[a][d].color))}}}}function f(){b.innerHTML="";var a=new Vex.Flow.Renderer(b,Vex.Flow.Renderer.Backends.SVG);context=a.getContext();a.resize(b.clientWidth,b.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function e(b,a){for(var c=document.querySelectorAll("#vf-"+
h[b].attrs.id+" g.vf-notehead path"),d=[],e=0;e<a.length;e++)d.push(c[a[e]]);return d}function d(b){var a=g.getBar(b);return b-a.first}var b=c,g=null,h=[],l=0,m=null;return{setPiece:function(b){g=b;l=0},setFocus:function(b){l=b},display:function(){var b=f(),c=new Vex.Flow.Stave(4,64,b.width-8),d=g.getBar(l);c.addClef(d.clef).addTimeSignature(d.time).addKeySignature(VFUtility.toVFKeySignature(d.key));c.setMeasure(g.getData().bars.indexOf(d)+1);c.setContext(b).draw();h=[];for(var e={},y=0;y<d.verticals.length;y++)h.push(VFUtility.prepareStaveNote(d.key,
d.clef,d.verticals[y],e));e=Vex.Flow.Beam.generateBeams(h);Vex.Flow.Formatter.FormatAndDraw(b,c,h);e.forEach(function(a){a.setContext(b).draw()});null!==m&&m.isOnBar(d)?m.drawAllOrnaments():m=new a(d)},changeNotesSize:function(b,a,c){c=void 0===c?"1.0":c;if(!(0<=navigator.userAgent.toLowerCase().indexOf("firefox"))){b=d(b);for(var f=e(b,a),g=0;g<f.length;g++)f[g].style.transformOrigin="50% 50%",f[g].style.transform="scale("+c+")";m.changeNotesSize(b,a,c)}},changeNotesColor:function(b,a,c){c=void 0===
c?"black":c;b=d(b);for(var f=e(b,a),g=0;g<f.length;g++)f[g].setAttribute("fill",c);m.changeNotesColor(b,a,c)}}}var MusicStorageManager=function(){return{getPiece:function(c){"default"===c&&(c=Locale.getApplicationTitle("en")+c);c=localStorage.getItem("_piece_"+c);return null===c?null:Piece.createFromString(c)},setPiece:function(c){c=c.getData();var a="_piece_"+c.id;"default"===c.id&&(a="_piece_"+Locale.getApplicationTitle("en")+c.id);localStorage.setItem(a,JSON.stringify(c))}}}();
function MusicViewer(c){function a(){d.innerHTML="";var b=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===d.tagName.toUpperCase()&&(b=Vex.Flow.Renderer.Backends.CANVAS);b=new Vex.Flow.Renderer(d,b);l=b.getContext();b.resize(d.clientWidth,d.clientHeight);l.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return l}function f(a,c,e){c=void 0===c?0:c;e=void 0===e?0:e;var f={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};c=(0===c?d.clientWidth:c)-8;var g=0===e?d.clientHeight:e;e=Math.floor(g/160);for(var g=40+.33*(g-160*e),k=b.getData(),l=[],m=0;m<e;m++)l.push({height:160,staves:[]});for(m=0;m<e&&a<k.bars.length;m++){for(var n=[],p="",u="",x="",q=a;q<k.bars.length;q++){var v=k.bars[q],r={clef:"",key:"",time:"",verticals:v.verticals.length,size:0};v.clef!==p&&(p=r.clef=v.clef,r.size+=25);v.key!==u&&
(u=r.key=v.key,r.size+=8*f[v.key]);v.time!==x&&(x=r.time=v.time,r.size+=14);r.size+=50*r.verticals;n.push(r)}u=0;p=k.bars.length-a;for(q=a;q<k.bars.length;q++)if(u+=n[q-a].size,u>c){p=q>a?q-a:1;break}for(q=u=0;q<p;q++)u+=n[q].size;for(q=x=0;q<p;q++)h=v=q+a,r=n[q].size/u*c,l[m].staves.push({barIndex:v,left:x+4,width:r}),x+=r;a+=p}return{rows:l,staveOffsetTop:g}}function e(a){var c=b.getData();a=0==a?c.bars.length-1:a-1;for(var d=0,e=0;e<c.bars.length;e++){for(var g=d,h=f(d),l=0;l<h.rows.length;l++)for(var m=
0;m<h.rows[l].length;m++){if(a===h.rows[l][m].barIndex)return 0==l+m?g:d;d=h.rows[l][m].barIndex}d+=1}}var d=c,b=null,g=0,h=0,l=null,m=null;a();return{setPiece:function(a){b=a},setFirstBar:function(b){g=b},display:function(){a();var c=b.getData(),d=f(g),e=d.staveOffsetTop;m=d;for(var h=0;h<d.rows.length;h++){for(var y="",B="",C="",w=0;w<d.rows[h].staves.length;w++){var t=c.bars[d.rows[h].staves[w].barIndex],A=new Vex.Flow.Stave(d.rows[h].staves[w].left,e,d.rows[h].staves[w].width);0==w&&A.setMeasure(d.rows[h].staves[w].barIndex+
1);t.clef!==y&&(y=t.clef,A.addClef(t.clef));t.key!==B&&(B=t.key,A.addKeySignature(VFUtility.toVFKeySignature(t.key)));t.time!==C&&(C=t.time,A.addTimeSignature(t.time));A.setContext(l).draw();for(var u=[],x={},q=0;q<t.verticals.length;q++)u.push(VFUtility.prepareStaveNote(t.key,t.clef,t.verticals[q],x));t=Vex.Flow.Beam.generateBeams(u);Vex.Flow.Formatter.FormatAndDraw(l,A,u);t.forEach(function(b){b.setContext(l).draw()})}e+=d.rows[h].height}},getLastBar:function(){return h},getCurrentLayout:function(){return m},
getFirstBarInPreviousPage:e,getFirstBarInLastPage:function(){return e(0)}}}
var Note=function(){function c(c){var b={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};c=a(c);var d=c.natural+c.accidental;return b.hasOwnProperty(d)?(b=b[d],b[1]+12*(c.octave-b[0])):-1}function a(a){var b={natural:"",octave:-1,accidental:""};if(0>=a.length)return b;b.natural=a[0];b.octave=parseInt(a.substring(a.length-1,a.length));b.accidental="";b.accidentalASCII="";2<a.length&&(1==a.indexOf("\u266d")?(b.accidental="\u266d",b.accidentalASCII="b"):1==a.indexOf("\u266f")?(b.accidental="\u266f",b.accidentalASCII="#"):1==a.indexOf("\ud834\udd2b")?
(b.accidental="\ud834\udd2b",b.accidentalASCII="bb"):1==a.indexOf("\ud834\udd2a")&&(b.accidental="\ud834\udd2a",b.accidentalASCII="##"));return b}function f(a,b){var c=e[a],d="";"\u266d"==c.sharpflat&&"BEADGCF".indexOf(b)<c.amount?d="\u266d":"\u266f"==c.sharpflat&&"FCGDAEB".indexOf(b)<c.amount&&(d="\u266f");return d}var e={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:c,getNoteFrequency:function(a){a=c(a);"DoubleBass"===Locale.getApplicationTitle("en")&&
(a-=12);return 0>a?0:440*Math.pow(Math.pow(2,1/12),a-49)},getNoteDetail:a,getDefaultAccidental:f,getDefaultAccidentalASCII:function(a,b){return f(a,b).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(a){a=a.substring(0,1);return 0<="GAB".indexOf(a)?a+"3":a+"4"}}}(),PDFConverter=function(c,a){function f(){var a=e.querySelectorAll("div.page");g+=1;g>=a.length?d(b):(b.addPage(),b.addHTML(a[g],f))}var e=c,d=a,b=null,g=0;return{convert:function(){var a=e.querySelectorAll("div.page");
0>=a.length?d(null):(b=new jsPDF("p","pt","a4"),g=0,b.addHTML(a[0],f))}}},PDFPage=function(){function c(){LoadingIconManager.show();var a=document.querySelector("body > div#pdfRenderer");a.style.display="block";var c=new PDFRenderer(a),d=MusicStorageManager.getPiece(App.getDefaultPieceId());null===d?alert("Cannot show PDF"):(c.render(d),(new PDFConverter(a,function(b){a.style.display="none";window.top.pdfdata=b.output("arraybuffer");document.querySelector("body > div#container > div#wrapper").innerHTML=
'<embed src="/pdf.js/viewer.html">'})).convert(d))}var a=function(){return{onComplete:function(){LoadingIconManager.hide()},onerror:onerror}}();return{initialize:function(f){App.replaceURL(App.getPiecePath());window.top.PDFJS=a;LoadingIconManager.show();document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()});c()},draw:function(){},getPath:function(){return"pdf.html"}}}(),PDFRenderer=function(c){return{render:function(a){c.innerHTML=
"";for(var f=-1,e=-1,d=0;8>d;d++){e+=1;f+=1;if(f>=a.getData().bars.length)break;var b;b=e;var g=document.createElement("div");g.classList.add("page");g.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===b?"":"hide");c.appendChild(g);b=g;b.querySelector("div.title").innerHTML=Locale.getTranslation(a.getData().descriptions);b.querySelector("div.footer").innerHTML=Locale.getPrintFooter();b=new MusicViewer(b.querySelector("canvas.music"));
b.setPiece(a);b.setFirstBar(f);b.display();f=b.getLastBar()}}}},Piece=function(){function c(a){function c(a){for(var b=0;b<e.bars.length;b++)if(e.bars[b].first<=a&&a<e.bars[b].first+e.bars[b].verticals.length)return e.bars[b];return null}var e=null,e="string"===typeof a?JSON.parse(a):a;return{getData:function(){return e},getBar:c,getPreBar:function(a){a=c(a);return null===a?null:c(a.first-1)},getNextBar:function(a){a=c(a);return null===a?null:c(a.first+a.verticals.length)},getTotalVerticals:function(){var a=
e.bars[e.bars.length-1];return a.first+a.verticals.length}}}return{createFromObject:function(a){return new c(a)},createFromString:function(a){return new c(a)}}}(),SharePage=function(){function c(c){var d=c.target.id;d in f?(c=f[d].replace("URL",encodeURIComponent(a.url)).replace("DESCRIPTION",encodeURIComponent(a.description)).replace("VIA","Metronome"),window.open(c,"_blank")):"mail"==d?(c="mailto:?subject="+encodeURIComponent(a.description)+"&body="+encodeURIComponent(a.url),window.open(c,"_blank")):
"link"==c.target.id&&(c=document.querySelector("body > input#copy"),c.classList.remove("hidden"),c.value=a.url,c.select(),document.execCommand("copy"),c.classList.add("hidden"));window.location=App.getPiecePath()}var a={url:"",description:""},f={qq:"http://v.t.qq.com/share/share.php?url=URL&title=DESCRIPTION",weibo:"http://service.weibo.com/share/share.php?url=URL&title=DESCRIPTION",qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=URL&title=DESCRIPTION",facebook:"https://www.facebook.com/sharer/sharer.php?u=URL&t=DESCRIPTION",
twitter:"https://twitter.com/intent/tweet?text=DESCRIPTION&url=URL&via=VIA"};return{initialize:function(e){e=App.getDefaultPieceId();e=MusicStorageManager.getPiece(e);document.querySelector("body > div#container > div#share > div#title").innerHTML=Locale.getSharingTitle(e);App.replaceURL(App.getPiecePath());a.url=App.getCanonicalPagePath(IndexPage)+"?p="+e.getData().id;a.description=Locale.getPieceDescription(e)+", "+Locale.getApplicationTitle()+", "+Locale.getProjectName();e=document.querySelectorAll("body > div#container > div#share > div#services > div.service");
for(var d=0;d<e.length;d++)e[d].addEventListener("click",c);document.querySelector("body > div#container > div#controls > div#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"share.html"}}}(),StringInstrumentSimulator=function(){function c(){if(null!=a)return!0;if("AudioContext"in window)a=new AudioContext;else if("webkitAudioContext"in window)a=new webkitAudioContext;else return a=null,!1;f=a.createGain();f.gain.value=0;f.connect(a.destination);
return!0}var a=null,f=null,e=[];return{play:function(d){c();for(var b=0;b<d.length;b++)if(!(0>=d[b])){var g=a.createOscillator();g.frequency.value=d[b];var h=g,l=Math.PI,m=new Float32Array(12),p=new Float32Array(12),k=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],l=[0,0,l/2,0,l/2,0,l/2,0,l/2,0,l/2,0];m[0]=0;p[0]=0;for(var n=1;12>n;n++)m[n]=k[n]*k[0]*Math.cos(l[n]),p[n]=k[n]*k[0]*Math.sin(l[n]);m=a.createPeriodicWave(p,m);h.setPeriodicWave(m);g.connect(f);g.start(0);e.push(g)}f.gain.linearRampToValueAtTime(0,
a.currentTime);f.gain.linearRampToValueAtTime(.5,a.currentTime+.05)},stop:function(){c();f.gain.linearRampToValueAtTime(.5,a.currentTime);f.gain.linearRampToValueAtTime(0,a.currentTime+.05);setTimeout(function(){for(var a=0;a<e.length;a++){var b=e[a];b.stop(0);b.disconnect(f)}e=[]},50)},playAndStop:function(a,b,c){}}}(),VFUtility=function(){function c(a){a=Note.getNoteDetail(a);return a.natural+a.accidentalASCII+"/"+a.octave}return{toVFKeySignature:function(a){a!==a.toUpperCase()&&(a=a.toUpperCase()+
"m");return a=a.replace(Note.flat,"b").replace(Note.sharp,"#")},prepareStaveNote:function(a,f,e,d){for(var b,g,h,l=[],m=0;m<e.notes.length;m++)l.push(c(e.notes[m]));f=new Vex.Flow.StaveNote({clef:f,keys:l,duration:e.duration});if("r"!==e.duration.substr(-1))for(m=0;m<e.notes.length;m++)a:{var p=a,l=f,k=m,n=d;h=l.keys[k];var z=h.indexOf("/");b=h.substring(0,1);g=parseInt(h.substring(z+1));h=h.substring(1,z);z=b+g;g=!1;if(n.hasOwnProperty(z))if(n[z]==h)break a;else g=!0;n[z]=h;"bb"==h?l.addAccidental(k,
new Vex.Flow.Accidental("bb")):"##"==h?l.addAccidental(k,new Vex.Flow.Accidental("##")):(b=Note.getDefaultAccidentalASCII(p,b),"#"==b?"#"==h?g&&l.addAccidental(k,new Vex.Flow.Accidental("#")):"b"==h?l.addAccidental(k,new Vex.Flow.Accidental("b")):l.addAccidental(k,new Vex.Flow.Accidental("n")):"b"==b?"#"==h?l.addAccidental(k,new Vex.Flow.Accidental("#")):"b"==h?g&&l.addAccidental(k,new Vex.Flow.Accidental("b")):l.addAccidental(k,new Vex.Flow.Accidental("n")):"#"==h?l.addAccidental(k,new Vex.Flow.Accidental("#")):
"b"==h?l.addAccidental(k,new Vex.Flow.Accidental("b")):g&&l.addAccidental(k,new Vex.Flow.Accidental("n")))}a=e.duration;"dd"==a.substring(a.length-2)?f.addDotToAll().addDotToAll():(e=e.duration,"d"==e.substring(e.length-1)&&f.addDotToAll());return f}}}(),App=function(){function c(a){return d+a.getPath()}function a(){var a=window.location.href;e=0===a.indexOf(c(CatalogPage))?CatalogPage:0===a.indexOf(c(AboutPage))?AboutPage:0===a.indexOf(c(PDFPage))?PDFPage:0===a.indexOf(c(SharePage))?SharePage:IndexPage}
var f={},e=null,d="";return{initialize:function(b){b=void 0===b?{}:b;Header.initialize();(function(){var a=window.location.href.lastIndexOf("/");d=window.location.href.substring(0,a)+"/"})();(function(){for(var a=window.location.search,a=("?"===a[0]?a.substr(1):a).split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1]||"")}b.lastPage=sessionStorage.lastPage||null;f=b})();a();Header.highlight(e);e.initialize(b);sessionStorage.setItem("lastPage",c(e));
window.addEventListener("resize",function(){e.draw()})},getParams:function(){return f},getBaseURL:function(){return d},getCanonicalPagePath:function(a){return"http://helimusic.com/db/"+a.getPath()},getPagePath:c,replaceURL:function(a){0!==d.indexOf("file://")&&window.history.replaceState("","",a)},getPiecePath:function(a){a=void 0===a?null:a;a=null===a?App.getDefaultPieceId():a.getData().id;return App.getPagePath(IndexPage)+"?p="+a},getPiecesPath:function(){return d+"pieces/"},getDefaultPieceId:function(){var a=
f,c="default";a.hasOwnProperty("p")?c=a.p:"lastPieceId"in sessionStorage&&(c=sessionStorage.lastPieceId);return c}}}();
