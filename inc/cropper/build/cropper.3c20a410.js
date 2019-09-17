!function(t,e){for(var i in e)t[i]=e[i]}(this,function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=12)}([function(t,e){!function(){t.exports=this.wp.media}()},function(t,e){!function(){t.exports=this.wp.template}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.ajax}()},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e,i){var n;!function(){"use strict";var o={};function r(t,e,i){for(var n=i.data,o=i.width,r=~~t.x,a=~~(t.x+t.width),s=~~t.y,l=~~(t.y+t.height),h=255*t.weight,c=s;c<l;c++)for(var d=r;d<a;d++){n[4*(c*o+d)+3]+=h}}function a(t,e,i){for(var n={detail:0,saturation:0,skin:0,boost:0,total:0},o=e.data,r=t.scoreDownSample,a=1/r,l=e.height*r,h=e.width*r,c=e.width,d=0;d<l;d+=r)for(var u=0;u<h;u+=r){var p=4*(~~(d*a)*c+~~(u*a)),m=s(t,i,u,d),f=o[p+1]/255;n.skin+=o[p]/255*(f+t.skinBias)*m,n.detail+=f*m,n.saturation+=o[p+2]/255*(f+t.saturationBias)*m,n.boost+=o[p+3]/255*m}return n.total=(n.detail*t.detailWeight+n.skin*t.skinWeight+n.saturation*t.saturationWeight+n.boost*t.boostWeight)/(i.width*i.height),n}function s(t,e,i,n){if(e.x>i||i>=e.x+e.width||e.y>n||n>=e.y+e.height)return t.outsideImportance;i=(i-e.x)/e.width,n=(n-e.y)/e.height;var o=2*f(.5-i),r=2*f(.5-n),a=Math.max(o-1+t.edgeRadius,0),s=Math.max(r-1+t.edgeRadius,0),l=(a*a+s*s)*t.edgeWeight,h=1.41-g(o*o+r*r);return t.ruleOfThirds&&(h+=1.2*Math.max(0,h+l+.5)*(w(o)+w(r))),h+l}function l(t,e,i,n){var o=g(e*e+i*i+n*n),r=e/o-t.skinColor[0],a=i/o-t.skinColor[1],s=n/o-t.skinColor[2];return 1-g(r*r+a*a+s*s)}function h(t,e,i){this.width=t,this.height=e,this.data=i?new Uint8ClampedArray(i):new Uint8ClampedArray(t*e*4)}function c(t,e){for(var i=t.data,n=t.width,o=Math.floor(t.width/e),r=Math.floor(t.height/e),a=new h(o,r),s=a.data,l=1/(e*e),c=0;c<r;c++)for(var d=0;d<o;d++){for(var u=4*(c*o+d),p=0,m=0,f=0,g=0,v=0,w=0,b=0;b<e;b++)for(var x=0;x<e;x++){var y=4*((c*e+b)*n+(d*e+x));p+=i[y],m+=i[y+1],f+=i[y+2],g+=i[y+3],v=Math.max(v,i[y]),w=Math.max(w,i[y+1])}s[u]=p*l*.5+.5*v,s[u+1]=m*l*.7+.3*w,s[u+2]=f*l,s[u+3]=g*l}return a}function d(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i}function u(t){return{open:function(e){var i=e.naturalWidth||e.width,n=e.naturalHeight||e.height,r=t(i,n),a=r.getContext("2d");return!e.naturalWidth||e.naturalWidth==e.width&&e.naturalHeight==e.height?(r.width=e.width,r.height=e.height):(r.width=e.naturalWidth,r.height=e.naturalHeight),a.drawImage(e,0,0),o.Promise.resolve(r)},resample:function(e,i,n){return Promise.resolve(e).then(function(e){var r=t(~~i,~~n);return r.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,r.width,r.height),o.Promise.resolve(r)})},getData:function(t){return Promise.resolve(t).then(function(t){var e=t.getContext("2d").getImageData(0,0,t.width,t.height);return new h(t.width,t.height,e.data)})}}}o.Promise="undefined"!=typeof Promise?Promise:function(){throw new Error("No native promises and smartcrop.Promise not set.")},o.DEFAULTS={width:0,height:0,aspect:0,cropWidth:0,cropHeight:0,detailWeight:.2,skinColor:[.78,.57,.44],skinBias:.01,skinBrightnessMin:.2,skinBrightnessMax:1,skinThreshold:.8,skinWeight:1.8,saturationBrightnessMin:.05,saturationBrightnessMax:.9,saturationThreshold:.4,saturationBias:.2,saturationWeight:.1,scoreDownSample:8,step:8,scaleStep:.1,minScale:1,maxScale:1,edgeRadius:.4,edgeWeight:-20,outsideImportance:-.5,boostWeight:100,ruleOfThirds:!0,prescale:!0,imageOperations:null,canvasFactory:d,debug:!1},o.crop=function(t,e,i){var n=v({},o.DEFAULTS,e);n.aspect&&(n.width=n.aspect,n.height=1),null===n.imageOperations&&(n.imageOperations=u(n.canvasFactory));var s=n.imageOperations,d=1,f=1;return s.open(t,n.input).then(function(t){return n.width&&n.height&&(d=p(t.width/n.width,t.height/n.height),n.cropWidth=~~(n.width*d),n.cropHeight=~~(n.height*d),n.minScale=p(n.maxScale,m(1/d,n.minScale)),!1!==n.prescale&&((f=p(m(256/t.width,256/t.height),1))<1?(t=s.resample(t,t.width*f,t.height*f),n.cropWidth=~~(n.cropWidth*f),n.cropHeight=~~(n.cropHeight*f),n.boost&&(n.boost=n.boost.map(function(t){return{x:~~(t.x*f),y:~~(t.y*f),width:~~(t.width*f),height:~~(t.height*f),weight:t.weight}}))):f=1)),t}).then(function(t){return s.getData(t).then(function(t){for(var e=function(t,e){var i={},n=new h(e.width,e.height);(function(t,e){for(var i=t.data,n=e.data,o=t.width,r=t.height,a=0;a<r;a++)for(var s=0;s<o;s++){var l,h=4*(a*o+s);l=0===s||s>=o-1||0===a||a>=r-1?x(i,h):4*x(i,h)-x(i,h-4*o)-x(i,h-4)-x(i,h+4)-x(i,h+4*o),n[h+1]=l}})(e,n),function(t,e,i){for(var n=e.data,o=i.data,r=e.width,a=e.height,s=0;s<a;s++)for(var h=0;h<r;h++){var c=4*(s*r+h),d=b(n[c],n[c+1],n[c+2])/255,u=l(t,n[c],n[c+1],n[c+2]),p=u>t.skinThreshold,m=d>=t.skinBrightnessMin&&d<=t.skinBrightnessMax;o[c]=p&&m?(u-t.skinThreshold)*(255/(1-t.skinThreshold)):0}}(t,e,n),function(t,e,i){for(var n=e.data,o=i.data,r=e.width,a=e.height,s=0;s<a;s++)for(var l=0;l<r;l++){var h=4*(s*r+l),c=b(n[h],n[h+1],n[h+2])/255,d=y(n[h],n[h+1],n[h+2]),u=d>t.saturationThreshold,p=c>=t.saturationBrightnessMin&&c<=t.saturationBrightnessMax;o[h+2]=p&&u?(d-t.saturationThreshold)*(255/(1-t.saturationThreshold)):0}}(t,e,n),function(t,e){if(!t.boost)return;for(var i=e.data,n=0;n<e.width;n+=4)i[n+3]=0;for(n=0;n<t.boost.length;n++)r(t.boost[n],t,e)}(t,n);for(var o=c(n,t.scoreDownSample),s=-1/0,d=null,u=function(t,e,i){for(var n=[],o=p(e,i),r=t.cropWidth||o,a=t.cropHeight||o,s=t.maxScale;s>=t.minScale;s-=t.scaleStep)for(var l=0;l+a*s<=i;l+=t.step)for(var h=0;h+r*s<=e;h+=t.step)n.push({x:h,y:l,width:r*s,height:a*s});return n}(t,e.width,e.height),m=0,f=u.length;m<f;m++){var g=u[m];g.score=a(t,o,g),g.score.total>s&&(d=g,s=g.score.total)}i.topCrop=d,t.debug&&d&&(i.crops=u,i.debugOutput=n,i.debugOptions=t,i.debugTopCrop=v({},i.topCrop));return i}(n,t),o=e.crops||[e.topCrop],s=0,d=o.length;s<d;s++){var u=o[s];u.x=~~(u.x/f),u.y=~~(u.y/f),u.width=~~(u.width/f),u.height=~~(u.height/f)}return i&&i(e),e})})},o.isAvailable=function(t){if(!o.Promise)return!1;if((t?t.canvasFactory:d)===d&&!document.createElement("canvas").getContext("2d"))return!1;return!0},o.importance=s,o.ImgData=h,o._downSample=c,o._canvasImageOperations=u;var p=Math.min,m=Math.max,f=Math.abs,g=Math.sqrt;function v(t){for(var e=1,i=arguments.length;e<i;e++){var n=arguments[e];if(n)for(var o in n)t[o]=n[o]}return t}function w(t){return t=16*((t-1/3+1)%2*.5-.5),Math.max(1-t*t,0)}function b(t,e,i){return.5126*i+.7152*e+.0722*t}function x(t,e){return b(t[e],t[e+1],t[e+2])}function y(t,e,i){var n=m(t/255,e/255,i/255),o=p(t/255,e/255,i/255);if(n===o)return 0;var r=n-o;return(n+o)/2>.5?r/(2-n-o):r/(n+o)}void 0===(n=function(){return o}.call(e,i,e,t))||(t.exports=n),e.smartcrop=o,t.exports=o}()},function(t,e){!function(){t.exports=this._}()},function(t,e){!function(){t.exports=this.wp.BackBone}()},function(t,e,i){var n=i(9);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};i(11)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(10)(!1)).push([t.i,'.wp-core-ui .edit-attachment,.wp-core-ui .button[id^="imgedit-open-btn-"]{display:none}.wp-core-ui .media-image-edit{display:flex;align-items:stretch;max-height:100%}.wp-core-ui .media-frame.mode-edit-image .media-image-edit{margin-right:30%}.wp-core-ui .media-frame.mode-edit-image .media-sidebar{width:30%;box-sizing:border-box}.wp-core-ui .hm-thumbnail-sizes{flex:0 0 200px;max-height:100%;overflow:auto;background:#e5e5e5}.wp-core-ui .hm-thumbnail-sizes h2{margin:16px;padding:0}.wp-core-ui .hm-thumbnail-sizes__list{margin:0;padding:0}.wp-core-ui .hm-thumbnail-sizes__list li{width:100%;margin:0;padding:0}.wp-core-ui .hm-thumbnail-sizes__list li:first-child button{border-top:0}.wp-core-ui .hm-thumbnail-sizes__list button{background:none;border:0;border-right:1px solid #ddd;margin:0;padding:16px;box-sizing:border-box;cursor:pointer;display:block;width:100%;text-align:left}.wp-core-ui .hm-thumbnail-sizes__list button.current{border:1px solid #ddd;border-width:1px 0;padding:15px 16px;background:#fff;position:relative}.wp-core-ui .hm-thumbnail-sizes__list h3{text-transform:capitalize;margin:0 0 8px;padding:0}.wp-core-ui .hm-thumbnail-sizes__list h3 small{font-weight:300;white-space:nowrap}.wp-core-ui .hm-thumbnail-sizes__list img{display:block;width:auto;height:80px;max-width:100%;max-height:80px}.wp-core-ui .hm-thumbnail-editor{padding:16px;overflow:auto;flex:1}.wp-core-ui .hm-thumbnail-editor h2{margin:0 0 16px}.wp-core-ui .hm-thumbnail-editor h2 small{font-weight:normal;white-space:nowrap}.wp-core-ui .hm-thumbnail-editor .imgedit-menu p{margin-bottom:0;font-size:16px}.wp-core-ui .hm-thumbnail-editor__image-wrap{overflow:hidden}.wp-core-ui .hm-thumbnail-editor__image{float:left;position:relative}.wp-core-ui .hm-thumbnail-editor__image-crop{position:relative}.wp-core-ui .hm-thumbnail-editor__image img{display:block;max-width:100%;max-height:500px;width:auto;height:auto}.wp-core-ui .hm-thumbnail-editor__image .image-preview-full{cursor:crosshair}.wp-core-ui .hm-thumbnail-editor__actions{margin:16px 0 8px}.wp-core-ui .hm-thumbnail-editor .imgedit-wait{position:static;width:20px;height:20px;vertical-align:middle;float:right;margin:4px 0 4px 10px}.wp-core-ui .hm-thumbnail-editor .imgedit-wait::before{margin:0;position:static}.wp-core-ui .hm-thumbnail-editor__focal-point{position:absolute;box-sizing:border-box;width:80px;height:80px;margin-left:-40px;margin-top:-40px;left:0;top:0;background:rgba(200,125,125,0.5);border:2.5px solid rgba(200,50,50,0.5);border-radius:200px;cursor:cell;display:none}\n',""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=n.sources.map(function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")});return[i].concat(r).concat([o]).join("\n")}var a,s,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(i,"}"):i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="(".concat(s[2],") and (").concat(i,")")),e.push(s))}},e}},function(t,e,i){"use strict";var n,o={},r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}();function s(t,e){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(s):i.push(n[a]={id:a,parts:[s]})}return i}function l(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=o[n.id],a=0;if(r){for(r.refs++;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(f(n.parts[a],e))}else{for(var s=[];a<n.parts.length;a++)s.push(f(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function h(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=i.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach(function(i){e.setAttribute(i,t.attributes[i])}),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}var p=null,m=0;function f(t,e){var i,n,o;if(e.singleton){var r=m++;i=p||(p=h(e)),n=u.bind(null,i,r,!1),o=u.bind(null,i,r,!0)}else i=h(e),n=function(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r());var i=s(t,e);return l(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],h=o[a.id];h&&(h.refs--,n.push(h))}t&&l(s(t,e),e);for(var c=0;c<n.length;c++){var d=n[c];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete o[d.id]}}}}},function(t,e,i){"use strict";i.r(e);var n=i(2),o=i(0),r=i.n(o),a=i(1),s=i.n(a),l=r.a.View.extend({tagName:"div",className:"hm-thumbnail-sizes",template:s()("hm-thumbnail-sizes"),events:{"click button":"setSize"},initialize:function(){this.listenTo(this.model,"change:sizes",this.render)},setSize:function(t){this.model.set({size:t.currentTarget.dataset.size}),t.currentTarget.parentNode.parentNode.querySelectorAll("button").forEach(function(t){t.className=""}),t.currentTarget.className="current"}}),h=i(3),c=i.n(h),d=i(4),u=i.n(d),p=i(5),m=i.n(p);i(6),i(7);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=u.a,v=r.a.View.extend({tagName:"div",className:"hm-thumbnail-editor",template:s()("hm-thumbnail-editor"),events:{"click .button-apply-changes":"saveCrop","click .button-reset":"reset","click .button-remove-crop":"removeCrop","click .image-preview-full":"onClickPreview","click .focal-point":"removeFocalPoint","click .imgedit-menu button":"onEditImage"},initialize:function(){this.listenTo(this.model,"change:size",this.loadEditor),this.on("ready",this.loadEditor),window.imageEdit&&(window.imageEdit._view=this,window.imageEdit.initCrop=function(){},window.imageEdit.setCropSelection=function(){})},loadEditor:function(){this.render();var t=this.model.get("size");"full"!==t&&"full-orig"!==t?this.initCropper():this.initFocalPoint()},refresh:function(){this.update()},back:function(){},save:function(){this.update()},update:function(){var t=this;wp&&wp.data&&wp.data.dispatch("core").saveMedia({id:this.model.get("id")}),this.model.fetch({success:function(){return t.loadEditor()},error:function(){}})},applyRatio:function(){var t=this.model.get("width")/Math.min(1e3,this.model.get("width"));return Array.prototype.slice.call(arguments).map(function(e){return Math.round(e*t)})},reset:function(){var t=this,e=this.model.get("size"),i=this.model.get("sizes"),n=this.model.get("focalPoint"),o=this.model.get("width"),r=this.model.get("height"),a=i[e]||null;if(a){var s=a.cropData;if(s.hasOwnProperty("x"))this.setSelection(s);else if(n.hasOwnProperty("x")){var l=f(function(t,e,i,n){var o=t/i*n;return o<e?[t,Math.round(o)]:[Math.round(e/n*i),e]}(o,r,a.width,a.height),2),h=l[0],c=l[1];this.setSelection({x:Math.min(o-h,Math.max(0,n.x-h/2)),y:Math.min(r-c,Math.max(0,n.y-c/2)),width:h,height:c})}else{var d=g('img[id^="image-preview-"]').get(0);m.a.crop(d,{width:a.width,height:a.height}).then(function(e){var i=e.topCrop;t.setSelection(i)})}}},saveCrop:function(){var t=this,e=this.cropper.getSelection();this.onSelectStart(),c.a.post("hm_save_crop",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),crop:{x:e.x1,y:e.y1,width:e.width,height:e.height},size:this.model.get("size")}).always(function(){t.onSelectEnd()}).done(function(){t.update()}).fail(function(t){return console.log(t)})},setSelection:function(t){if(this.onSelectStart(),!t||void 0===t.x)return this.cropper.setOptions({show:!0}),void this.cropper.update();this.cropper.setSelection(t.x,t.y,t.x+t.width,t.y+t.height),this.cropper.setOptions({show:!0}),this.cropper.update()},onSelectStart:function(){g(".button-apply-changes, .button-reset").attr("disabled","disabled")},onSelectEnd:function(){g(".button-apply-changes, .button-reset").removeAttr("disabled")},onSelectChange:function(){g(".button-apply-changes:disabled, .button-reset:disabled").removeAttr("disabled")},initCropper:function(){var t=this,e=g('img[id^="image-preview-"]'),i=e.parent(),n=this.model.get("size"),o=this.model.get("sizes")[n]||null;if(o){var r="".concat(o.width,":").concat(o.height);this.cropper=e.imgAreaSelect({parent:i,instance:!0,handles:!0,keys:!0,imageWidth:this.model.get("width"),imageHeight:this.model.get("height"),minWidth:o.width,minHeight:o.height,aspectRatio:r,onInit:function(e){g(e).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.reset()},onSelectStart:function(){t.onSelectStart.apply(t,arguments)},onSelectEnd:function(){t.onSelectEnd.apply(t,arguments)},onSelectChange:function(){t.onSelectChange.apply(t,arguments)}})}},initFocalPoint:function(){var t=this.model.get("width"),e=this.model.get("height"),i=this.model.get("focalPoint")||{},n=this.$el.find(".focal-point");i.hasOwnProperty("x")&&i.hasOwnProperty("y")&&n.css({left:"".concat(100/t*i.x,"%"),top:"".concat(100/e*i.y,"%"),display:"block"})},onClickPreview:function(t){var e=this.model.get("width"),i=this.model.get("height"),n=t.offsetX*(e/t.currentTarget.offsetWidth),o=t.offsetY*(i/t.currentTarget.offsetHeight);this.$el.find(".focal-point").css({left:"".concat(Math.round(100/e*n),"%"),top:"".concat(Math.round(100/i*o),"%"),display:"block"}),this.setFocalPoint({x:n,y:o})},setFocalPoint:function(t){var e=this;c.a.post("hm_save_focal_point",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),focalPoint:t}).done(function(){e.update()}).fail(function(t){return console.log(t)})},removeFocalPoint:function(t){this.$el.find(".focal-point").hide(),t.stopPropagation(),this.setFocalPoint(!1)},removeCrop:function(){var t=this;c.a.post("hm_remove_crop",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),size:this.model.get("size")}).done(function(){t.update()}).fail(function(t){return console.log(t)})},onEditImage:function(){this.$el.find(".focal-point, .note-focal-point").hide()}}),w=r.a.View.extend({tagName:"div",className:"hm-thumbnail-editor",template:s()("hm-thumbnail-preview")}),b=r.a.View.extend({template:s()("hm-thumbnail-container"),initialize:function(){this.model.get("size")||this.model.set({size:"full"}),this.listenTo(this.model,"change:url",this.onUpdate),this.onUpdate()},onUpdate:function(){var t=[];this.model.get("uploading")||this.model.get("id")&&!this.model.get("url")?t.push(new r.a.view.Spinner):(t.push(new l({controller:this.controller,model:this.model,priority:10})),this.model.get("mime").match(/image\/(gif|jpe?g|png)/)?t.push(new v({controller:this.controller,model:this.model,priority:50})):t.push(new w({controller:this.controller,model:this.model,priority:50}))),this.views.set(t)}});b.load=function(t){return new b({controller:t,model:t.model,el:document.querySelector(".media-image-edit")})};var x=b,y=(i(8),r.a.view.MediaFrame);r.a.view.MediaFrame=y.extend({initialize:function(){y.prototype.initialize.apply(this,arguments),r.a.events.trigger("frame:init",this)}});var S=r.a.view.MediaFrame.Select;r.a.view.MediaFrame.Select=S.extend({initialize:function(t){var e=this;S.prototype.initialize.apply(this,arguments);var i=Object.assign({},t.button||{});r.a.events.trigger("frame:select:init",this),this.on("activate",function(){e.$el.hasClass("hide-menu")&&e.lastState()&&e.lastState().set("menu",!1)}),this.on("toolbar:create:select",function(){i&&(e.options.mutableButton=Object.assign({},e.options.button),e.options.button=Object.assign({},i))})}}),r.a.events.on("frame:init",function(){r.a.view.Attachment.Details.TwoColumn=r.a.view.Attachment.Details.TwoColumn.extend({template:s()("hm-attachment-details-two-column"),initialize:function(){var t=this;r.a.view.Attachment.Details.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:url",function(){t.render(),x.load(t.controller)}),this.controller.on("ready refresh",function(){return x.load(t.controller)})}})}),r.a.events.on("frame:select:init",function(t){if(t.states.get("library")&&!t.states.get("edit")&&!t.states.get("cropper")){var e=t.state("library"),i=t.states.add({id:"edit",title:Object(n.__)("Edit image","hm-smart-media"),router:!1,menu:!1,uploader:!1,selection:t.state("library").get("selection"),library:t.state("library").get("library")});i.on("activate",function(){t.$el.toggleClass("mode-select mode-edit-image"),t.content.mode("edit"),t.toolbar.mode("edit")}),i.on("deactivate",function(){t.$el.toggleClass("mode-select mode-edit-image")}),i.sidebar=new r.a.view.Sidebar({controller:t}),t.on("content:create:edit",function(e){e.view=[new x({tagName:"div",className:"media-image-edit",controller:t,model:t.state("edit").get("selection").first()}),i.sidebar]}),t.on("toolbar:create:edit",function(e){e.view=new r.a.view.Toolbar({controller:t,requires:{selection:!0},reset:!1,event:"select",items:{change:{text:Object(n.__)("Change image","hm-smart-media"),click:function(){t.setState(t.lastState())},priority:20,requires:{selection:!0}},apply:{style:"primary",text:Object(n.__)("Select","hm-smart-media"),click:function(){var e=t.options.mutableButton||t.options.button||{},i=e.close,n=e.event,o=e.reset,r=e.state;i&&t.close(),n&&t.state().trigger(n||"select"),r&&t.setState(r),o&&t.reset()},priority:10,requires:{selection:!0}}}})}),i.get("selection").on("selection:single",function(){var n=i.sidebar,o=i.get("selection").single();o.get("uploading")||(t.setState("edit"),n.set("details",new r.a.view.Attachment.Details({controller:this.controller,model:o,priority:80})),n.set("compat",new r.a.view.AttachmentCompat({controller:this.controller,model:o,priority:120})),(e.has("display")?e.get("display"):e.get("displaySettings"))&&n.set("display",new r.a.view.Settings.AttachmentDisplay({controller:this.controller,model:this.model.display(o),attachment:o,priority:160,userSettings:this.model.get("displayUserSettings")})),"insert"===this.model.id&&n.$el.addClass("visible"))}),i.get("selection").on("selection:unsingle",function(){t.setState("library")})}})}]));