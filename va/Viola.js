var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(d,a,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");d!=Array.prototype&&d!=Object.prototype&&(d[a]=f.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var d=$jscomp.global.Symbol.iterator;d||(d=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[d]&&$jscomp.defineProperty(Array.prototype,d,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(d){var a=0;return $jscomp.iteratorPrototype(function(){return a<d.length?{done:!1,value:d[a++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(d){$jscomp.initSymbolIterator();d={next:d};d[$jscomp.global.Symbol.iterator]=function(){return this};return d};$jscomp.polyfill=function(d,a,f,b){if(a){f=$jscomp.global;d=d.split(".");for(b=0;b<d.length-1;b++){var c=d[b];c in f||(f[c]={});f=f[c]}d=d[d.length-1];b=f[d];a=a(b);a!=b&&null!=a&&$jscomp.defineProperty(f,d,{configurable:!0,writable:!0,value:a})}};
$jscomp.polyfill("Array.from",function(d){return d?d:function(a,d,b){$jscomp.initSymbolIterator();d=null!=d?d:function(b){return b};var c=[],e=a[Symbol.iterator];if("function"==typeof e)for(a=e.call(a);!(e=a.next()).done;)c.push(d.call(b,e.value));else for(var e=a.length,f=0;f<e;f++)c.push(d.call(b,a[f]));return c}},"es6-impl","es3");$jscomp.makeIterator=function(d){$jscomp.initSymbolIterator();var a=d[Symbol.iterator];return a?a.call(d):$jscomp.arrayIterator(d)};
$jscomp.owns=function(d,a){return Object.prototype.hasOwnProperty.call(d,a)};
$jscomp.polyfill("WeakMap",function(d){function a(a){$jscomp.owns(a,b)||$jscomp.defineProperty(a,b,{value:{}})}function f(b){var e=Object[b];e&&(Object[b]=function(b){a(b);return e(b)})}if(function(){if(!d||!Object.seal)return!1;try{var b=Object.seal({}),a=Object.seal({}),e=new d([[b,2],[a,3]]);if(2!=e.get(b)||3!=e.get(a))return!1;e["delete"](b);e.set(a,4);return!e.has(b)&&4==e.get(a)}catch(m){return!1}}())return d;var b="$jscomp_hidden_"+Math.random().toString().substring(2);f("freeze");f("preventExtensions");
f("seal");var c=0,e=function(b){this.id_=(c+=Math.random()+1).toString();if(b){$jscomp.initSymbol();$jscomp.initSymbolIterator();b=$jscomp.makeIterator(b);for(var a;!(a=b.next()).done;)a=a.value,this.set(a[0],a[1])}};e.prototype.set=function(e,c){a(e);if(!$jscomp.owns(e,b))throw Error("WeakMap key fail: "+e);e[b][this.id_]=c;return this};e.prototype.get=function(a){return $jscomp.owns(a,b)?a[b][this.id_]:void 0};e.prototype.has=function(a){return $jscomp.owns(a,b)&&$jscomp.owns(a[b],this.id_)};e.prototype["delete"]=
function(a){return $jscomp.owns(a,b)&&$jscomp.owns(a[b],this.id_)?delete a[b][this.id_]:!1};return e},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(d){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!d||!d.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),b=new d($jscomp.makeIterator([[a,"s"]]));if("s"!=b.get(a)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var e=b.entries(),c=e.next();if(c.done||c.value[0]!=a||"s"!=c.value[1])return!1;c=e.next();return c.done||4!=c.value[0].x||"t"!=c.value[1]||!e.next().done?!1:!0}catch(p){return!1}}())return d;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var a=new WeakMap,f=function(a){this.data_={};this.head_=e();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};f.prototype.set=function(a,e){var c=b(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=e:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:e},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};f.prototype["delete"]=
function(a){a=b(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};f.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=e();this.size=0};f.prototype.has=function(a){return!!b(this,a).entry};f.prototype.get=function(a){return(a=b(this,a).entry)&&a.value};f.prototype.entries=function(){return c(this,function(a){return[a.key,
a.value]})};f.prototype.keys=function(){return c(this,function(a){return a.key})};f.prototype.values=function(){return c(this,function(a){return a.value})};f.prototype.forEach=function(a,b){for(var e=this.entries(),c;!(c=e.next()).done;)c=c.value,a.call(b,c[1],c[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var b=function(b,c){var e;e=c&&typeof c;"object"==e||"function"==e?a.has(c)?e=a.get(c):(e=""+ ++g,a.set(c,e)):e="p_"+c;var d=b.data_[e];if(d&&$jscomp.owns(b.data_,e))for(var f=0;f<
d.length;f++){var n=d[f];if(c!==c&&n.key!==n.key||c===n.key)return{id:e,list:d,index:f,entry:n}}return{id:e,list:d,index:-1,entry:void 0}},c=function(a,b){var c=a.head_;return $jscomp.iteratorPrototype(function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})},e=function(){var a={};return a.previous=a.next=a.head=a},g=0;return f},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(d){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!d||!d.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),b=new d($jscomp.makeIterator([a]));if(!b.has(a)||1!=b.size||b.add(a)!=b||1!=b.size||b.add({x:4})!=b||2!=b.size)return!1;var c=b.entries(),e=c.next();if(e.done||e.value[0]!=a||e.value[1]!=a)return!1;e=c.next();return e.done||e.value[0]==a||4!=e.value[0].x||e.value[1]!=e.value[0]?!1:c.next().done}catch(g){return!1}}())return d;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var a=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};a.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};a.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};a.prototype.clear=function(){this.map_.clear();this.size=0};a.prototype.has=function(a){return this.map_.has(a)};a.prototype.entries=
function(){return this.map_.entries()};a.prototype.values=function(){return this.map_.values()};a.prototype[Symbol.iterator]=a.prototype.values;a.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(e){return a.call(b,e,e,c)})};return a},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(d,a){$jscomp.initSymbolIterator();d instanceof String&&(d+="");var f=0,b={next:function(){if(f<d.length){var c=f++;return{value:a(c,d[c]),done:!1}}b.next=function(){return{done:!0,value:void 0}};return b.next()}};b[Symbol.iterator]=function(){return b};return b};$jscomp.polyfill("Array.prototype.keys",function(d){return d?d:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(d){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"about.html"}}}(),AJAX=function(){return{GET:function(d,a,f){a=void 0===a?null:a;f=void 0===f?null:f;var b=new XMLHttpRequest;b.onreadystatechange=function(){4==this.readyState&&(200==this.status?null!==a&&a(this.responseText):null!==f&&f(this.status))};
b.open("GET",d,!0);b.send()}}}(),CatalogPage=function(){function d(){AJAX.GET(App.getPiecesPath()+"indexes.json",function(a){a=JSON.parse(a);var d=a.scales;1==e.length?a.hasOwnProperty(e[0])&&(d=a[e[0]]):1<e.length&&"scales"==e[0]&&a.scales.hasOwnProperty(e[1])&&(d=a.scales[e[1]]);c={query:e,tiles:[]};a=[];for(k in d)d.hasOwnProperty(k)&&"_"!==k.substring(0,1)&&a.push(k);a.sort(function(a,c){var b=Locale.getTranslation(d[a]._desc,"en"),e=Locale.getTranslation(d[c]._desc,"en");return b<e?-1:b>e?1:
0});for(var f=0;f<a.length;f++){var k=a[f],p=d[k];if("_"!==k.substring(0,1)){var k={id:k,description:p._desc},n=0;for(keyInNextLevel in p)p.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(n+=1);0>=n?k.type="piece":(k.type="folder",k.total=n);c.tiles.push(k)}}b()})}function a(a){a=a.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+a)}function f(a){window.location=App.getPagePath(IndexPage)+"?p="+encodeURIComponent(a.target.getAttribute("data"))}
function b(){for(var b=0;b<c.tiles.length;b++){var e=c.tiles[b];if("folder"==e.type){var d=document.createElement("div");d.classList.add("tile");d.classList.add("folder");d.setAttribute("data",e.id);d.innerHTML=Locale.getTranslation(e.description);d.addEventListener("click",a);g.appendChild(d)}else d=document.createElement("div"),d.classList.add("tile"),d.classList.add("piece"),d.setAttribute("data",e.id),d.innerHTML=Locale.getTranslation(e.description),d.addEventListener("click",f),g.appendChild(d),
e.hasOwnProperty("data")}}var c={},e="",g=null;return{initialize:function(a){g=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(c=window.catalogSnapshot);parseInt(a.p);e=Array.from(new Set((a.q||"").split(",")));d()},draw:function(){},getPath:function(){return"catalog.html"}}}(),Header=function(){function d(){window.location=App.getPagePath(PDFPage)}function a(){window.location=App.getPagePath(SharePage)}function f(){window.location=App.getPagePath(CatalogPage)}function b(){window.location=
App.getPagePath(AboutPage)}var c=null,e=null,g=null;return{initialize:function(){c=document.querySelector("div#header > div#controls > div.control#pdf");c.addEventListener("click",d);e=document.querySelector("div#header > div#controls > div.control#share");e.addEventListener("click",a);g=document.querySelector("div#header > div#controls > div.control#open");g.addEventListener("click",f);document.querySelector("div#header > div#title  > div#text").addEventListener("click",b);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",
b);document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},highlight:function(a){c.classList.remove("highlighted");e.classList.remove("highlighted");g.classList.remove("highlighted");a===PDFPage?c.classList.add("highlighted"):a===SharePage?e.classList.add("highlighted"):a===CatalogPage&&g.classList.add("highlighted")}}}(),IndexPage=function(){var d=null,a=0,f=function(){function b(b){b=b.target.id;d.getData();if("pre"===b){var c=d.getPreBar(a);b=d.getTotalVerticals()-
1;null!==c&&(b=c.first);window.location=window.location.pathname+"?p="+d.getData().id+"&v="+b}else"next"===b?(c=d.getNextBar(a),b=0,null!==c&&(b=c.first),window.location=window.location.pathname+"?p="+d.getData().id+"&v="+b):"reload"===b&&(window.location=window.location.pathname+"?p="+d.getData().id+"&v=0")}return{initialize:function(){for(var a=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),c=0;c<a.length;c++)a[c].addEventListener("click",
b)},enableControls:function(){for(var a=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),b=0;b<a.length;b++)a[b].classList.remove("disabled")}}}(),b=function(){function c(a){var b=a.clientX,c=a.clientY;"ontouchstart"in window&&(b=a.touches[0].clientX,c=a.touches[0].clientY);f(b,c)}function e(c){c=null;for(var e=document.querySelectorAll("body > div#container > div#notes > div.note"),n=0;n<e.length;n++)if(e[n].classList.contains("selected")){c=
e[n];break}if(null!==c){c.classList.remove("selected");StringInstrumentSimulator.stop();var e=d.getBar(a),n=a-e.first,k=e.verticals[n],k=Array.from(k.notes.keys());"playAllNotesAndMoveNext"!==c.id&&"muteAndMoveNext"!==c.id?(k=[parseInt(c.getAttribute("value"))],m.changeNotesColor(n,k,"green"),m.changeNotesSize(n,k,1)):(m.changeNotesColor(n,k,"black"),m.changeNotesSize(n,k,1),a+=1,c=!1,a>=e.first+e.verticals.length&&(c=!0),a>=d.getTotalVerticals()&&(a=0),c?b.firstDraw():(n+=1,k=e.verticals[n],k=Array.from(k.notes.keys()),
m.changeNotesColor(n,k,"green"),m.changeNotesSize(n,k,1),l()))}}function f(c,b){for(var e=null,k=document.querySelectorAll("body > div#container > div#notes > div.note"),f=0;f<k.length;f++){var p=k[f].getBoundingClientRect();if(c>=p.left&&c<=p.right&&b>=p.top&&b<=p.bottom){e=k[f];break}}if(null!==e){for(;!e.classList.contains("note");)e=e.parentNode;e.classList.add("selected");var f=d.getBar(a),k=a-f.first,p=f.verticals[k],g=[],h=[];if("playAllNotesAndMoveNext"===e.id)for(f=0;f<p.notes.length;f++)g.push(Note.getNoteFrequency(p.notes[f])),
h.push(f);else if("muteAndMoveNext"===e.id)for(f=0;f<p.notes.length;f++)g.push(0),h.push(f);else e=parseInt(e.getAttribute("value")),g.push(Note.getNoteFrequency(p.notes[e])),h.push(e);"r"===p.duration.substr(-1)?StringInstrumentSimulator.play([0]):StringInstrumentSimulator.play(g);m.changeNotesColor(k,h,"red");m.changeNotesSize(k,h,1.3)}}function l(){for(var c=document.querySelectorAll("body > div#container > div#notes > div.note"),b=0;b<c.length;b++)"playAllNotesAndMoveNext"!==c[b].id&&"muteAndMoveNext"!==
c[b].id&&c[b].parentNode.removeChild(c[b]);var c=document.querySelector("body > div#container > div#notes"),b=d.getBar(a),e=b.verticals[a-b.first];if("r"!==e.duration.substr(-1))for(b=e.notes.length-1;0<=b;b--){var f=document.createElement("div");f.classList.add("note");f.setAttribute("value",""+b);var g=f,h;h=Note.getNoteDetail(e.notes[b]);var l=""===h.accidental?"":"withAccidental";h=('<div class="natural YYY">'+h.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+h.octave+
"</div>").replace("XXX",""===h.accidental?"hidden":h.accidental).replace("YYY",l).replace("ZZZ",l);g.innerHTML=h;c.appendChild(f)}}function h(){m.display();l()}var m=null;return{initialize:function(){var a="mousedown",b="mouseup";"ontouchstart"in window&&(a="touchstart",b="touchend");window.addEventListener(a,c);window.addEventListener(b,e);m=new MusicPlayer(document.querySelector("body > div#container > div#music > div#sheet"))},playNoteAtPosition:f,reDraw:h,firstDraw:function(){m.setPiece(d);m.setFocus(a);
h();var b=d.getBar(a),c=a-b.first;m.changeNotesColor(c,Array.from(b.verticals[c].notes.keys()),"green");document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getTranslation(d.getData().descriptions)}}}();return{initialize:function(c){function e(c){a>=d.getTotalVerticals()&&(a=0);b.firstDraw();f.enableControls();null!==c&&b.playNoteAtPosition(c.x,c.y);sessionStorage.lastPieceId=d.getData().id;c=d.getNextBar(a);var e=0;null!==c&&(e=c.first);AJAX.GET(window.location.pathname+
"?p="+d.getData().id+"&v="+e)}var g=c.p||"default";a=parseInt(c.v)||0;var l=null;"unhandledEvent"in c&&c.lastPage===App.getPagePath(IndexPage)&&(l=c.unhandledEvent);b.initialize();f.initialize();d=MusicStorageManager.getPiece(g);null!==d?e(l):(LoadingIconManager.show(),AJAX.GET(App.getPiecesPath()+g+".json",function(a){d=Piece.createFromString(a);MusicStorageManager.setPiece(d);e(l);LoadingIconManager.hide()},function(a){alert(Locale.getPieceLoadingFailureNotice(g));window.location=App.getPagePath(CatalogPage)}))},
draw:function(){null!==d&&b.reDraw()},getPath:function(){return"index.html"}}}(),LoadingIconManager=function(){var d=0,a=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){100<(new Date).getTime()-d&&a.classList.remove("hidden")},100)},hide:function(){a.classList.add("hidden");d=(new Date).getTime()}}}(),Locale=function(){function d(){if("language"in localStorage&&0<=b.indexOf(localStorage.language))c=localStorage.language;else{var a=navigator.languages&&navigator.languages[0]||
navigator.language||navigator.userLanguage,a=a.toLowerCase();c=0<=b.indexOf(a)?a:"en"}}function a(a,b){var e;void 0===b&&(b=c);e=b in a?a[b]:a.en;for(var d=2;d<arguments.length;d++)e=e.replace("{"+(d-1)+"}",arguments[d]);return e}function f(a,b){if(null===a)return"";var c=a.getData().descriptions,e=c.en;c.hasOwnProperty(b)&&(e=c[b]);return e}var b=["en","zh-cn"],c="en",e={en:"HeliMusic","zh-cn":"\u55e8\u4e50"},g={en:"Viola","zh-cn":"\u4e2d\u63d0\u7434"},l={en:"More resources from {1}","zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 {1}"},
h={en:"Cannot load piece {1} from {2}. Please choose a new one.","zh-cn":"\u65e0\u6cd5\u4ece{2}\u4e0b\u8f7d\u66f2\u76ee{1}\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},m={en:"Share <b>{1}</b> to your friends using buttons above or your browser's sharing functions!","zh-cn":"\u4f7f\u7528\u4e0a\u9762\u7684\u6309\u94ae\u6216\u8005\u6d4f\u89c8\u5668\u7684\u5206\u4eab\u529f\u80fd\u628a{1}\u5206\u4eab\u7ed9\u4f60\u7684\u670b\u53cb\uff01"};d();return{checkLanguage:d,getProjectName:function(b){return a(e,
b)},getApplicationTitle:function(b){return a(g,b)},getPrintFooter:function(b){return a(l,b,window.location.hostname)},getTranslation:a,getPieceLoadingFailureNotice:function(b,c){return a(h,c,b,App.getPiecesPath())},getSharingTitle:function(b,c){return a(m,c,f(b))},getPieceDescription:f}}();
function MusicPlayer(d){function a(a){for(var c=a.first,e=[],d=0;d<a.verticals.length;d++){for(var f=[],k=0;k<a.verticals[d].notes.length;k++)f.push({color:"black",size:"1.0"});e.push(f)}return{isOnBar:function(a){return c===a.first},changeNotesSize:function(a,b,c){for(var d=0;d<b.length;d++)e[a][b[d]].size=c},changeNotesColor:function(a,b,c){for(var d=0;d<b.length;d++)e[a][b[d]].color=c},drawAllOrnaments:function(){for(var a=0<=navigator.userAgent.toLowerCase().indexOf("firefox"),c=0;c<e.length;c++)for(var d=
0;d<e[c].length;d++){if("1.0"!==e[c][d].size&&!a){var f=b(c,[d]);f[0].style.transformOrigin="50% 50%";f[0].style.transform="scale("+e[c][d].size+")"}"black"!==e[c][d].color&&(f=b(c,[d]),f[0].setAttribute("fill",e[c][d].color))}}}}function f(){e.innerHTML="";var a=new Vex.Flow.Renderer(e,Vex.Flow.Renderer.Backends.SVG);context=a.getContext();a.resize(e.clientWidth,e.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function b(a,b){for(var c=document.querySelectorAll("#vf-"+
l[a].attrs.id+" g.vf-notehead path"),e=[],d=0;d<b.length;d++)e.push(c[b[d]]);return e}function c(a){var b=g.getBar(a);return a-b.first}var e=d,g=null,l=[],h=0,m=null;return{setPiece:function(a){g=a;h=0},setFocus:function(a){h=a},display:function(){var b=f(),c=new Vex.Flow.Stave(4,64,b.width-8),e=g.getBar(h);c.addClef(e.clef).addTimeSignature(e.time).addKeySignature(VFUtility.toVFKeySignature(e.key));c.setMeasure(g.getData().bars.indexOf(e)+1);c.setContext(b).draw();l=[];for(var d={},z=0;z<e.verticals.length;z++)l.push(VFUtility.prepareStaveNote(e.key,
e.clef,e.verticals[z],d));d=Vex.Flow.Beam.generateBeams(l);Vex.Flow.Formatter.FormatAndDraw(b,c,l);d.forEach(function(a){a.setContext(b).draw()});null!==m&&m.isOnBar(e)?m.drawAllOrnaments():m=new a(e)},changeNotesSize:function(a,e,d){d=void 0===d?"1.0":d;if(!(0<=navigator.userAgent.toLowerCase().indexOf("firefox"))){a=c(a);for(var f=b(a,e),k=0;k<f.length;k++)f[k].style.transformOrigin="50% 50%",f[k].style.transform="scale("+d+")";m.changeNotesSize(a,e,d)}},changeNotesColor:function(a,e,d){d=void 0===
d?"black":d;a=c(a);for(var f=b(a,e),k=0;k<f.length;k++)f[k].setAttribute("fill",d);m.changeNotesColor(a,e,d)}}}var MusicStorageManager=function(){return{getPiece:function(d){d=localStorage.getItem("_piece_"+d);return null===d?null:Piece.createFromString(d)},setPiece:function(d){d=d.getData();localStorage.setItem("_piece_"+d.id,JSON.stringify(d))}}}();
function MusicViewer(d){function a(){c.innerHTML="";var a=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===c.tagName.toUpperCase()&&(a=Vex.Flow.Renderer.Backends.CANVAS);a=new Vex.Flow.Renderer(c,a);h=a.getContext();a.resize(c.clientWidth,c.clientHeight);h.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return h}function f(a,b,d){b=void 0===b?0:b;d=void 0===d?0:d;var f={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};b=(0===b?c.clientWidth:b)-8;var g=0===d?c.clientHeight:d;d=Math.floor(g/160);for(var g=40+.33*(g-160*d),k=e.getData(),h=[],p=0;p<d;p++)h.push({height:160,staves:[]});for(p=0;p<d&&a<k.bars.length;p++){for(var n=[],m="",u="",x="",q=a;q<k.bars.length;q++){var v=k.bars[q],r={clef:"",key:"",time:"",verticals:v.verticals.length,size:0};v.clef!==m&&(m=r.clef=v.clef,r.size+=25);v.key!==u&&
(u=r.key=v.key,r.size+=8*f[v.key]);v.time!==x&&(x=r.time=v.time,r.size+=14);r.size+=50*r.verticals;n.push(r)}u=0;m=k.bars.length-a;for(q=a;q<k.bars.length;q++)if(u+=n[q-a].size,u>b){m=q>a?q-a:1;break}for(q=u=0;q<m;q++)u+=n[q].size;for(q=x=0;q<m;q++)l=v=q+a,r=n[q].size/u*b,h[p].staves.push({barIndex:v,left:x+4,width:r}),x+=r;a+=m}return{rows:h,staveOffsetTop:g}}function b(a){var b=e.getData();a=0==a?b.bars.length-1:a-1;for(var c=0,d=0;d<b.bars.length;d++){for(var g=c,k=f(c),h=0;h<k.rows.length;h++)for(var l=
0;l<k.rows[h].length;l++){if(a===k.rows[h][l].barIndex)return 0==h+l?g:c;c=k.rows[h][l].barIndex}c+=1}}var c=d,e=null,g=0,l=0,h=null,m=null;a();return{setPiece:function(a){e=a},setFirstBar:function(a){g=a},display:function(){a();var b=e.getData(),c=f(g),d=c.staveOffsetTop;m=c;for(var l=0;l<c.rows.length;l++){for(var z="",B="",C="",w=0;w<c.rows[l].staves.length;w++){var t=b.bars[c.rows[l].staves[w].barIndex],A=new Vex.Flow.Stave(c.rows[l].staves[w].left,d,c.rows[l].staves[w].width);0==w&&A.setMeasure(c.rows[l].staves[w].barIndex+
1);t.clef!==z&&(z=t.clef,A.addClef(t.clef));t.key!==B&&(B=t.key,A.addKeySignature(VFUtility.toVFKeySignature(t.key)));t.time!==C&&(C=t.time,A.addTimeSignature(t.time));A.setContext(h).draw();for(var u=[],x={},q=0;q<t.verticals.length;q++)u.push(VFUtility.prepareStaveNote(t.key,t.clef,t.verticals[q],x));t=Vex.Flow.Beam.generateBeams(u);Vex.Flow.Formatter.FormatAndDraw(h,A,u);t.forEach(function(a){a.setContext(h).draw()})}d+=c.rows[l].height}},getLastBar:function(){return l},getCurrentLayout:function(){return m},
getFirstBarInPreviousPage:b,getFirstBarInLastPage:function(){return b(0)}}}
var Note=function(){function d(b){var c={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};b=a(b);var d=b.natural+b.accidental;return c.hasOwnProperty(d)?(c=c[d],c[1]+12*(b.octave-c[0])):-1}function a(a){var b={natural:"",octave:-1,accidental:""};if(0>=a.length)return b;b.natural=a[0];b.octave=parseInt(a.substring(a.length-1,a.length));b.accidental="";b.accidentalASCII="";2<a.length&&(1==a.indexOf("\u266d")?(b.accidental="\u266d",b.accidentalASCII="b"):1==a.indexOf("\u266f")?(b.accidental="\u266f",b.accidentalASCII="#"):1==a.indexOf("\ud834\udd2b")?
(b.accidental="\ud834\udd2b",b.accidentalASCII="bb"):1==a.indexOf("\ud834\udd2a")&&(b.accidental="\ud834\udd2a",b.accidentalASCII="##"));return b}function f(a,d){var c=b[a],e="";"\u266d"==c.sharpflat&&"BEADGCF".indexOf(d)<c.amount?e="\u266d":"\u266f"==c.sharpflat&&"FCGDAEB".indexOf(d)<c.amount&&(e="\u266f");return e}var b={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:d,getNoteFrequency:function(a){a=d(a);"DoubleBass"===Locale.getApplicationTitle("en")&&
(a-=12);return 0>a?0:440*Math.pow(Math.pow(2,1/12),a-49)},getNoteDetail:a,getDefaultAccidental:f,getDefaultAccidentalASCII:function(a,b){return f(a,b).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(a){a=a.substring(0,1);return 0<="GAB".indexOf(a)?a+"3":a+"4"}}}(),PDFConverter=function(d,a){function f(){var a=b.querySelectorAll("div.page");g+=1;g>=a.length?c(e):(e.addPage(),e.addHTML(a[g],f))}var b=d,c=a,e=null,g=0;return{convert:function(){var a=b.querySelectorAll("div.page");
0>=a.length?c(null):(e=new jsPDF("p","pt","a4"),g=0,e.addHTML(a[0],f))}}},PDFPage=function(){function d(){LoadingIconManager.show();var a=document.querySelector("body > div#pdfRenderer");a.style.display="block";var d=new PDFRenderer(a),b=MusicStorageManager.getPiece(App.getDefaultPieceId());null===b?alert("Cannot show PDF"):(d.render(b),(new PDFConverter(a,function(b){a.style.display="none";LoadingIconManager.hide();window.top.pdfdata=b.output("arraybuffer");document.querySelector("body > div#container > div#wrapper").innerHTML=
'<embed src="/pdf.js/viewer.html">'})).convert(b))}return{initialize:function(a){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){window.location=App.getPiecePath()});d();a=App.getPiecePath();history.replaceState("","",a)},draw:function(){},getPath:function(){return"pdf.html"}}}(),PDFRenderer=function(d){return{render:function(a){d.innerHTML="";for(var f=-1,b=-1,c=0;8>c;c++){b+=1;f+=1;if(f>=a.getData().bars.length)break;var e;e=b;var g=
document.createElement("div");g.classList.add("page");g.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===e?"":"hide");d.appendChild(g);e=g;e.querySelector("div.title").innerHTML=Locale.getTranslation(a.getData().descriptions);e.querySelector("div.footer").innerHTML=Locale.getPrintFooter();e=new MusicViewer(e.querySelector("canvas.music"));e.setPiece(a);e.setFirstBar(f);e.display();f=e.getLastBar()}}}},Piece=
function(){function d(a){function d(a){for(var c=0;c<b.bars.length;c++)if(b.bars[c].first<=a&&a<b.bars[c].first+b.bars[c].verticals.length)return b.bars[c];return null}var b=JSON.parse(a);return{getData:function(){return b},getBar:d,getPreBar:function(a){a=d(a);return null===a?null:d(a.first-1)},getNextBar:function(a){a=d(a);return null===a?null:d(a.first+a.verticals.length)},getTotalVerticals:function(){var a=b.bars[b.bars.length-1];return a.first+a.verticals.length}}}return{createFromString:function(a){return new d(a)}}}(),
SharePage=function(){function d(b){var c=b.target.id;c in f?(b=f[c].replace("URL",encodeURIComponent(a.url)).replace("DESCRIPTION",encodeURIComponent(a.description)).replace("VIA","Metronome"),window.open(b,"_blank")):"mail"==c?(b="mailto:?subject="+encodeURIComponent(a.description)+"&body="+encodeURIComponent(a.url),window.open(b,"_blank")):"link"==b.target.id&&(b=document.querySelector("body > input#copy"),b.classList.remove("hidden"),b.value=a.url,b.select(),document.execCommand("copy"),b.classList.add("hidden"));
window.location=App.getPiecePath()}var a={url:"",description:""},f={qq:"http://v.t.qq.com/share/share.php?url=URL&title=DESCRIPTION",weibo:"http://service.weibo.com/share/share.php?url=URL&title=DESCRIPTION",qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=URL&title=DESCRIPTION",facebook:"https://www.facebook.com/sharer/sharer.php?u=URL&t=DESCRIPTION",twitter:"https://twitter.com/intent/tweet?text=DESCRIPTION&url=URL&via=VIA"};return{initialize:function(b){b=App.getDefaultPieceId();
var c=MusicStorageManager.getPiece(b);document.querySelector("body > div#container > div#share > div#title").innerHTML=Locale.getSharingTitle(c);c=App.getHost()+App.getPiecePath();history.replaceState("","",c);a.url=c;c=MusicStorageManager.getPiece(b);a.description=Locale.getPieceDescription(c)+", "+Locale.getApplicationTitle()+", "+Locale.getProjectName();b=document.querySelectorAll("body > div#container > div#share > div#services > div.service");for(c=0;c<b.length;c++)b[c].addEventListener("click",
d);document.querySelector("body > div#container > div#controls > div#ok").addEventListener("click",function(){window.location=App.getPiecePath()})},draw:function(){},getPath:function(){return"share.html"}}}(),StringInstrumentSimulator=function(){function d(){if(null!=a)return!0;if("AudioContext"in window)a=new AudioContext;else if("webkitAudioContext"in window)a=new webkitAudioContext;else return a=null,!1;f=a.createGain();f.gain.value=0;f.connect(a.destination);return!0}var a=null,f=null,b=[];return{play:function(c){d();
for(var e=0;e<c.length;e++)if(!(0>=c[e])){var g=a.createOscillator();g.frequency.value=c[e];var l=g,h=Math.PI,m=new Float32Array(12),k=new Float32Array(12),p=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],h=[0,0,h/2,0,h/2,0,h/2,0,h/2,0,h/2,0];m[0]=0;k[0]=0;for(var n=1;12>n;n++)m[n]=p[n]*p[0]*Math.cos(h[n]),k[n]=p[n]*p[0]*Math.sin(h[n]);m=a.createPeriodicWave(k,m);l.setPeriodicWave(m);g.connect(f);g.start(0);b.push(g)}f.gain.linearRampToValueAtTime(0,a.currentTime);f.gain.linearRampToValueAtTime(.5,
a.currentTime+.05)},stop:function(){d();f.gain.linearRampToValueAtTime(.5,a.currentTime);f.gain.linearRampToValueAtTime(0,a.currentTime+.05);setTimeout(function(){for(var a=0;a<b.length;a++){var d=b[a];d.stop(0);d.disconnect(f)}b=[]},50)},playAndStop:function(a,b,d){}}}(),VFUtility=function(){function d(a){a=Note.getNoteDetail(a);return a.natural+a.accidentalASCII+"/"+a.octave}return{toVFKeySignature:function(a){a!==a.toUpperCase()&&(a=a.toUpperCase()+"m");return a=a.replace(Note.flat,"b").replace(Note.sharp,
"#")},prepareStaveNote:function(a,f,b,c){for(var e,g,l,h=[],m=0;m<b.notes.length;m++)h.push(d(b.notes[m]));f=new Vex.Flow.StaveNote({clef:f,keys:h,duration:b.duration});if("r"!==b.duration.substr(-1))for(m=0;m<b.notes.length;m++)a:{var k=a,h=f,p=m,n=c;l=h.keys[p];var y=l.indexOf("/");e=l.substring(0,1);g=parseInt(l.substring(y+1));l=l.substring(1,y);y=e+g;g=!1;if(n.hasOwnProperty(y))if(n[y]==l)break a;else g=!0;n[y]=l;"bb"==l?h.addAccidental(p,new Vex.Flow.Accidental("bb")):"##"==l?h.addAccidental(p,
new Vex.Flow.Accidental("##")):(e=Note.getDefaultAccidentalASCII(k,e),"#"==e?"#"==l?g&&h.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==l?h.addAccidental(p,new Vex.Flow.Accidental("b")):h.addAccidental(p,new Vex.Flow.Accidental("n")):"b"==e?"#"==l?h.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==l?g&&h.addAccidental(p,new Vex.Flow.Accidental("b")):h.addAccidental(p,new Vex.Flow.Accidental("n")):"#"==l?h.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==l?h.addAccidental(p,new Vex.Flow.Accidental("b")):
g&&h.addAccidental(p,new Vex.Flow.Accidental("n")))}a=b.duration;"dd"==a.substring(a.length-2)?f.addDotToAll().addDotToAll():(b=b.duration,"d"==b.substring(b.length-1)&&f.addDotToAll());return f}}}(),App=function(){function d(){f.draw()}var a={},f=null;return{initialize:function(b){b=void 0===b?{}:b;Header.initialize();for(var c=window.location.pathname,e=window.location.search,e=("?"===e[0]?e.substr(1):e).split("&"),g=0;g<e.length;g++){var l=e[g].split("=");b[decodeURIComponent(l[0])]=decodeURIComponent(l[1]||
"")}b.lastPage=sessionStorage.lastPage||null;a=b;f=0===c.indexOf("/va/"+CatalogPage.getPath())?CatalogPage:0===c.indexOf("/va/"+AboutPage.getPath())?AboutPage:0===c.indexOf("/va/"+PDFPage.getPath())?PDFPage:0===c.indexOf("/va/"+SharePage.getPath())?SharePage:IndexPage;Header.highlight(f);f.initialize(b);sessionStorage.setItem("lastPage","/va/"+f.getPath());window.addEventListener("resize",d)},getParams:function(){return a},resize:d,getHost:function(){var a=window.location.href;return a.substring(0,
a.indexOf("/",8))},getPagePath:function(a){return"/va/"+(void 0===a?null:a).getPath()},getPiecePath:function(a){a=void 0===a?null:a;a=null===a?App.getDefaultPieceId():a.getData().id;return App.getPagePath(IndexPage)+"?p="+a},getPiecesPath:function(){return"/va/pieces/"},getDefaultPieceId:function(){var b=a,c="default";b.hasOwnProperty("p")?c=b.p:"lastPieceId"in sessionStorage&&(c=sessionStorage.lastPieceId);return c}}}();
