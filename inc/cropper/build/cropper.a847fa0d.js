!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=10)}([function(t,e){!function(){t.exports=this.wp.media}()},function(t,e){!function(){t.exports=this.wp.template}()},function(t,e){!function(){t.exports=this.wp.ajax}()},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e,n){var i;!function(){"use strict";var r={};function o(t,e,n){for(var i=n.data,r=n.width,o=~~t.x,a=~~(t.x+t.width),s=~~t.y,l=~~(t.y+t.height),h=255*t.weight,c=s;c<l;c++)for(var d=o;d<a;d++){i[4*(c*r+d)+3]+=h}}function a(t,e,n){for(var i={detail:0,saturation:0,skin:0,boost:0,total:0},r=e.data,o=t.scoreDownSample,a=1/o,l=e.height*o,h=e.width*o,c=e.width,d=0;d<l;d+=o)for(var u=0;u<h;u+=o){var p=4*(~~(d*a)*c+~~(u*a)),f=s(t,n,u,d),m=r[p+1]/255;i.skin+=r[p]/255*(m+t.skinBias)*f,i.detail+=m*f,i.saturation+=r[p+2]/255*(m+t.saturationBias)*f,i.boost+=r[p+3]/255*f}return i.total=(i.detail*t.detailWeight+i.skin*t.skinWeight+i.saturation*t.saturationWeight+i.boost*t.boostWeight)/(n.width*n.height),i}function s(t,e,n,i){if(e.x>n||n>=e.x+e.width||e.y>i||i>=e.y+e.height)return t.outsideImportance;n=(n-e.x)/e.width,i=(i-e.y)/e.height;var r=2*m(.5-n),o=2*m(.5-i),a=Math.max(r-1+t.edgeRadius,0),s=Math.max(o-1+t.edgeRadius,0),l=(a*a+s*s)*t.edgeWeight,h=1.41-g(r*r+o*o);return t.ruleOfThirds&&(h+=1.2*Math.max(0,h+l+.5)*(b(r)+b(o))),h+l}function l(t,e,n,i){var r=g(e*e+n*n+i*i),o=e/r-t.skinColor[0],a=n/r-t.skinColor[1],s=i/r-t.skinColor[2];return 1-g(o*o+a*a+s*s)}function h(t,e,n){this.width=t,this.height=e,this.data=n?new Uint8ClampedArray(n):new Uint8ClampedArray(t*e*4)}function c(t,e){for(var n=t.data,i=t.width,r=Math.floor(t.width/e),o=Math.floor(t.height/e),a=new h(r,o),s=a.data,l=1/(e*e),c=0;c<o;c++)for(var d=0;d<r;d++){for(var u=4*(c*r+d),p=0,f=0,m=0,g=0,v=0,b=0,w=0;w<e;w++)for(var y=0;y<e;y++){var x=4*((c*e+w)*i+(d*e+y));p+=n[x],f+=n[x+1],m+=n[x+2],g+=n[x+3],v=Math.max(v,n[x]),b=Math.max(b,n[x+1])}s[u]=p*l*.5+.5*v,s[u+1]=f*l*.7+.3*b,s[u+2]=m*l,s[u+3]=g*l}return a}function d(t,e){var n=document.createElement("canvas");return n.width=t,n.height=e,n}function u(t){return{open:function(e){var n=e.naturalWidth||e.width,i=e.naturalHeight||e.height,o=t(n,i),a=o.getContext("2d");return!e.naturalWidth||e.naturalWidth==e.width&&e.naturalHeight==e.height?(o.width=e.width,o.height=e.height):(o.width=e.naturalWidth,o.height=e.naturalHeight),a.drawImage(e,0,0),r.Promise.resolve(o)},resample:function(e,n,i){return Promise.resolve(e).then(function(e){var o=t(~~n,~~i);return o.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,o.width,o.height),r.Promise.resolve(o)})},getData:function(t){return Promise.resolve(t).then(function(t){var e=t.getContext("2d").getImageData(0,0,t.width,t.height);return new h(t.width,t.height,e.data)})}}}r.Promise="undefined"!=typeof Promise?Promise:function(){throw new Error("No native promises and smartcrop.Promise not set.")},r.DEFAULTS={width:0,height:0,aspect:0,cropWidth:0,cropHeight:0,detailWeight:.2,skinColor:[.78,.57,.44],skinBias:.01,skinBrightnessMin:.2,skinBrightnessMax:1,skinThreshold:.8,skinWeight:1.8,saturationBrightnessMin:.05,saturationBrightnessMax:.9,saturationThreshold:.4,saturationBias:.2,saturationWeight:.1,scoreDownSample:8,step:8,scaleStep:.1,minScale:1,maxScale:1,edgeRadius:.4,edgeWeight:-20,outsideImportance:-.5,boostWeight:100,ruleOfThirds:!0,prescale:!0,imageOperations:null,canvasFactory:d,debug:!1},r.crop=function(t,e,n){var i=v({},r.DEFAULTS,e);i.aspect&&(i.width=i.aspect,i.height=1),null===i.imageOperations&&(i.imageOperations=u(i.canvasFactory));var s=i.imageOperations,d=1,m=1;return s.open(t,i.input).then(function(t){return i.width&&i.height&&(d=p(t.width/i.width,t.height/i.height),i.cropWidth=~~(i.width*d),i.cropHeight=~~(i.height*d),i.minScale=p(i.maxScale,f(1/d,i.minScale)),!1!==i.prescale&&((m=p(f(256/t.width,256/t.height),1))<1?(t=s.resample(t,t.width*m,t.height*m),i.cropWidth=~~(i.cropWidth*m),i.cropHeight=~~(i.cropHeight*m),i.boost&&(i.boost=i.boost.map(function(t){return{x:~~(t.x*m),y:~~(t.y*m),width:~~(t.width*m),height:~~(t.height*m),weight:t.weight}}))):m=1)),t}).then(function(t){return s.getData(t).then(function(t){for(var e=function(t,e){var n={},i=new h(e.width,e.height);(function(t,e){for(var n=t.data,i=e.data,r=t.width,o=t.height,a=0;a<o;a++)for(var s=0;s<r;s++){var l,h=4*(a*r+s);l=0===s||s>=r-1||0===a||a>=o-1?y(n,h):4*y(n,h)-y(n,h-4*r)-y(n,h-4)-y(n,h+4)-y(n,h+4*r),i[h+1]=l}})(e,i),function(t,e,n){for(var i=e.data,r=n.data,o=e.width,a=e.height,s=0;s<a;s++)for(var h=0;h<o;h++){var c=4*(s*o+h),d=w(i[c],i[c+1],i[c+2])/255,u=l(t,i[c],i[c+1],i[c+2]),p=u>t.skinThreshold,f=d>=t.skinBrightnessMin&&d<=t.skinBrightnessMax;r[c]=p&&f?(u-t.skinThreshold)*(255/(1-t.skinThreshold)):0}}(t,e,i),function(t,e,n){for(var i=e.data,r=n.data,o=e.width,a=e.height,s=0;s<a;s++)for(var l=0;l<o;l++){var h=4*(s*o+l),c=w(i[h],i[h+1],i[h+2])/255,d=x(i[h],i[h+1],i[h+2]),u=d>t.saturationThreshold,p=c>=t.saturationBrightnessMin&&c<=t.saturationBrightnessMax;r[h+2]=p&&u?(d-t.saturationThreshold)*(255/(1-t.saturationThreshold)):0}}(t,e,i),function(t,e){if(!t.boost)return;for(var n=e.data,i=0;i<e.width;i+=4)n[i+3]=0;for(i=0;i<t.boost.length;i++)o(t.boost[i],t,e)}(t,i);for(var r=c(i,t.scoreDownSample),s=-1/0,d=null,u=function(t,e,n){for(var i=[],r=p(e,n),o=t.cropWidth||r,a=t.cropHeight||r,s=t.maxScale;s>=t.minScale;s-=t.scaleStep)for(var l=0;l+a*s<=n;l+=t.step)for(var h=0;h+o*s<=e;h+=t.step)i.push({x:h,y:l,width:o*s,height:a*s});return i}(t,e.width,e.height),f=0,m=u.length;f<m;f++){var g=u[f];g.score=a(t,r,g),g.score.total>s&&(d=g,s=g.score.total)}n.topCrop=d,t.debug&&d&&(n.crops=u,n.debugOutput=i,n.debugOptions=t,n.debugTopCrop=v({},n.topCrop));return n}(i,t),r=e.crops||[e.topCrop],s=0,d=r.length;s<d;s++){var u=r[s];u.x=~~(u.x/m),u.y=~~(u.y/m),u.width=~~(u.width/m),u.height=~~(u.height/m)}return n&&n(e),e})})},r.isAvailable=function(t){if(!r.Promise)return!1;if((t?t.canvasFactory:d)===d&&!document.createElement("canvas").getContext("2d"))return!1;return!0},r.importance=s,r.ImgData=h,r._downSample=c,r._canvasImageOperations=u;var p=Math.min,f=Math.max,m=Math.abs,g=Math.sqrt;function v(t){for(var e=1,n=arguments.length;e<n;e++){var i=arguments[e];if(i)for(var r in i)t[r]=i[r]}return t}function b(t){return t=16*((t-1/3+1)%2*.5-.5),Math.max(1-t*t,0)}function w(t,e,n){return.5126*n+.7152*e+.0722*t}function y(t,e){return w(t[e],t[e+1],t[e+2])}function x(t,e,n){var i=f(t/255,e/255,n/255),r=p(t/255,e/255,n/255);if(i===r)return 0;var o=i-r;return(i+r)/2>.5?o/(2-i-r):o/(i+r)}void 0===(i=function(){return r}.call(e,n,e,t))||(t.exports=i),e.smartcrop=r,t.exports=r}()},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(8)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'/* Hide built in image editor */\n.wp-core-ui .edit-attachment,\n.wp-core-ui .button[id^="imgedit-open-btn-"] {\n  display: none; }\n\n.media-image-edit {\n  display: flex;\n  align-items: stretch;\n  max-height: 100%; }\n\n.media-frame.mode-edit-image .media-image-edit {\n  margin-right: 30%; }\n\n.media-frame.mode-edit-image .media-sidebar {\n  width: 30%;\n  box-sizing: border-box; }\n\n.hm-thumbnail-sizes {\n  flex: 0 0 200px;\n  max-height: 100%;\n  overflow: auto;\n  background: #fafafa; }\n  .hm-thumbnail-sizes h2 {\n    margin: 16px;\n    padding: 0; }\n  .hm-thumbnail-sizes__list {\n    margin: 0;\n    padding: 0; }\n    .hm-thumbnail-sizes__list li {\n      width: 100%;\n      margin: 0;\n      padding: 0; }\n    .hm-thumbnail-sizes__list li:first-child button {\n      border-top: 0; }\n    .hm-thumbnail-sizes__list button {\n      background: none;\n      border: 0;\n      border-right: 1px solid #ddd;\n      margin: 0;\n      padding: 16px;\n      box-sizing: border-box;\n      cursor: pointer;\n      display: block;\n      width: 100%;\n      text-align: left; }\n    .hm-thumbnail-sizes__list button.current {\n      border: 1px solid #ddd;\n      border-width: 1px 0;\n      padding: 15px 16px;\n      background: #fff;\n      position: relative; }\n    .hm-thumbnail-sizes__list h3 {\n      text-transform: capitalize;\n      margin: 0 0 8px;\n      padding: 0; }\n      .hm-thumbnail-sizes__list h3 small {\n        font-weight: 300;\n        white-space: nowrap; }\n    .hm-thumbnail-sizes__list img {\n      display: block;\n      width: auto;\n      height: auto;\n      max-width: 100%;\n      max-height: 80px; }\n\n.hm-thumbnail-editor {\n  padding: 16px;\n  overflow: auto;\n  flex: 1; }\n  .hm-thumbnail-editor h2 {\n    margin: 0 0 16px; }\n    .hm-thumbnail-editor h2 small {\n      font-weight: normal;\n      white-space: nowrap; }\n  .hm-thumbnail-editor__image-crop {\n    position: relative; }\n  .hm-thumbnail-editor__image img {\n    display: block;\n    max-width: 100%;\n    max-height: 500px;\n    width: auto;\n    height: auto; }\n  .hm-thumbnail-editor__actions {\n    margin: 16px 0 8px; }\n  .hm-thumbnail-editor .imgedit-wait {\n    position: static;\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n    float: right;\n    margin: 4px 0 4px 10px; }\n    .hm-thumbnail-editor .imgedit-wait::before {\n      margin: 0;\n      position: static; }\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),a=null,s=0,l=[],h=n(9);function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function u(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(t.insertAt.before,n);n.insertBefore(e,r)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return m(e,t.attrs),u(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=s++;n=a||(a=f(e)),i=b.bind(null,n,l,!1),r=b.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),u(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=h(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return c(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&c(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(1),a=n.n(o),s=r.a.View.extend({tagName:"div",className:"hm-thumbnail-sizes",template:a()("hm-thumbnail-sizes"),events:{"click button":"setSize"},initialize:function(){this.listenTo(this.model,"change:sizes",this.render)},setSize:function(t){this.model.set({size:t.currentTarget.dataset.size}),t.currentTarget.parentNode.parentNode.querySelectorAll("button").forEach(function(t){t.className=""}),t.currentTarget.className="current"}}),l=n(2),h=n.n(l),c=n(3),d=n.n(c),u=n(4),p=n.n(u),f=d.a,m=r.a.View.extend({tagName:"div",className:"hm-thumbnail-editor",template:a()("hm-thumbnail-editor"),events:{"click .button-apply-changes":"saveCrop","click .button-reset":"reset"},initialize:function(){this.listenTo(this.model,"change:size",this.loadEditor),this.on("ready",this.loadEditor),window.imageEdit&&(window.imageEdit._view=this)},loadEditor:function(){this.render();var t=this.model.get("size");"full"!==t&&"full-orig"!==t&&this.initCropper()},refresh:function(){this.update()},back:function(){},save:function(){this.update()},update:function(){var t=this;this.model.fetch({success:function(){return t.loadEditor()},error:function(){}})},reset:function(){var t=this,e=f('img[id^="image-preview-"]'),n=this.model.get("size"),i=this.model.get("sizes")[n]||null;if(i){var r=i.cropData;r.hasOwnProperty("x")?this.setSelection(r):p.a.crop(e.get(0),{width:i.width,height:i.height}).then(function(e){var n=e.topCrop;t.setSelection(n)})}},saveCrop:function(){var t=this,e=this.cropper.getSelection();this.onSelectStart(),h.a.post("hm_save_crop",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),crop:{x:e.x1,y:e.y1,width:e.width,height:e.height},size:this.model.get("size")}).always(function(){t.onSelectEnd()}).done(function(){t.update()}).fail(function(t){return console.log(t)})},setSelection:function(t){if(this.onSelectStart(),!t||void 0===t.x)return this.cropper.setOptions({show:!0}),void this.cropper.update();this.cropper.setSelection(t.x,t.y,t.x+t.width,t.y+t.height),this.cropper.setOptions({show:!0}),this.cropper.update()},onSelectStart:function(){f(".button-apply-changes, .button-reset").attr("disabled","disabled")},onSelectEnd:function(){f(".button-apply-changes, .button-reset").removeAttr("disabled")},onSelectChange:function(){f(".button-apply-changes:disabled, .button-reset:disabled").removeAttr("disabled")},initCropper:function(){var t=this,e=f('img[id^="image-preview-"]'),n=e.parent(),i=this.model.get("size"),r=this.model.get("sizes")[i]||null;if(r){var o=r.width+":"+r.height;this.cropper=e.imgAreaSelect({parent:n,instance:!0,handles:!0,keys:!0,imageWidth:this.model.get("width"),imageHeight:this.model.get("height"),minWidth:r.width,minHeight:r.height,aspectRatio:o,onInit:function(e){f(e).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.reset()},onSelectStart:function(){t.onSelectStart.apply(t,arguments)},onSelectEnd:function(){t.onSelectEnd.apply(t,arguments)},onSelectChange:function(){t.onSelectChange.apply(t,arguments)}})}}}),g=r.a.View.extend({template:a()("hm-thumbnail-container"),initialize:function(){this.model.get("size")||this.model.set({size:"full"}),this.listenTo(this.model,"change:url",this.onUpdate),this.onUpdate()},onUpdate:function(){this.model.get("id")&&!this.model.get("url")?this.views.set([new r.a.view.Spinner]):this.views.set([new s({controller:this.controller,model:this.model,priority:10}),new m({controller:this.controller,model:this.model,priority:50})])}});g.load=function(t){return new g({controller:t,model:t.model,el:document.querySelector(".media-image-edit")})};var v=g,b=(n(5),r.a.view.MediaFrame);r.a.view.MediaFrame=b.extend({initialize:function(){b.prototype.initialize.apply(this,arguments),r.a.events.trigger("frame:init",this)}});var w=r.a.view.MediaFrame.Select;r.a.view.MediaFrame.Select=w.extend({initialize:function(t){var e=this;w.prototype.initialize.apply(this,arguments);var n=Object.assign({},t.button||{});r.a.events.trigger("frame:select:init",this),this.on("activate",function(){e.$el.hasClass("hide-menu")&&e.lastState()&&e.lastState().set("menu",!1)}),this.on("toolbar:create:select",function(){n&&(e.options.mutableButton=Object.assign({},e.options.button),e.options.button=Object.assign({},n))})}}),r.a.events.on("frame:init",function(){r.a.view.Attachment.Details.TwoColumn=r.a.view.Attachment.Details.TwoColumn.extend({template:a()("hm-attachment-details-two-column"),initialize:function(){var t=this;r.a.view.Attachment.Details.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:url",function(){t.render(),v.load(t.controller)}),this.controller.on("ready refresh",function(){return v.load(t.controller)})}})}),r.a.events.on("frame:select:init",function(t){if(t.states.where({id:"library"}).length&&!t.states.where({id:"edit"}).length){var e=t.state("library"),n=t.states.add({id:"edit",title:"Edit image",router:!1,menu:!1,uploader:!1,selection:t.state("library").get("selection"),library:t.state("library").get("library")});n.on("activate",function(){t.$el.toggleClass("mode-select mode-edit-image"),t.content.mode("edit"),t.toolbar.mode("edit")}),n.on("deactivate",function(){t.$el.toggleClass("mode-select mode-edit-image")}),n.sidebar=new r.a.view.Sidebar({controller:t}),t.on("content:create:edit",function(e){e.view=[new v({tagName:"div",className:"media-image-edit",controller:t,model:t.state("edit").get("selection").first()}),n.sidebar]}),t.on("toolbar:create:edit",function(e){e.view=new r.a.view.Toolbar({controller:t,requires:{selection:!0},reset:!1,event:"select",items:{change:{text:"Change image",click:function(){t.setState(t.lastState())},priority:20,requires:{selection:!0}},apply:{style:"primary",text:"Select",click:function(){var e=t.options.mutableButton||t.options.button||{},n=e.close,i=e.event,r=e.reset,o=e.state;n&&t.close(),i&&t.state().trigger(i||"select"),o&&t.setState(o),r&&t.reset()},priority:10,requires:{selection:!0}}}})}),n.get("selection").on("selection:single",function(){t.setState("edit");var i=n.sidebar,o=n.get("selection").single();i.set("details",new r.a.view.Attachment.Details({controller:this.controller,model:o,priority:80})),i.set("compat",new r.a.view.AttachmentCompat({controller:this.controller,model:o,priority:120})),(e.has("display")?e.get("display"):e.get("displaySettings"))&&i.set("display",new r.a.view.Settings.AttachmentDisplay({controller:this.controller,model:this.model.display(o),attachment:o,priority:160,userSettings:this.model.get("displayUserSettings")})),"insert"===this.model.id&&i.$el.addClass("visible")}),n.get("selection").on("selection:unsingle",function(){t.setState("library")})}})}]));