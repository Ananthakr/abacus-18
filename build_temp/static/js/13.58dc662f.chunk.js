webpackJsonp([13],{185:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var A=n(0),o=n(58),r=n.n(o),m=n(186),s=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),d=function(e){function t(){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={visible:!1},e.onVisibilityChange=e.onVisibilityChange.bind(e),e}return l(t,e),s(t,[{key:"onVisibilityChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){return A.default.createElement("section",null,A.default.createElement("div",{className:"container-fluid team-container"},A.default.createElement("div",{className:"col-md-10"},A.default.createElement(r.a,{scrollCheck:!0,active:!this.state.visible,partialVisibility:!0,onChange:this.onVisibilityChange}),A.default.createElement("div",{className:"row"},A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Chairman"),A.default.createElement("p",null,"Muthu Thillai Natarajan - 9655883077"))),A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Events"),A.default.createElement("p",null,"Mahmood Sulthan -  8807777901",A.default.createElement("br",null),"Vishvesh thangamani - 9159693399"))),A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Workshops"),A.default.createElement("p",null,"Pragatheeswaran S - 8438367687",A.default.createElement("br",null),"  Prabhakaran S - 7200210789")))),A.default.createElement("div",{className:"row team-row"},A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Accommodation"),A.default.createElement("p",null,"Kapildev K - 9543042900 ",A.default.createElement("br",null)," Rathish B - 9367145042"))),A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Registration Details"),A.default.createElement("p",null,"Sachin Kumar S - 8939202465",A.default.createElement("br",null),"PrinceMelvin A - 8122492422"))),A.default.createElement("div",{className:"col-md-4"},A.default.createElement("div",{className:this.state.visible?"team-item animated fadeInUp":"team-item invisible"},A.default.createElement("h4",null,"Industrial Relations"),A.default.createElement("p",null,"Abhishek Anand - 9445090727"))))),A.default.createElement("div",{className:"col-md-2"},A.default.createElement("div",{className:this.state.visible?"row team-title animated fadeInRight":"row team-title invisible"},A.default.createElement("span",{className:"dash"})," \xa0team"))))}}]),t}(A.Component);t.default=d},186:function(e,t,n){var i=n(187);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!1};a.transform=void 0;n(151)(i,a);i.locals&&(e.exports=i.locals)},187:function(e,t,n){t=e.exports=n(150)(!0),t.push([e.i,".team-container{-ms-flex-direction:row;flex-direction:row}.team-container,.team-item{display:-ms-flexbox;display:flex}.team-item{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-animation-duration:.8s;animation-duration:.8s}.col-md-4:first-child .team-item{-webkit-animation-delay:.3s;animation-delay:.3s}.col-md-4:nth-child(2) .team-item{-webkit-animation-delay:.4s;animation-delay:.4s}.col-md-4:nth-child(3) .team-item{-webkit-animation-delay:.5s;animation-delay:.5s}.team-item img{width:200px;height:200px;-o-object-fit:cover;object-fit:cover;border-radius:15px}.team-item h4{color:#f57e16;font-family:Source Sans Pro,sans-serif;font-weight:400;margin-bottom:0;margin-top:5px;padding:5px}.team-item p{color:#fff}.team-row{-ms-flex-pack:center;justify-content:center}.team-title .dash{color:#f57e16;padding:2px;font-size:2vw;display:inline-block;height:50px;width:0;border-right:3px solid #f57e16;position:relative;left:16%;-webkit-animation-delay:.1s;animation-delay:.1s;-webkit-animation-duration:.5s;animation-duration:.5s}.team-title{text-align:left;color:#1f1f1f;font-size:6vw;font-family:Barlow Semi Condensed,sans-serif;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}@media(max-width:960px){.team-title{-webkit-writing-mode:lr;-ms-writing-mode:lr;writing-mode:lr;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);font-size:12vw}.team-title .dash{width:50px;height:0;border-bottom:3px solid #f57e16;position:relative;padding:0;left:0;margin-top:10%}.team-container{-ms-flex-direction:column-reverse;flex-direction:column-reverse}}@media(max-width:960px) and (orientation:landscape){.team-title{font-size:6vw}}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/team/team.css"],names:[],mappings:"AAAA,gBAGI,uBAAwB,AACpB,kBAAoB,CAC3B,AACD,2BALI,oBAAqB,AACrB,YAAc,CAgBjB,AAZD,WAGI,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,sBAAuB,AAC3B,aAAc,AACd,+BAAiC,AACzB,sBAAyB,CACpC,AACD,iCACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,kCACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,kCACI,4BAA8B,AACtB,mBAAsB,CACjC,AACD,eACI,YAAY,AACZ,aAAc,AACd,oBAAqB,AAClB,iBAAkB,AACrB,kBAAoB,CACvB,AACD,cACI,cAAc,AACd,uCAA0C,AAC1C,gBAAiB,AACjB,gBAAmB,AACnB,eAAgB,AAChB,WAAa,CAChB,AACD,aACI,UAAe,CAClB,AACD,UACI,qBAAsB,AAClB,sBAAwB,CAC/B,AACD,kBACI,cAAe,AACf,YAAa,AACb,cAAe,AACf,qBAAqB,AACrB,YAAY,AACZ,QAAS,AACT,+BAAgC,AAChC,kBAAmB,AACnB,SAAU,AACV,4BAA8B,AACtB,oBAAsB,AAC9B,+BAAiC,AACzB,sBAAyB,CACpC,AACD,YACI,gBAAiB,AACjB,cAAe,AACf,cAAe,AACf,6CAAgD,AAChD,iCAAkC,AAC9B,uBAAwB,AACpB,yBAA0B,AAClC,iCAAkC,AAC9B,6BAA8B,AAC1B,wBAA0B,CACrC,AACD,wBACI,YACI,wBAAyB,AACrB,oBAAqB,AACjB,gBAAiB,AACzB,+BAAgC,AAC5B,2BAA4B,AACxB,uBAAwB,AAChC,cAAgB,CACnB,AACD,kBACI,WAAW,AACX,SAAW,AACX,gCAAiC,AACjC,kBAAmB,AACnB,UAAW,AACX,OAAQ,AACR,cAAgB,CACnB,AACD,gBACI,kCAAmC,AAC/B,6BAA+B,CACtC,CACJ,AACD,oDACI,YACI,aAAe,CAClB,CACJ",file:"team.css",sourcesContent:[".team-container{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.team-item{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding: 20px;\n    -webkit-animation-duration: 0.8s;\n            animation-duration: 0.8s;\n}\n.col-md-4:nth-child(1) .team-item{\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n}\n.col-md-4:nth-child(2) .team-item{\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n}\n.col-md-4:nth-child(3) .team-item{\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n}\n.team-item img{\n    width:200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 15px;\n}\n.team-item h4{\n    color:#f57e16;\n    font-family: 'Source Sans Pro',sans-serif;\n    font-weight: 400;\n    margin-bottom: 0px;\n    margin-top: 5px;\n    padding: 5px;\n}\n.team-item p{\n    color: #ffffff;\n}\n.team-row{\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.team-title .dash{\n    color: #f57e16;\n    padding: 2px;\n    font-size: 2vw;\n    display:inline-block;\n    height:50px;\n    width: 0;\n    border-right: solid 3px #f57e16;\n    position: relative;\n    left: 16%;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n}\n.team-title{\n    text-align: left;\n    color: #1f1f1f;\n    font-size: 6vw;\n    font-family: 'Barlow Semi Condensed',sans-serif;\n    -webkit-writing-mode: vertical-lr;\n        -ms-writing-mode: tb-lr;\n            writing-mode: vertical-lr;\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n@media(max-width:960px){\n    .team-title{\n        -webkit-writing-mode: lr;\n            -ms-writing-mode: lr;\n                writing-mode: lr;\n        -webkit-transform: rotate(0deg);\n            -ms-transform: rotate(0deg);\n                transform: rotate(0deg);\n        font-size: 12vw;\n    }\n    .team-title .dash{\n        width:50px;\n        height:0px;\n        border-bottom: solid 3px #f57e16;\n        position: relative;\n        padding: 0;\n        left: 0;\n        margin-top: 10%;\n    }\n    .team-container{\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    }\n}\n@media(max-width:960px) and (orientation:landscape){\n    .team-title{\n        font-size: 6vw;\n    }\n}"],sourceRoot:""}])}});
//# sourceMappingURL=13.58dc662f.chunk.js.map