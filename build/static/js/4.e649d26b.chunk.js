webpackJsonp([4],{154:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(15),l=n(205),p=(n.n(l),n(33)),c=n(160),u=n(207),d=n.n(u),h=n(208),m=n.n(h),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"displayEvents",value:function(){return m.a.map(function(e,t){return i.default.createElement("div",{key:t,className:"col-md-4"},i.default.createElement(s.b,{to:{pathname:"/events/"+e.title}},i.default.createElement(c.a,{title:e.title,image:d.a,imageTitle:"TechIcon"})))}).reduce(function(e,t,n){return n%3===0&&e.push([]),e[e.length-1].push(t),e},[]).map(function(e,t){return i.default.createElement("div",{key:t,className:"row"},e)})}},{key:"render",value:function(){var e=this;return i.default.createElement("main",null,i.default.createElement("div",{className:"generic-view-container container-fluid"},i.default.createElement(p.a,null),i.default.createElement("div",{className:"generic-view-title"},i.default.createElement("h1",null,"Night Events"))),i.default.createElement("div",{className:"container-fluid events-container"},i.default.createElement("span",{className:"back-btn text-center",onClick:function(){return e.context.router.history.goBack()}},"\u2190Back"),this.displayEvents()))}}]),t}(i.Component);t.default=g},160:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n(161),l=(n.n(s),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"generic-box-container animated zoomIn"},i.default.createElement("img",{src:this.props.image,alt:this.props.imageTitle}),i.default.createElement("h6",null,this.props.title))}}]),t}(i.Component);t.a=p},161:function(e,t,n){var o=n(162);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(148)(o,a);o.locals&&(e.exports=o.locals)},162:function(e,t,n){t=e.exports=n(147)(!0),t.push([e.i,".generic-box-container{background-color:#f57e16;padding:25px;border-radius:5px;border:2px solid #f57e16;min-height:120px;margin:10px}.generic-box-container img{display:block;margin:0 auto;width:80px}.generic-box-container h6{color:#fff;font-size:1.65rem;padding:10px;text-align:center}.generic-box-container h6>span{font-size:.7em}.generic-box-container:hover{-webkit-box-shadow:4px 4px 10px 2px #444;box-shadow:4px 4px 10px 2px #444;-webkit-transition:15s ease-in;-o-transition:15s ease-in;transition:15s ease-in}@media(max-width:768px) and (orientation:portrait){.generic-box-container{padding-left:10px;padding-right:10px;margin-left:5px;margin-right:5px}.generic-box-container h6{font-size:1.45rem}}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/genericBox/genericBox.css"],names:[],mappings:"AACA,uBACI,yBAA0B,AAC1B,aAAc,AACd,kBAAmB,AACnB,yBAA0B,AAC1B,iBAAkB,AAClB,WAAY,CACb,AACH,2BACI,cAAe,AACf,cAAe,AACf,UAAY,CACf,AACD,0BACI,WAAe,AACf,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACtB,AACD,+BACI,cAAgB,CACnB,AAED,6BACI,yCAA0C,AAClC,iCAAkC,AAC1C,+BAAgC,AAChC,0BAA2B,AAC3B,sBAAwB,CAC3B,AACD,mDACI,uBACI,kBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAkB,CACrB,AACD,0BACI,iBAAmB,CACtB,CACJ",file:"genericBox.css",sourcesContent:["\n.generic-box-container{\n    background-color: #f57e16;\n    padding: 25px;\n    border-radius: 5px;\n    border: solid 2px #f57e16;\n    min-height: 120px;\n    margin:10px;\n  }\n.generic-box-container img{\n    display: block;\n    margin: 0 auto;\n    width: 80px;\n}\n.generic-box-container h6{\n    color: #ffffff;\n    font-size: 1.65rem;\n    padding: 10px;\n    text-align: center;\n}\n.generic-box-container h6 > span{\n    font-size:0.7em;\n}\n\n.generic-box-container:hover{\n    -webkit-box-shadow: 4px 4px 10px 2px #444;\n            box-shadow: 4px 4px 10px 2px #444;\n    -webkit-transition: 15s ease-in;\n    -o-transition: 15s ease-in;\n    transition: 15s ease-in;\n}\n@media(max-width:768px) and (orientation:portrait){\n    .generic-box-container{\n        padding-left:10px;\n        padding-right: 10px;\n        margin-left: 5px;\n        margin-right: 5px; \n    }\n    .generic-box-container h6{\n        font-size: 1.45rem;\n    }\n}"],sourceRoot:""}])},205:function(e,t,n){var o=n(206);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;n(148)(o,a);o.locals&&(e.exports=o.locals)},206:function(e,t,n){t=e.exports=n(147)(!0),t.push([e.i,".events-container{min-height:60vh;background-color:#000;margin-top:-8px;padding:10px 10vw}.events-container .row{margin:25px}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/views/nightEvents/nightevents.css"],names:[],mappings:"AAAA,kBACI,gBAAiB,AACjB,sBAA0B,AAC1B,gBAAiB,AACjB,iBAAmB,CACtB,AACD,uBACI,WAAa,CAChB",file:"nightevents.css",sourcesContent:[".events-container{\n    min-height: 60vh;\n    background-color: #000000;\n    margin-top: -8px;\n    padding: 10px 10vw;\n}\n.events-container .row{\n    margin: 25px;\n}"],sourceRoot:""}])},207:function(e,t,n){e.exports=n.p+"static/media/SpriteXtreme.e97025fe.png"},208:function(e,t){e.exports=[{title:"SpriteXtreme",content:["<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><p>Do you want to solve problems that can help billions of people? Do you believe that technology can make life simpler? Does designing, architecting, coding and marketing apps to solve tough problems excite you? Then we have an interesting opportunity for you.</p><p>You may think you have an inkling of what happens in a hackathon -you're wrong. <strong>SpriteXtreme</strong> is not just any hackathon. It&rsquo;s an initiative by <a href='https://www.spritle.com/'>Spritle</a> to promote young developers and wannabe entrepreneurs to learn, build and deploy apps on their own. SpriteXtreme goes beyond just developing an app and is ultimately a platform for you and your team to build solutions to a problem and create a working app. The culture of it encapsulates so much more and what we have lined up for you will make you realize what it really means to be a creator. Go ahead, take a look and prepare to be enthralled.</p><p>The problem statement is open ended where you have the freedom to choose any problem you want and propose a solution. If you can&rsquo;t think of any, then don&rsquo;t worry, we have some ideas which you can use to develop solutions in your own way.</p><p>If your proposal gets shortlisted, you can create the app and pitch it to the world. Big prizes to be won!</p><br/><div>The following are a few sample problems that you can take as a basis for your app. You are free to select any one of the following, or, take a different problem and propose a solution.</div><div><table class='table'><colgroup><col /><col /></colgroup><tbody><tr><td>1</td><td>Should I break up or not? Should I divorce her/him or not? - An app which can interact with people, get to know their problems, analyse and suggests a solution for their problems(AI &amp; ML driven app)</td></tr><tr><td>2</td><td>Scans the prescription and shows the availability of medicines (location wise, name of the store). Or the other use case is Searching the medicine in the app, wherein registered medical shops with the medicines will be displayed according to location nearby</td></tr><tr><td>3</td><td>Blood bank centralization app- Every user can initiate an emergency request for a blood type. similar to uber/ola request p&zwnj;ing, request is sent to all the blood banks in 3km radius. If time out then goes to blood banks in 15 km radius. Then to doners in 3 km radius, and so on. We need to have all blood bank and doner details registered and app installed.</td></tr><tr><td>4</td><td>Eatsoon- QR codes barcode scan on the food jars and medicens in mobile app to keep track the Best before dates and remind users in time I should consume something really soon.</td></tr><tr><td>5</td><td>A social network between students and companies which should help students expose their skills to industries</td></tr></tbody></table></div><a href='https://www.surveymonkey.com/r/RTVV3JW' style='text-decoration:underline;text-laign:center;'>For Registrations click here</a>","<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><ul><li>You have got precisely 12 hours to develop your app during the hackathon.</li><li>The hackathon kicks off at 9PM IST on 28th Feb 2018 and ends at 9AM IST 1st March 2018</li><li>After those 12 hours are up, evaluation will start. No additional features or bug fixes are allowed during evaluation.</li><li>Towards the end of the hackathon, you will be asked to present your app to the panel. Post the panel review, the top teams will get to present their ideas and demo their apps on stage with their go-to market strategy and ROI plans</li><li>The jury will evaluate the teams that present on stage based on the originality of the idea, the completeness of the product, the tech implemented in the app, and the Marketing and ROI(Return of Investment) plans.</li></ul><a href='https://www.surveymonkey.com/r/RTVV3JW' style='text-decoration:underline;text-laign:center;'>For Registrations click here</a>","<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><ul><li>Please bring your own laptop</li><li>Teams are composed of 1 to 4 individuals. No more than four people are allowed on a team. Since the hackathon involves more than just developing an app and consists of a pitching session and a solid marketing and ROI(Return on Investment) plan, individuals don't need to be programmers.</li><li>Libraries, plugins, and modules that are public and freely available are allowed and encouraged.</li><li>Teams can pick from the list of tasks given by us or bring up a new idea. The new idea should be submitted before and approved by the jury.</li><li>Funding or business association can be offered only to teams who pick their own ideas and turn out as winners.</li></ul><a href='https://www.surveymonkey.com/r/RTVV3JW' style='text-decoration:underline;text-laign:center;'>For Registrations click here</a>","<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><a href='https://www.surveymonkey.com/r/RTVV3JW' style='text-decoration:underline;'>For Registrations click here</a><br/>Sangameshwaran R S -  9677947957"]}]}});
//# sourceMappingURL=4.e649d26b.chunk.js.map