webpackJsonp([6],{149:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=n(60),c=n.n(l),s=n(168),A=(n.n(s),n(33)),u=n(171),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=function(){return r.default.createElement(c.a,{load:n.e(11).then(n.bind(null,174))})},m=function(){return r.default.createElement(c.a,{load:n.e(13).then(n.bind(null,178))})},p=function(){return r.default.createElement(c.a,{load:n.e(12).then(n.bind(null,181))})},C=function(){return r.default.createElement(c.a,{load:n.e(10).then(n.bind(null,184))})},h=function(){return r.default.createElement(c.a,{load:new Promise(function(e){e()}).then(n.bind(null,35))})},v=function(){return r.default.createElement(c.a,{load:new Promise(function(e){e()}).then(n.bind(null,36))})},b=[{title:"Big Boss is live",content:"<p>Checkout <a href='https://www.facebook.com/abacus.cse' class='alert-link'>our FB page </a> for more updates.</p>"}],B=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={mount:!1,activeAlertIndex:0},e}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.setState({mount:!0}),setInterval(this.changeActiveAlert.bind(this),5e3)}},{key:"changeActiveAlert",value:function(){this.setState({activeAlertIndex:(this.state.activeAlertIndex+1)%b.length})}},{key:"render",value:function(){return r.default.createElement("main",null,r.default.createElement("div",{className:"home-container container-fluid"},r.default.createElement(A.a,null),r.default.createElement(u.a,{title:b[this.state.activeAlertIndex].title,content:b[this.state.activeAlertIndex].content}),r.default.createElement("div",{className:"row home-row"},r.default.createElement("div",{className:"svg-icon d-flex justify-content-center align-items-center"},r.default.createElement("div",null,r.default.createElement("span",{className:"info-text animated fadeInLeft"},"\u2014 Feb 27,28 Mar 1"),r.default.createElement("h1",null,r.default.createElement("span",{className:"title-1 animated fadeIn"},"EAT. CODE. SLEEP.",r.default.createElement("br",null)),r.default.createElement("span",{className:"title-2 animated fadeIn"},"REPEAT.")),r.default.createElement("p",{className:"text animated fadeInUp"},"Welcome to Abacus \u201918, the National Level Symposium of",r.default.createElement("br",null),"The Department of Computer Science and Engineering, CEG"))))),this.state.mount?r.default.createElement("div",null,r.default.createElement(d,null),r.default.createElement(m,null),r.default.createElement(p,null),r.default.createElement(C,null),r.default.createElement(h,null),r.default.createElement(v,null)):"")}}]),t}(r.Component);t.default=B},168:function(e,t,n){var o=n(169);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(148)(o,a);o.locals&&(e.exports=o.locals)},169:function(e,t,n){t=e.exports=n(147)(!0),t.push([e.i,".home-container{min-height:100vh;background-color:#000}.svg-icon{width:100%;height:100vh;background-image:url("+n(170)+");background-repeat:no-repeat;background-position:50%;background-size:60%}.svg-icon .title-1{color:#fff}.svg-icon .title-1,.svg-icon .title-2{font-size:6vw;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:1s;animation-duration:1s}.svg-icon .title-2{color:#f57e16}.text{font-size:2vw;color:#fff;-webkit-animation-delay:0s;animation-delay:0s}.info-text,.text{-webkit-animation-duration:1.5s;animation-duration:1.5s}.info-text{font-size:1.5vw;color:#f57e16;font-weight:200;-webkit-animation-delay:.1s;animation-delay:.1s}@media(max-width:960px) and (orientation:portrait){.svg-icon{background-size:90%}.svg-icon .title-1{font-size:12vw}.svg-icon .title-2{font-size:11vw}.text{font-size:3.5vw}.info-text{font-size:2.5vw}}.link-text{color:#fff;text-decoration:none}.link-text:active,.link-text:focus,.link-text:hover{color:#f57e16}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/views/home/home.css"],names:[],mappings:"AAGA,gBACI,iBAAkB,AAClB,qBAA0B,CAC7B,AACD,UACI,WAAY,AACZ,aAAc,AACd,+CAAkC,AAClC,4BAA6B,AAC7B,wBAA4B,AAC5B,mBAAqB,CACxB,AACD,mBACI,UAAc,CAMjB,AACD,sCANI,cAAc,AACd,2BAA4B,AACpB,mBAAoB,AAC5B,8BAA+B,AACvB,qBAAuB,CASlC,AAPD,mBACI,aAAc,CAMjB,AACD,MACI,cAAe,AACf,WAAe,AACf,2BAA4B,AACpB,kBAAoB,CAG/B,AACD,iBAHI,gCAAiC,AACzB,uBAAyB,CAUpC,AARD,WACI,gBAAiB,AACjB,cAAc,AACd,gBAAiB,AACjB,4BAA8B,AACtB,mBAAsB,CAGjC,AAED,mDACI,UACI,mBAAqB,CACxB,AACD,mBACI,cAAe,CAClB,AACD,mBACI,cAAe,CAClB,AACD,MACI,eAAiB,CACpB,AACD,WACI,eAAiB,CACpB,CACJ,AAED,WACI,WAAe,AACf,oBAAsB,CACzB,AACD,oDACI,aAAe,CAClB",file:"home.css",sourcesContent:['/*\n*Custom css for home view\n*/\n.home-container{\n    min-height: 100vh;\n    background-color: #000000;\n}\n.svg-icon{\n    width: 100%;\n    height: 100vh;\n    background-image: url("logo.svg");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 60%;\n}\n.svg-icon .title-1{\n    color:#FFFFFF;\n    font-size:6vw;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n.svg-icon .title-2{\n    color:#f57e16;\n    font-size:6vw;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n.text{\n    font-size: 2vw;\n    color: #FFFFFF;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n}\n.info-text{\n    font-size: 1.5vw;\n    color:#f57e16;\n    font-weight: 200;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n}\n\n@media(max-width:960px) and (orientation:portrait){   \n    .svg-icon{\n        background-size: 90%;\n    }\n    .svg-icon .title-1{\n        font-size:12vw;\n    }\n    .svg-icon .title-2{\n        font-size:11vw;\n    }\n    .text{\n        font-size: 3.5vw;\n    }\n    .info-text{\n        font-size: 2.5vw;\n    }\n}\n\n.link-text{\n    color: #FFFFFF;\n    text-decoration: none;\n}\n.link-text:hover,.link-text:focus,.link-text:active{\n    color: #f57e16;\n}\n\n'],sourceRoot:""}])},170:function(e,t,n){e.exports=n.p+"static/media/logo.3ae5cd3b.svg"},171:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(0),l=n(34),c=n.n(l),s=n(172),A=(n.n(s),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),u=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),A(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"alert alert-warning",role:"alert"},r.default.createElement("h5",{class:"alert-heading"},this.props.title),c()(this.props.content))}}]),t}(r.Component);t.a=u},172:function(e,t,n){var o=n(173);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(148)(o,a);o.locals&&(e.exports=o.locals)},173:function(e,t,n){t=e.exports=n(147)(!0),t.push([e.i,".alert{position:absolute;right:25px}.alert-heading{font-weight:700;text-align:center}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/flashAlert/FlashAlert.css"],names:[],mappings:"AAAA,OACI,kBAAmB,AACnB,UAAY,CACf,AACD,eACI,gBAAkB,AAClB,iBAAmB,CACtB",file:"FlashAlert.css",sourcesContent:[".alert{\n    position: absolute;\n    right: 25px;\n}\n.alert-heading{\n    font-weight: bold;\n    text-align: center;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=6.b153b06a.chunk.js.map