this.AnimateBlock=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.blob}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,n){var o=n(16),r=n(17),i=n(18);t.exports=function(t,e){return o(t)||r(t,e)||i()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(19),r=n(20);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(21);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e,n){"use strict";n.r(e);var o=n(5),r=n(15);r.keys().forEach(function(t){var e=r(t),n=e.name,i=e.settings;Object(o.registerBlockType)(n,i)})},function(t,e,n){var o={"./animation/index.js":23};function r(t){var e=i(t);return n(e)}function i(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=15},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=n(2),c=n(6),a=n.n(c),u=n(7),s=n.n(u),l=n(8),p=n.n(l),f=n(9),b=n.n(f),m=n(10),d=n.n(m),y=n(11),h=n.n(y),v=n(3),O=n(12),j=n(13),w=n(4),x=(n(22),["application/zip","application/x-zip-compressed"]),_=function(t){function e(){var t;return s()(this,e),(t=b()(this,d()(e).apply(this,arguments))).state={editing:!t.props.attributes.src},t}return h()(e,t),p()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.attributes,o=n.id,r=n.src,c=void 0===r?"":r,u=e.noticeOperations,s=e.setAttributes;if(!o&&Object(w.isBlobURL)(c)){var l=Object(w.getBlobByURL)(c);l&&Object(i.mediaUpload)({filesList:[l],onFileChange:function(t){var e=a()(t,1)[0];s({src:e.animation_url})},onError:function(e){t.setState({editing:!0}),u.createErrorNotice(e)},allowedTypes:x,additionalData:{isAnimation:!0}})}}},{key:"render",value:function(){var t=this,e=this.props,n=e.setAttributes,c=e.isSelected,a=e.className,u=e.noticeOperations,s=e.noticeUI,l=e.attributes,p=l.src,f=l.caption;if(!p)return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.MediaPlaceholder,{icon:"format-video",className:a,onSelect:function(e){if(!e||!e.url)return n({src:void 0,id:void 0}),void t.setState({editing:!0});n({src:e.animation_url,id:e.id})},accept:x,allowedTypes:x,value:this.props.attributes,notices:s,onError:u.createErrorNotice,labels:{title:Object(r.__)("Animation","animate-block"),instructions:Object(r.__)("Drag a ZIP file, upload a new one or select a file from your library.","animate-block")}}));var b=Object(o.renderToString)(Object(o.createElement)("iframe",{src:p,frameBorder:"0",style:"width: 100%; height: auto;"}));return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("figure",{className:"wp-block-embed-animation wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed is-type-animation"},Object(o.createElement)("div",{className:"wp-block-embed__wrapper"},Object(o.createElement)(v.SandBox,{html:b,title:Object(r.__)("Animation","animate-block"),type:"embed"})),(!i.RichText.isEmpty(f)||c)&&Object(o.createElement)(i.RichText,{tagName:"figcaption",placeholder:Object(r.__)("Write caption…","animate-block"),value:f,onChange:function(t){return n({caption:t})},inlineToolbar:!0})))}}]),e}(o.Component),g=Object(O.compose)([v.withNotices,Object(j.withSelect)(function(t){return{themeSupportsResponsive:(0,t("core").getThemeSupports)()["responsive-embeds"]}})])(_);n.d(e,"name",function(){return k}),n.d(e,"settings",function(){return S});var k="swissspidy/animation",S={title:Object(r._x)("Animation","block name","animate-block"),description:Object(r.__)("Displays an Adobe Animate CC animation.","animate-block"),keywords:[Object(r.__)("animation","animate-block"),Object(r.__)("animate","animate-block"),Object(r.__)("adobe","animate-block")],icon:"format-video",category:"embed",supports:{customClassName:!1,html:!1,align:!0},attributes:{id:{type:"number"},src:{type:"string",source:"attribute",selector:"iframe",attribute:"src"},caption:{type:"string",source:"html",selector:"figcaption"}},edit:g,save:function(t){var e=t.attributes,n=e.src,r=e.caption;return Object(o.createElement)("figure",{className:"wp-block-embed-animation wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed is-type-animation"},Object(o.createElement)("div",{className:"wp-block-embed__wrapper"},n&&Object(o.createElement)("iframe",{src:n,frameBorder:"0"})),!i.RichText.isEmpty(r)&&Object(o.createElement)(i.RichText.Content,{tagName:"figcaption",value:r}))}}}]);