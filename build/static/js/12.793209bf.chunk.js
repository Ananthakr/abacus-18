webpackJsonp([12],{176:function(e,n,i){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var A=i(0),l=i(58),r=i.n(l),s=i(177),c=(i.n(s),i(179)),m=i.n(c),v=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}(),d=function(e){function n(){t(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={visible:!1},e.onVisibilityChange=e.onVisibilityChange.bind(e),e}return o(n,e),v(n,[{key:"onVisibilityChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){return A.default.createElement("section",null,A.default.createElement("div",{className:"container-fluid overview-container"},A.default.createElement("div",{className:"row"},A.default.createElement("div",{className:"col-5 overview-video d-none d-lg-block d-xl-block"},A.default.createElement("video",{loop:"true",autoplay:"autoplay",muted:!0},A.default.createElement("source",{src:m.a,type:"video/mp4"}))),A.default.createElement(r.a,{scrollCheck:!0,active:!this.state.visible,partialVisibility:!0,onChange:this.onVisibilityChange}),A.default.createElement("div",{className:"col overview-text-holder"},A.default.createElement("div",{className:"row"},A.default.createElement("div",{className:this.state.visible?"col overview-title animated fadeIn":"col overview-title invisible"},A.default.createElement("span",{className:"dash"})," abacus")),A.default.createElement("div",{className:"row"},A.default.createElement("div",{className:this.state.visible?"col-md overview-item animated fadeInUp":"col-md overview-item invisible"},A.default.createElement("p",null,"20+ "),A.default.createElement("span",null,"Events")),A.default.createElement("div",{className:this.state.visible?"col-md overview-item animated fadeInUp":"col-md overview-item invisible"},A.default.createElement("p",null,"4 "),A.default.createElement("span",null,"Workshops"))),A.default.createElement("div",{className:"row"},A.default.createElement("div",{className:this.state.visible?"col-md overview-item animated fadeInUp":"col-md overview-item invisible"},A.default.createElement("p",null,"1L+ "),A.default.createElement("span",null,"Prizes")),A.default.createElement("div",{className:this.state.visible?"col-md overview-item animated fadeInUp":"col-md overview-item invisible"},A.default.createElement("p",null,"3 "),"  ",A.default.createElement("span",null,"Days")))))))}}]),n}(A.Component);n.default=d},177:function(e,n,i){var t=i(178);"string"===typeof t&&(t=[[e.i,t,""]]);var a={hmr:!1};a.transform=void 0;i(149)(t,a);t.locals&&(e.exports=t.locals)},178:function(e,n,i){n=e.exports=i(148)(!0),n.push([e.i,".overview-container{background:#000;color:#fff;min-height:100vh}.overview-text-holder{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;min-height:100vh}.overview-video{min-height:100vh}.overview-video video{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.overview-item{padding:50px 100px;text-align:center;-webkit-animation-duration:.5s;animation-duration:.5s}.overview-item:first-child{-webkit-animation-delay:.4s;animation-delay:.4s}.overview-item:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}.overview-item:nth-child(3){-webkit-animation-delay:.6s;animation-delay:.6s}.overview-item:nth-child(4){-webkit-animation-delay:.7s;animation-delay:.7s}.overview-item p{font-family:Barlow Semi Condensed,sans-serif;font-size:4vw;margin-bottom:0}.overview-item span{font-family:Source Sans Pro,sans-serif;font-size:2vw;position:relative;top:-5px;color:#f57e16}.overview-title{text-align:right;color:#1f1f1f;font-size:6vw;font-family:Barlow Semi Condensed,sans-serif;left:44%;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:1s;animation-duration:1s}.overview-title .dash{color:#f57e16;padding:2px;font-size:2vw;display:inline-block;width:50px;border-bottom:3px solid #f57e16;position:relative;top:-12%}@media(max-width:960px){.overview-item{text-align:center;padding:50px}.overview-item p{font-size:10vw}.overview-item span{font-size:4vw}.overview-title{font-size:12vw;left:36%}}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/overview/overview.css"],names:[],mappings:"AAAA,oBACI,gBAAoB,AACpB,WAAe,AACf,gBAAkB,CACrB,AACD,sBACI,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,0BAA2B,AACvB,sBAAuB,AAC3B,gBAAkB,CACrB,AAcD,gBACI,gBAAkB,CACrB,AACD,sBACI,YAAa,AACb,WAAY,AACZ,sBAAuB,AACpB,kBAAoB,CAC1B,AACD,eACI,mBAAoB,AACpB,kBAAmB,AACnB,+BAAgC,AACxB,sBAAwB,CACnC,AACD,2BACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,4BACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,4BACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,4BACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,iBACI,6CAAgD,AAChD,cAAe,AACf,eAAiB,CACpB,AACD,oBACI,uCAA0C,AAC1C,cAAe,AACf,kBAAmB,AACnB,SAAS,AACT,aAAe,CAClB,AACD,gBACI,iBAAkB,AAClB,cAAe,AACf,cAAe,AACf,6CAAgD,AAChD,SAAU,AACV,2BAA4B,AACpB,mBAAoB,AAC5B,8BAA+B,AACvB,qBAAuB,CAClC,AACD,sBACI,cAAe,AACf,YAAa,AACb,cAAe,AACf,qBAAqB,AACrB,WAAW,AACX,gCAAiC,AACjC,kBAAmB,AACnB,QAAU,CACb,AAED,wBACI,eACI,kBAAmB,AACnB,YAAc,CACjB,AACD,iBACI,cAAgB,CACnB,AACD,oBACI,aAAe,CAClB,AACD,gBACI,eAAgB,AAChB,QAAU,CACb,CACJ",file:"overview.css",sourcesContent:[".overview-container{\n    background: #000000;\n    color: #ffffff;\n    min-height: 100vh;\n}\n.overview-text-holder{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    min-height: 100vh;\n}/*\n.overview-image{\n    background-color: #000000;\n    background-image:url('light.jpg');\n    background-blend-mode: luminosity;\n    background-position: center;\n    min-height: 100vh;\n    background-size: cover;\n    animation-duration: 0.8s;\n    transition: 1s ease;\n}\n.overview-image:hover{\n    background-blend-mode: normal;\n}*/\n.overview-video{\n    min-height: 100vh;\n}\n.overview-video video{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.overview-item{\n    padding: 50px 100px;\n    text-align: center;\n    -webkit-animation-duration:0.5s;\n            animation-duration:0.5s; \n}\n.overview-item:nth-child(1){\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n}\n.overview-item:nth-child(2){\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n}\n.overview-item:nth-child(3){\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s;\n}\n.overview-item:nth-child(4){\n    -webkit-animation-delay: 0.7s;\n            animation-delay: 0.7s;\n}\n.overview-item p{\n    font-family: 'Barlow Semi Condensed',sans-serif;\n    font-size: 4vw;\n    margin-bottom: 0;\n}\n.overview-item span{\n    font-family: 'Source Sans Pro',sans-serif;\n    font-size: 2vw;\n    position: relative;\n    top:-5px;\n    color: #f57e16;\n}\n.overview-title{\n    text-align: right;\n    color: #1f1f1f;\n    font-size: 6vw;\n    font-family: 'Barlow Semi Condensed',sans-serif;\n    left: 44%;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n}\n.overview-title .dash{\n    color: #f57e16;\n    padding: 2px;\n    font-size: 2vw;\n    display:inline-block;\n    width:50px;\n    border-bottom: solid 3px #f57e16;\n    position: relative;\n    top: -12%;\n}\n\n@media(max-width:960px){\n    .overview-item{\n        text-align: center;\n        padding: 50px;\n    }\n    .overview-item p{\n        font-size: 10vw;\n    }\n    .overview-item span{\n        font-size: 4vw;\n    }\n    .overview-title{\n        font-size: 12vw;\n        left: 36%;\n    }\n}"],sourceRoot:""}])},179:function(e,n,i){e.exports=i.p+"static/media/abacus.536fe7e2.mp4"}});
//# sourceMappingURL=12.793209bf.chunk.js.map