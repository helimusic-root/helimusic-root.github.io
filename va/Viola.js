var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[a]=f.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var a=0;return $jscomp.iteratorPrototype(function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.polyfill=function(c,a,f,b){if(a){f=$jscomp.global;c=c.split(".");for(b=0;b<c.length-1;b++){var d=c[b];d in f||(f[d]={});f=f[d]}c=c[c.length-1];b=f[c];a=a(b);a!=b&&null!=a&&$jscomp.defineProperty(f,c,{configurable:!0,writable:!0,value:a})}};
$jscomp.polyfill("Array.from",function(c){return c?c:function(a,f,b){$jscomp.initSymbolIterator();f=null!=f?f:function(g){return g};var d=[],e=a[Symbol.iterator];if("function"==typeof e)for(a=e.call(a);!(e=a.next()).done;)d.push(f.call(b,e.value));else for(var e=a.length,h=0;h<e;h++)d.push(f.call(b,a[h]));return d}},"es6-impl","es3");$jscomp.makeIterator=function(c){$jscomp.initSymbolIterator();var a=c[Symbol.iterator];return a?a.call(c):$jscomp.arrayIterator(c)};
$jscomp.owns=function(c,a){return Object.prototype.hasOwnProperty.call(c,a)};
$jscomp.polyfill("WeakMap",function(c){function a(a){$jscomp.owns(a,b)||$jscomp.defineProperty(a,b,{value:{}})}function f(b){var g=Object[b];g&&(Object[b]=function(b){a(b);return g(b)})}if(function(){if(!c||!Object.seal)return!1;try{var a=Object.seal({}),g=Object.seal({}),b=new c([[a,2],[g,3]]);if(2!=b.get(a)||3!=b.get(g))return!1;b["delete"](a);b.set(g,4);return!b.has(a)&&4==b.get(g)}catch(m){return!1}}())return c;var b="$jscomp_hidden_"+Math.random().toString().substring(2);f("freeze");f("preventExtensions");
f("seal");var d=0,e=function(a){this.id_=(d+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var g;!(g=a.next()).done;)g=g.value,this.set(g[0],g[1])}};e.prototype.set=function(f,g){a(f);if(!$jscomp.owns(f,b))throw Error("WeakMap key fail: "+f);f[b][this.id_]=g;return this};e.prototype.get=function(a){return $jscomp.owns(a,b)?a[b][this.id_]:void 0};e.prototype.has=function(a){return $jscomp.owns(a,b)&&$jscomp.owns(a[b],this.id_)};e.prototype["delete"]=
function(a){return $jscomp.owns(a,b)&&$jscomp.owns(a[b],this.id_)?delete a[b][this.id_]:!1};return e},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(c){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),b=new c($jscomp.makeIterator([[a,"s"]]));if("s"!=b.get(a)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var f=b.entries(),d=f.next();if(d.done||d.value[0]!=a||"s"!=d.value[1])return!1;d=f.next();return d.done||4!=d.value[0].x||"t"!=d.value[1]||!f.next().done?!1:!0}catch(p){return!1}}())return c;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var a=new WeakMap,f=function(a){this.data_={};this.head_=e();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};f.prototype.set=function(a,f){var g=b(this,a);g.list||(g.list=this.data_[g.id]=[]);g.entry?g.entry.value=f:(g.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:f},g.list.push(g.entry),this.head_.previous.next=g.entry,this.head_.previous=g.entry,this.size++);return this};f.prototype["delete"]=
function(a){a=b(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};f.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=e();this.size=0};f.prototype.has=function(a){return!!b(this,a).entry};f.prototype.get=function(a){return(a=b(this,a).entry)&&a.value};f.prototype.entries=function(){return d(this,function(a){return[a.key,
a.value]})};f.prototype.keys=function(){return d(this,function(a){return a.key})};f.prototype.values=function(){return d(this,function(a){return a.value})};f.prototype.forEach=function(a,b){for(var f=this.entries(),d;!(d=f.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var b=function(b,f){var d;d=f&&typeof f;"object"==d||"function"==d?a.has(f)?d=a.get(f):(d=""+ ++h,a.set(f,d)):d="p_"+f;var e=b.data_[d];if(e&&$jscomp.owns(b.data_,d))for(var g=0;g<
e.length;g++){var n=e[g];if(f!==f&&n.key!==n.key||f===n.key)return{id:d,list:e,index:g,entry:n}}return{id:d,list:e,index:-1,entry:void 0}},d=function(a,b){var f=a.head_;return $jscomp.iteratorPrototype(function(){if(f){for(;f.head!=a.head_;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:b(f)};f=null}return{done:!0,value:void 0}})},e=function(){var a={};return a.previous=a.next=a.head=a},h=0;return f},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(c){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),b=new c($jscomp.makeIterator([a]));if(!b.has(a)||1!=b.size||b.add(a)!=b||1!=b.size||b.add({x:4})!=b||2!=b.size)return!1;var d=b.entries(),e=d.next();if(e.done||e.value[0]!=a||e.value[1]!=a)return!1;e=d.next();return e.done||e.value[0]==a||4!=e.value[0].x||e.value[1]!=e.value[0]?!1:d.next().done}catch(h){return!1}}())return c;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var a=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};a.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};a.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};a.prototype.clear=function(){this.map_.clear();this.size=0};a.prototype.has=function(a){return this.map_.has(a)};a.prototype.entries=
function(){return this.map_.entries()};a.prototype.values=function(){return this.map_.values()};a.prototype[Symbol.iterator]=a.prototype.values;a.prototype.forEach=function(a,b){var d=this;this.map_.forEach(function(f){return a.call(b,f,f,d)})};return a},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(c,a){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var f=0,b={next:function(){if(f<c.length){var d=f++;return{value:a(d,c[d]),done:!1}}b.next=function(){return{done:!0,value:void 0}};return b.next()}};b[Symbol.iterator]=function(){return b};return b};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(c){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location="index.html?p="+App.getPieceId()})},draw:function(){},getPath:function(){return"/about.html"}}}(),AJAX=function(){return{GET:function(c,a,f){a=void 0===a?null:a;f=void 0===f?null:f;var b=new XMLHttpRequest;b.onreadystatechange=function(){4==this.readyState&&(200==this.status?null!==a&&a(this.responseText):null!==f&&
f(this.status))};b.open("GET",c,!0);b.send()}}}(),CatalogPage=function(){function c(){AJAX.GET(App.getPiecesPath()+"indexes.json",function(a){a=JSON.parse(a);var f=a.scales;1==e.length?a.hasOwnProperty(e[0])&&(f=a[e[0]]):1<e.length&&"scales"==e[0]&&a.scales.hasOwnProperty(e[1])&&(f=a.scales[e[1]]);d={query:e,tiles:[]};a=[];for(g in f)f.hasOwnProperty(g)&&"_"!==g.substring(0,1)&&a.push(g);a.sort(function(a,b){var d=Locale.getTranslation(f[a]._desc,"en"),e=Locale.getTranslation(f[b]._desc,"en");return d<
e?-1:d>e?1:0});for(var c=0;c<a.length;c++){var g=a[c],p=f[g];if("_"!==g.substring(0,1)){var g={id:g,description:p._desc},n=0;for(keyInNextLevel in p)p.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(n+=1);0>=n?g.type="piece":(g.type="folder",g.total=n);d.tiles.push(g)}}b()})}function a(a){a=a.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+a)}function f(a){window.location=App.getPagePath(IndexPage)+"?p="+encodeURIComponent(a.target.getAttribute("data"))}
function b(){for(var b=0;b<d.tiles.length;b++){var e=d.tiles[b];if("folder"==e.type){var c=document.createElement("div");c.classList.add("tile");c.classList.add("folder");c.setAttribute("data",e.id);c.innerHTML=Locale.getTranslation(e.description);c.addEventListener("click",a);h.appendChild(c)}else c=document.createElement("div"),c.classList.add("tile"),c.classList.add("piece"),c.setAttribute("data",e.id),c.innerHTML=Locale.getTranslation(e.description),c.addEventListener("click",f),h.appendChild(c),
e.hasOwnProperty("data")}}var d={},e="",h=null;return{initialize:function(a){h=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(d=window.catalogSnapshot);parseInt(a.p);e=Array.from(new Set((a.q||"").split(",")));c()},draw:function(){},getPath:function(){return"/catalog.html"}}}(),Header=function(){function c(){window.location=App.getPagePath(PDFPage)}function a(){window.location=App.getPagePath(SharePage)}function f(){window.location=App.getPagePath(CatalogPage)}function b(){window.location=
App.getPagePath(AboutPage)}var d=null,e=null,h=null;return{initialize:function(){d=document.querySelector("div#header > div#controls > div.control#pdf");d.addEventListener("click",c);e=document.querySelector("div#header > div#controls > div.control#share");e.addEventListener("click",a);h=document.querySelector("div#header > div#controls > div.control#open");h.addEventListener("click",f);document.querySelector("div#header > div#title  > div#text").addEventListener("click",b);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",
b);document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},highlight:function(a){d.classList.remove("highlighted");e.classList.remove("highlighted");h.classList.remove("highlighted");a===PDFPage?d.classList.add("highlighted"):a===SharePage?e.classList.add("highlighted"):a===CatalogPage&&h.classList.add("highlighted")}}}(),IndexPage=function(){function c(){return"/index.html"}var a=null,f=0,b=function(){function b(b){b=b.target.id;a.getData();if("pre"===
b){var d=a.getPreBar(f);b=a.getTotalVerticals()-1;null!==d&&(b=d.first);window.location=window.location.pathname+"?p="+a.getData().id+"&v="+b}else"next"===b?(d=a.getNextBar(f),b=0,null!==d&&(b=d.first),window.location=window.location.pathname+"?p="+a.getData().id+"&v="+b):"reload"===b&&(window.location=window.location.pathname+"?p="+a.getData().id+"&v=0")}return{initialize:function(){for(var a=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),
d=0;d<a.length;d++)a[d].addEventListener("click",b)},enableControls:function(){for(var a=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),b=0;b<a.length;b++)a[b].classList.remove("disabled")}}}(),d=function(){function b(a){var b=a.clientX,d=a.clientY;"ontouchstart"in window&&(b=a.touches[0].clientX,d=a.touches[0].clientY);g(b,d)}function c(b){b=null;for(var e=document.querySelectorAll("body > div#container > div#notes > div.note"),c=0;c<e.length;c++)if(e[c].classList.contains("selected")){b=
e[c];break}if(null!==b){b.classList.remove("selected");StringInstrumentSimulator.stop();var e=a.getBar(f),c=f-e.first,g=e.verticals[c],g=Array.from(g.notes.keys());"playAllNotesAndMoveNext"!==b.id?(g=[parseInt(b.getAttribute("value"))],l.changeNotesColor(c,g,"green"),l.changeNotesSize(c,g,1)):(l.changeNotesColor(c,g,"black"),l.changeNotesSize(c,g,1),f+=1,b=!1,f>=e.first+e.verticals.length&&(b=!0),f>=a.getTotalVerticals()&&(f=0),b?d.firstDraw():(c+=1,g=e.verticals[c],g=Array.from(g.notes.keys()),l.changeNotesColor(c,
g,"green"),l.changeNotesSize(c,g,1),k()))}}function g(b,d){for(var e=null,c=document.querySelectorAll("body > div#container > div#notes > div.note"),g=0;g<c.length;g++){var n=c[g].getBoundingClientRect();if(b>=n.left&&b<=n.right&&d>=n.top&&d<=n.bottom){e=c[g];break}}if(null!==e){for(;!e.classList.contains("note");)e=e.parentNode;e.classList.add("selected");var g=a.getBar(f),c=f-g.first,n=g.verticals[c],p=[],h=[];if("playAllNotesAndMoveNext"===e.id)for(g=0;g<n.notes.length;g++)p.push(Note.getNoteFrequency(n.notes[g])),
h.push(g);else e=parseInt(e.getAttribute("value")),p.push(Note.getNoteFrequency(n.notes[e])),h.push(e);"r"===n.duration.substr(-1)?StringInstrumentSimulator.play([0]):StringInstrumentSimulator.play(p);l.changeNotesColor(c,h,"red");l.changeNotesSize(c,h,1.3)}}function k(){for(var b=document.querySelectorAll("body > div#container > div#notes > div.note"),d=0;d<b.length;d++)"playAllNotesAndMoveNext"!==b[d].id&&b[d].parentNode.removeChild(b[d]);var b=document.querySelector("body > div#container > div#notes"),
d=a.getBar(f),e=d.verticals[f-d.first];if("r"!==e.duration.substr(-1))for(d=e.notes.length-1;0<=d;d--){var c=document.createElement("div");c.classList.add("note");c.setAttribute("value",""+d);var g=c,l;l=Note.getNoteDetail(e.notes[d]);var h=""===l.accidental?"":"withAccidental";l=('<div class="natural YYY">'+l.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+l.octave+"</div>").replace("XXX",""===l.accidental?"hidden":l.accidental).replace("YYY",h).replace("ZZZ",h);g.innerHTML=
l;b.appendChild(c)}}function m(){l.display();k()}var l=null;return{initialize:function(){var a="mousedown",d="mouseup";"ontouchstart"in window&&(a="touchstart",d="touchend");window.addEventListener(a,b);window.addEventListener(d,c);l=new MusicPlayer(document.querySelector("body > div#container > div#music > div#sheet"))},playNoteAtPosition:g,reDraw:m,firstDraw:function(){l.setPiece(a);l.setFocus(f);m();var b=a.getBar(f),d=f-b.first;l.changeNotesColor(d,Array.from(b.verticals[d].notes.keys()),"green");
document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getTranslation(a.getData().descriptions)}}}();return{initialize:function(e){function h(e){f>=a.getTotalVerticals()&&(f=0);d.firstDraw();b.enableControls();null!==e&&d.playNoteAtPosition(e.x,e.y);sessionStorage.lastPieceId=a.getData().id;e=a.getNextBar(f);var c=0;null!==e&&(c=e.first);AJAX.GET(window.location.pathname+"?p="+a.getData().id+"&v="+c)}var g=e.p||"default";f=parseInt(e.v)||0;var k=null;
"unhandledEvent"in e&&e.lastPage===c()&&(k=e.unhandledEvent);d.initialize();b.initialize();a=MusicStorageManager.getPiece(g);null!==a?h(k):(LoadingIconManager.show(),AJAX.GET(App.getPiecesPath()+g+".json",function(b){a=Piece.createFromString(b);MusicStorageManager.setPiece(a);h(k);LoadingIconManager.hide()},function(a){alert(Locale.getPieceLoadingFailureNotice(g));window.location=App.getPagePath(CatalogPage)}))},draw:function(){null!==a&&d.reDraw()},getPath:c}}(),LoadingIconManager=function(){var c=
0,a=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){100<(new Date).getTime()-c&&a.classList.remove("hidden")},100)},hide:function(){a.classList.add("hidden");c=(new Date).getTime()}}}(),Locale=function(){function c(){if("language"in localStorage&&0<=b.indexOf(localStorage.language))d=localStorage.language;else{var a=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,a=a.toLowerCase();d=0<=b.indexOf(a)?a:"en"}}function a(a,
b){var e;void 0===b&&(b=d);e=b in a?a[b]:a.en;for(var c=2;c<arguments.length;c++)e=e.replace("{"+(c-1)+"}",arguments[c]);return e}function f(b){return a(g,b)}var b=["en","zh-cn"],d="en",e={en:"More resources from {1}","zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 {1}"},h={en:"Cannot load piece {1} from {2}. Please choose a new one.","zh-cn":"\u65e0\u6cd5\u4ece{2}\u4e0b\u8f7d\u66f2\u76ee{1}\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},g={en:"Viola","zh-cn":"\u4e2d\u63d0\u7434"},k={en:"Share <b>{1}</b> to your friends using buttons above or your browser's sharing functions!",
"zh-cn":"\u4f7f\u7528\u4e0a\u9762\u7684\u6309\u94ae\u6216\u8005\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd\u628a{1}\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\uff01"};c();return{checkLanguage:c,getApplicationTitle:f,getPrintFooter:function(b){return a(e,b,window.location.hostname)},getTranslation:a,getPieceLoadingFailureNotice:function(b,d){return a(h,d,b,App.getHost()+App.getPiecesPath())},getSharingTitle:function(b,d){var e=f(d);if(null!==b){var c=b.getData().descriptions,e=c.en;c.hasOwnProperty(d)&&
(e=c[d])}return a(k,d,e)}}}();
function MusicPlayer(c){function a(a){for(var d=a.first,e=[],c=0;c<a.verticals.length;c++){for(var f=[],g=0;g<a.verticals[c].notes.length;g++)f.push({color:"black",size:"1.0"});e.push(f)}return{isOnBar:function(a){return d===a.first},changeNotesSize:function(a,b,d){for(var c=0;c<b.length;c++)e[a][b[c]].size=d},changeNotesColor:function(a,b,d){for(var c=0;c<b.length;c++)e[a][b[c]].color=d},drawAllOrnaments:function(){for(var a=0<=navigator.userAgent.toLowerCase().indexOf("firefox"),d=0;d<e.length;d++)for(var c=
0;c<e[d].length;c++){if("1.0"!==e[d][c].size&&!a){var f=b(d,[c]);f[0].style.transformOrigin="50% 50%";f[0].style.transform="scale("+e[d][c].size+")"}"black"!==e[d][c].color&&(f=b(d,[c]),f[0].setAttribute("fill",e[d][c].color))}}}}function f(){e.innerHTML="";var a=new Vex.Flow.Renderer(e,Vex.Flow.Renderer.Backends.SVG);context=a.getContext();a.resize(e.clientWidth,e.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function b(a,b){for(var d=document.querySelectorAll("#vf-"+
g[a].attrs.id+" g.vf-notehead path"),e=[],c=0;c<b.length;c++)e.push(d[b[c]]);return e}function d(a){var b=h.getBar(a);return a-b.first}var e=c,h=null,g=[],k=0,m=null;return{setPiece:function(a){h=a;k=0},setFocus:function(a){k=a},display:function(){var b=f(),d=new Vex.Flow.Stave(4,64,b.width-8),e=h.getBar(k);d.addClef(e.clef).addTimeSignature(e.time).addKeySignature(VFUtility.toVFKeySignature(e.key));d.setMeasure(h.getData().bars.indexOf(e)+1);d.setContext(b).draw();g=[];for(var c={},z=0;z<e.verticals.length;z++)g.push(VFUtility.prepareStaveNote(e.key,
e.clef,e.verticals[z],c));c=Vex.Flow.Beam.generateBeams(g);Vex.Flow.Formatter.FormatAndDraw(b,d,g);c.forEach(function(a){a.setContext(b).draw()});null!==m&&m.isOnBar(e)?m.drawAllOrnaments():m=new a(e)},changeNotesSize:function(a,e,c){c=void 0===c?"1.0":c;if(!(0<=navigator.userAgent.toLowerCase().indexOf("firefox"))){a=d(a);for(var f=b(a,e),g=0;g<f.length;g++)f[g].style.transformOrigin="50% 50%",f[g].style.transform="scale("+c+")";m.changeNotesSize(a,e,c)}},changeNotesColor:function(a,e,c){c=void 0===
c?"black":c;a=d(a);for(var f=b(a,e),g=0;g<f.length;g++)f[g].setAttribute("fill",c);m.changeNotesColor(a,e,c)}}}var MusicStorageManager=function(){return{getPiece:function(c){c=localStorage.getItem("_piece_"+c);return null===c?null:Piece.createFromString(c)},setPiece:function(c){c=c.getData();localStorage.setItem("_piece_"+c.id,JSON.stringify(c))}}}();
function MusicViewer(c){function a(){d.innerHTML="";var a=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===d.tagName.toUpperCase()&&(a=Vex.Flow.Renderer.Backends.CANVAS);a=new Vex.Flow.Renderer(d,a);k=a.getContext();a.resize(d.clientWidth,d.clientHeight);k.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return k}function f(a,b,c){b=void 0===b?0:b;c=void 0===c?0:c;var f={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};b=(0===b?d.clientWidth:b)-8;var h=0===c?d.clientHeight:c;c=Math.floor(h/160);for(var h=40+.33*(h-160*c),k=e.getData(),n=[],l=0;l<c;l++)n.push({height:160,staves:[]});for(l=0;l<c&&a<k.bars.length;l++){for(var p=[],m="",u="",x="",q=a;q<k.bars.length;q++){var v=k.bars[q],r={clef:"",key:"",time:"",verticals:v.verticals.length,size:0};v.clef!==m&&(m=r.clef=v.clef,r.size+=25);v.key!==u&&
(u=r.key=v.key,r.size+=8*f[v.key]);v.time!==x&&(x=r.time=v.time,r.size+=14);r.size+=50*r.verticals;p.push(r)}u=0;m=k.bars.length-a;for(q=a;q<k.bars.length;q++)if(u+=p[q-a].size,u>b){m=q>a?q-a:1;break}for(q=u=0;q<m;q++)u+=p[q].size;for(q=x=0;q<m;q++)g=v=q+a,r=p[q].size/u*b,n[l].staves.push({barIndex:v,left:x+4,width:r}),x+=r;a+=m}return{rows:n,staveOffsetTop:h}}function b(a){var b=e.getData();a=0==a?b.bars.length-1:a-1;for(var d=0,c=0;c<b.bars.length;c++){for(var g=d,h=f(d),k=0;k<h.rows.length;k++)for(var l=
0;l<h.rows[k].length;l++){if(a===h.rows[k][l].barIndex)return 0==k+l?g:d;d=h.rows[k][l].barIndex}d+=1}}var d=c,e=null,h=0,g=0,k=null,m=null;a();return{setPiece:function(a){e=a},setFirstBar:function(a){h=a},display:function(){a();var b=e.getData(),d=f(h),c=d.staveOffsetTop;m=d;for(var g=0;g<d.rows.length;g++){for(var z="",B="",C="",w=0;w<d.rows[g].staves.length;w++){var t=b.bars[d.rows[g].staves[w].barIndex],A=new Vex.Flow.Stave(d.rows[g].staves[w].left,c,d.rows[g].staves[w].width);0==w&&A.setMeasure(d.rows[g].staves[w].barIndex+
1);t.clef!==z&&(z=t.clef,A.addClef(t.clef));t.key!==B&&(B=t.key,A.addKeySignature(VFUtility.toVFKeySignature(t.key)));t.time!==C&&(C=t.time,A.addTimeSignature(t.time));A.setContext(k).draw();for(var u=[],x={},q=0;q<t.verticals.length;q++)u.push(VFUtility.prepareStaveNote(t.key,t.clef,t.verticals[q],x));t=Vex.Flow.Beam.generateBeams(u);Vex.Flow.Formatter.FormatAndDraw(k,A,u);t.forEach(function(a){a.setContext(k).draw()})}c+=d.rows[g].height}},getLastBar:function(){return g},getCurrentLayout:function(){return m},
getFirstBarInPreviousPage:b,getFirstBarInLastPage:function(){return b(0)}}}
var Note=function(){function c(b){var d={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};b=a(b);var c=b.natural+b.accidental;return d.hasOwnProperty(c)?(d=d[c],d[1]+12*(b.octave-d[0])):-1}function a(a){var b={natural:"",octave:-1,accidental:""};if(0>=a.length)return b;b.natural=a[0];b.octave=parseInt(a.substring(a.length-1,a.length));b.accidental="";b.accidentalASCII="";2<a.length&&(1==a.indexOf("\u266d")?(b.accidental="\u266d",b.accidentalASCII="b"):1==a.indexOf("\u266f")?(b.accidental="\u266f",b.accidentalASCII="#"):1==a.indexOf("\ud834\udd2b")?
(b.accidental="\ud834\udd2b",b.accidentalASCII="bb"):1==a.indexOf("\ud834\udd2a")&&(b.accidental="\ud834\udd2a",b.accidentalASCII="##"));return b}function f(a,c){var d=b[a],e="";"\u266d"==d.sharpflat&&"BEADGCF".indexOf(c)<d.amount?e="\u266d":"\u266f"==d.sharpflat&&"FCGDAEB".indexOf(c)<d.amount&&(e="\u266f");return e}var b={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:c,getNoteFrequency:function(a){a=c(a);"DoubleBass"===Locale.getApplicationTitle("en")&&
(a-=12);return 0>a?0:440*Math.pow(Math.pow(2,1/12),a-49)},getNoteDetail:a,getDefaultAccidental:f,getDefaultAccidentalASCII:function(a,b){return f(a,b).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(a){a=a.substring(0,1);return 0<="GAB".indexOf(a)?a+"3":a+"4"}}}(),PDFConverter=function(c,a){function f(){var a=b.querySelectorAll("div.page");h+=1;h>=a.length?d(e):(e.addPage(),e.addHTML(a[h],f))}var b=c,d=a,e=null,h=0;return{convert:function(){var a=b.querySelectorAll("div.page");
0>=a.length?d(null):(e=new jsPDF("p","pt","a4"),h=0,e.addHTML(a[0],f))}}},PDFPage=function(){function c(){LoadingIconManager.show();var a=document.querySelector("body > div#pdfRenderer");a.style.display="block";var c=new PDFRenderer(a),b=MusicStorageManager.getPiece(App.getPieceId());null===b?alert("Cannot show PDF"):(c.render(b),(new PDFConverter(a,function(b){a.style.display="none";LoadingIconManager.hide();window.top.pdfdata=b.output("arraybuffer");document.querySelector("body > div#container > div#wrapper").innerHTML=
'<embed src="/pdf.js/viewer.html">'})).convert(b))}return{initialize:function(a){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location="index.html?p="+App.getPieceId()});c();a=App.getHost()+"/index.html?p="+App.getPieceId();history.replaceState("","",a)},draw:function(){},getPath:function(){return"/pdf.html"}}}(),PDFRenderer=function(c){return{render:function(a){c.innerHTML="";for(var f=-1,b=-1,d=0;8>d;d++){b+=1;f+=1;if(f>=
a.getData().bars.length)break;var e;e=b;var h=document.createElement("div");h.classList.add("page");h.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===e?"":"hide");c.appendChild(h);e=h;e.querySelector("div.title").innerHTML=Locale.getTranslation(a.getData().descriptions);e.querySelector("div.footer").innerHTML=Locale.getPrintFooter();e=new MusicViewer(e.querySelector("canvas.music"));e.setPiece(a);e.setFirstBar(f);
e.display();f=e.getLastBar()}}}},Piece=function(){function c(a){function c(a){for(var c=0;c<b.bars.length;c++)if(b.bars[c].first<=a&&a<b.bars[c].first+b.bars[c].verticals.length)return b.bars[c];return null}var b=JSON.parse(a);return{getData:function(){return b},getBar:c,getPreBar:function(a){a=c(a);return null===a?null:c(a.first-1)},getNextBar:function(a){a=c(a);return null===a?null:c(a.first+a.verticals.length)},getTotalVerticals:function(){var a=b.bars[b.bars.length-1];return a.first+a.verticals.length}}}
return{createFromString:function(a){return new c(a)}}}(),SharePage=function(){function c(b){var c=b.target.id;c in f?(b=f[c].replace("URL",encodeURIComponent(a.url)).replace("DESCRIPTION",encodeURIComponent(a.description)).replace("VIA","Metronome"),window.open(b,"_blank")):"mail"==c?(b="mailto:?subject="+encodeURIComponent(a.description)+"&body="+encodeURIComponent(a.url),window.open(b,"_blank")):"link"==b.target.id&&(b=document.querySelector("body > input#copy"),b.classList.remove("hidden"),b.value=
a.url,b.select(),document.execCommand("copy"),b.classList.add("hidden"));window.location="index.html?p="+App.getPieceId()}var a={url:"",description:""},f={qq:"http://v.t.qq.com/share/share.php?url=URL&title=DESCRIPTION",weibo:"http://service.weibo.com/share/share.php?url=URL&title=DESCRIPTION",qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=URL&title=DESCRIPTION",facebook:"https://www.facebook.com/sharer/sharer.php?u=URL&t=DESCRIPTION",twitter:"https://twitter.com/intent/tweet?text=DESCRIPTION&url=URL&via=VIA"};
return{initialize:function(b){b=App.getPieceId();var d=MusicStorageManager.getPiece(b);document.querySelector("body > div#container > div#share > div#title").innerHTML=Locale.getSharingTitle(d);b=App.getHost()+"/index.html?p="+b;history.replaceState("","",b);a.url=b;a.description="";b=document.querySelectorAll("body > div#container > div#share > div#services > div.service");for(d=0;d<b.length;d++)b[d].addEventListener("click",c)},draw:function(){},getPath:function(){return"/share.html"}}}(),StringInstrumentSimulator=
function(){function c(){if(null!=a)return!0;if("AudioContext"in window)a=new AudioContext;else if("webkitAudioContext"in window)a=new webkitAudioContext;else return a=null,!1;f=a.createGain();f.gain.value=0;f.connect(a.destination);return!0}var a=null,f=null,b=[];return{play:function(d){c();for(var e=0;e<d.length;e++){var h=a.createOscillator();h.frequency.value=d[e];var g=h,k=Math.PI,m=new Float32Array(12),l=new Float32Array(12),p=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],k=[0,0,k/2,0,k/2,
0,k/2,0,k/2,0,k/2,0];m[0]=0;l[0]=0;for(var n=1;12>n;n++)m[n]=p[n]*p[0]*Math.cos(k[n]),l[n]=p[n]*p[0]*Math.sin(k[n]);m=a.createPeriodicWave(l,m);g.setPeriodicWave(m);h.connect(f);h.start(0);b.push(h)}f.gain.linearRampToValueAtTime(0,a.currentTime);f.gain.linearRampToValueAtTime(.5,a.currentTime+.05)},stop:function(){c();f.gain.linearRampToValueAtTime(.5,a.currentTime);f.gain.linearRampToValueAtTime(0,a.currentTime+.05);setTimeout(function(){for(var a=0;a<b.length;a++){var c=b[a];c.stop(0);c.disconnect(f)}b=
[]},50)},playAndStop:function(a,b,c){}}}(),VFUtility=function(){function c(a){a=Note.getNoteDetail(a);return a.natural+a.accidentalASCII+"/"+a.octave}return{toVFKeySignature:function(a){a!==a.toUpperCase()&&(a=a.toUpperCase()+"m");return a=a.replace(Note.flat,"b").replace(Note.sharp,"#")},prepareStaveNote:function(a,f,b,d){for(var e,h,g,k=[],m=0;m<b.notes.length;m++)k.push(c(b.notes[m]));f=new Vex.Flow.StaveNote({clef:f,keys:k,duration:b.duration});if("r"!==b.duration.substr(-1))for(m=0;m<b.notes.length;m++)a:{var l=
a,k=f,p=m,n=d;g=k.keys[p];var y=g.indexOf("/");e=g.substring(0,1);h=parseInt(g.substring(y+1));g=g.substring(1,y);y=e+h;h=!1;if(n.hasOwnProperty(y))if(n[y]==g)break a;else h=!0;n[y]=g;"bb"==g?k.addAccidental(p,new Vex.Flow.Accidental("bb")):"##"==g?k.addAccidental(p,new Vex.Flow.Accidental("##")):(e=Note.getDefaultAccidentalASCII(l,e),"#"==e?"#"==g?h&&k.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==g?k.addAccidental(p,new Vex.Flow.Accidental("b")):k.addAccidental(p,new Vex.Flow.Accidental("n")):
"b"==e?"#"==g?k.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==g?h&&k.addAccidental(p,new Vex.Flow.Accidental("b")):k.addAccidental(p,new Vex.Flow.Accidental("n")):"#"==g?k.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==g?k.addAccidental(p,new Vex.Flow.Accidental("b")):h&&k.addAccidental(p,new Vex.Flow.Accidental("n")))}a=b.duration;"dd"==a.substring(a.length-2)?f.addDotToAll().addDotToAll():(b=b.duration,"d"==b.substring(b.length-1)&&f.addDotToAll());return f}}}(),App=function(){function c(){f.draw()}
var a={},f=null;return{initialize:function(b){b=void 0===b?{}:b;Header.initialize();for(var d=window.location.pathname,e=window.location.search,e=("?"===e[0]?e.substr(1):e).split("&"),h=0;h<e.length;h++){var g=e[h].split("=");b[decodeURIComponent(g[0])]=decodeURIComponent(g[1]||"")}b.lastPage=sessionStorage.lastPage||null;a=b;f=0===d.indexOf("/va"+CatalogPage.getPath())?CatalogPage:0===d.indexOf("/va"+AboutPage.getPath())?AboutPage:0===d.indexOf("/va"+PDFPage.getPath())?PDFPage:0===d.indexOf("/va"+
SharePage.getPath())?SharePage:IndexPage;Header.highlight(f);f.initialize(b);sessionStorage.setItem("lastPage",f.getPath());window.addEventListener("resize",c)},getParams:function(){return a},getHost:function(){var a="";"http:"===window.location.protocol&&"80"!==window.location.port&&(a=":"+window.location.port);"https:"===window.location.protocol&&"443"!==window.location.port&&(a=":"+window.location.port);return window.location.protocol+"//"+window.location.hostname+a},resize:c,getRootPath:function(){return"/va"},
getPagePath:function(a){return"/va"+(void 0===a?null:a).getPath()},getPiecesPath:function(){return"/va/pieces/"},getPieceId:function(){var b=a,c="default";b.hasOwnProperty("p")?c=b.p:"lastPieceId"in sessionStorage&&(c=sessionStorage.lastPieceId);return c}}}();
