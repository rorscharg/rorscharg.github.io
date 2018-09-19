webpackJsonp([0xe999bf96d4df],{513:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=r(1),i=a(l),c=r(8),s=a(c),u=function(e,t){var r=e.children,a=e.color,l=e.size,c=e.style,s=e.width,u=e.height,f=n(e,["children","color","size","style","width","height"]),p=t.reactIconBase,d=void 0===p?{}:p,m=l||d.size||"1em";return i.default.createElement("svg",o({children:r,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||m,width:s||m},d,f,{style:o({verticalAlign:"middle",color:a||d.color},d.style||{},c)}))};u.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number]),width:s.default.oneOfType([s.default.string,s.default.number]),height:s.default.oneOfType([s.default.string,s.default.number]),style:s.default.object},u.contextTypes={reactIconBase:s.default.shape(u.propTypes)},t.default=u,e.exports=t.default},514:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=r(1),l=a(o),i=r(513),c=a(i),s=function(e){return l.default.createElement(c.default,n({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"})))};t.default=s,e.exports=t.default},138:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=a(i);r(440);var s=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("span",{className:"button"},c.default.createElement("a",{href:this.props.link,className:"button-link"},this.props.label))},t}(i.Component);t.default=s,e.exports=t.default},440:function(e,t){},214:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=a(i),s=r(138),u=a(s);r(173);var f=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"programming-card"},c.default.createElement("div",{className:"programming-card-container"},c.default.createElement("div",{className:"programming-card-title-section"},c.default.createElement("span",{className:"programming-card-title"},this.props.name),c.default.createElement("span",{className:"programming-card-date"},this.props.date)),c.default.createElement("div",{className:"programming-card-image"},c.default.createElement("img",{src:this.props.image,alt:this.props.image,className:"programming-card-image-preview"})),c.default.createElement("div",{className:"programming-card-description"},this.props.description),c.default.createElement("div",{className:"programming-card-footer"},c.default.createElement("span",null,c.default.createElement("span",{className:"programming-card-stack-element"},this.props.stack)),c.default.createElement(u.default,{label:"DevPost Link",link:this.props.link}," "))))},t}(i.Component);t.default=f,e.exports=t.default},215:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=a(i),s=r(138),u=a(s);r(173);var f=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"programming-card"},c.default.createElement("div",{className:"programming-card-container"},c.default.createElement("div",{className:"programming-card-title-section"},c.default.createElement("span",{className:"programming-card-title"},this.props.name),c.default.createElement("span",{className:"programming-card-date"},this.props.date)),c.default.createElement("div",{className:"programming-card-image"},c.default.createElement("img",{src:this.props.image,alt:this.props.image,className:"programming-card-image-preview"})),c.default.createElement("div",{className:"programming-card-description"},this.props.description),c.default.createElement("div",{className:"programming-card-footer"},c.default.createElement("span",null,c.default.createElement("span",{className:"programming-card-stack-element"},this.props.stack)),c.default.createElement(u.default,{label:"Link",link:this.props.link}," "))))},t}(i.Component);t.default=f,e.exports=t.default},173:function(e,t){},319:function(e,t){},229:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),c=a(i),s=r(10),u=a(s),f=r(214),p=a(f),d=r(215),m=a(d);r(319);var h=r(514),g=a(h),b=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement(u.default,null),c.default.createElement(m.default,{name:"Simple Scoreboard",description:"A simple two teams scoreboard made in pure javascript",date:"2018-04-20",link:"https://rorscharg.com/simplescoreboard",image:"simplescoreboard.jpg",alt:"simplescoreboard.jpg",stack:"Pure Javascript"}," "),c.default.createElement(p.default,{name:"The Salad Bowl",description:"Made during ConuHack III, The Salad Bowl is a news aggregator that shows to the user the most relevant news on a specific subject",date:"2018-01-28",link:"https://devpost.com/software/the-salad-bowl",image:"the-salad-bowl.png",alt:"the-salad-bowl.png",stack:"JS, React, Node"}," "),c.default.createElement(p.default,{name:"Troc",description:"Made during Hackatown 2018, Troc connects people by allowing them to lend, borrow or trade items from each other.",date:"2018-01-20",link:"https://devpost.com/software/troc-3jdi1m",image:"troc.png",alt:"troc.png",stack:"JS, Node"}," "),c.default.createElement("div",{className:"footer"},c.default.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},c.default.createElement(g.default,null)),c.default.createElement("br",null),c.default.createElement("br",null),"Project section inspired by ",c.default.createElement("a",{href:"https://huangxuan.me/"},"Hux's")," website portfolio section"))},t}(c.default.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-projects-programming-index-jsx-01a10fb6b2e62b00ae01.js.map