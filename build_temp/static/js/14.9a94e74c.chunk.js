webpackJsonp([14],{182:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=n(58),r=n.n(l),c=n(183),A=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),f=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={visible:!1},e.onVisibilityChange=e.onVisibilityChange.bind(e),e}return a(t,e),A(t,[{key:"onVisibilityChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){return s.default.createElement("section",null,s.default.createElement("div",{className:"container-fluid about-container"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:this.state.visible?"col about-title animated fadeIn":"col about-title invisible"},"about\xa0",s.default.createElement("span",{className:"dash"}))),s.default.createElement("div",{className:"row"},s.default.createElement(r.a,{scrollCheck:!0,active:!this.state.visible,partialVisibility:!0,onChange:this.onVisibilityChange}),s.default.createElement("div",{className:this.state.visible?"col about-text animated fadeInUp":"col about-text invisible"},"Abacus, the national level technical symposium, conducted by CSEA, primarily focuses on showcasing the skills of some of the best brains in the country. Abacus, over the years, has weaved a technical web, connecting smart minds in digital era, thus helping them unleash their technical prowess. With an interesting array of events and workshops lined up, Abacus 2018 is all geared up to set trends.",s.default.createElement("br",null),s.default.createElement("br",null),"CSEA (Computer Science and Engineering Association), the student body of the Department of Computer Science and Engineering has always been successful in its mission of quenching the technical thirst of tech-wizards both on campus and around the country. Sync, the intra-college symposium and Abacus, the inter-college symposium are the two juggernauts of this enthralling team of students. Undoubtedly, they have always been great triumphs in emboldening the student community."))))}}]),t}(s.Component);t.default=f},183:function(e,t,n){var i=n(184);"string"===typeof i&&(i=[[e.i,i,""]]);var o={hmr:!1};o.transform=void 0;n(151)(i,o);i.locals&&(e.exports=i.locals)},184:function(e,t,n){t=e.exports=n(150)(!0),t.push([e.i,".about-container{background:#000;color:#fff;min-height:100vh;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.about-title{text-align:left;color:#1f1f1f;font-size:6vw;font-family:Barlow Semi Condensed,sans-serif;left:0}.about-title .dash{color:#f57e16;padding:2px;font-size:2vw;display:inline-block;width:50px;border-bottom:3px solid #f57e16;position:relative;top:-14%}.about-text{text-align:center!important;color:#fff;font-size:1.6vw;margin:50px 100px;text-align:center}@media(max-width:960px){.about-title{font-size:12vw}.about-text{font-size:4vw;margin:10px}}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/about/about.css"],names:[],mappings:"AAAA,iBACI,gBAAoB,AACpB,WAAe,AACf,iBAAkB,AAClB,oBAAoB,AACpB,aAAa,AACb,qBAAsB,AAClB,uBAAwB,AAC5B,0BAA2B,AACvB,qBAAuB,CAC9B,AACD,aACI,gBAAiB,AACjB,cAAe,AACf,cAAe,AACf,6CAAgD,AAChD,MAAQ,CACX,AACD,mBACI,cAAe,AACf,YAAa,AACb,cAAe,AACf,qBAAqB,AACrB,WAAW,AACX,gCAAiC,AACjC,kBAAmB,AACnB,QAAU,CACb,AACD,YACI,4BAA6B,AAC7B,WAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,iBAAmB,CACtB,AACD,wBACI,aACI,cAAgB,CACnB,AAED,YACI,cAAe,AACf,WAAa,CAChB,CACJ",file:"about.css",sourcesContent:[".about-container{\n    background: #000000;\n    color: #ffffff;\n    min-height: 100vh;\n    display:-ms-flexbox;\n    display:flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.about-title{\n    text-align: left;\n    color: #1f1f1f;\n    font-size: 6vw;\n    font-family: 'Barlow Semi Condensed',sans-serif;\n    left: 0;\n}\n.about-title .dash{\n    color: #f57e16;\n    padding: 2px;\n    font-size: 2vw;\n    display:inline-block;\n    width:50px;\n    border-bottom: solid 3px #f57e16;\n    position: relative;\n    top: -14%;\n}\n.about-text{\n    text-align: center!important;\n    color: #ffffff;\n    font-size: 1.6vw;;\n    margin: 50px 100px;\n    text-align: center;\n}\n@media(max-width:960px){\n    .about-title{\n        font-size: 12vw;\n    }\n\n    .about-text{\n        font-size: 4vw;\n        margin: 10px;\n    }\n}"],sourceRoot:""}])}});
//# sourceMappingURL=14.9a94e74c.chunk.js.map