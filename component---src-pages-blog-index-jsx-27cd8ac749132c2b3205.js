webpackJsonp([4220841425358],{439:function(e,t){},217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),f=r(u),c=n(9),i=r(c),s=n(12),d=r(s),p=n(13),m=(r(p),n(15)),y=r(m);n(439);var h=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=(0,d.default)(this,"props.data.allMarkdownRemark.edges");return f.default.createElement("div",null,f.default.createElement(y.default,null),f.default.createElement("div",{className:"index-content"},e.map(function(e){var t=e.node,n=(0,d.default)(t,"frontmatter.title")||t.fields.slug;return f.default.createElement("div",{key:t.fields.slug},f.default.createElement("h3",null,f.default.createElement(i.default,{style:{boxShadow:"none"},to:t.fields.slug},n)),f.default.createElement("small",null,t.frontmatter.date),f.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))},t}(f.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-index-jsx-27cd8ac749132c2b3205.js.map