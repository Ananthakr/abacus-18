webpackJsonp([5],{152:function(e,i,n){"use strict";function t(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function o(e,i){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!==typeof i&&"function"!==typeof i?e:i}function l(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(e,i):e.__proto__=i)}Object.defineProperty(i,"__esModule",{value:!0});var a=n(0),s=n(15),r=n(197),p=(n.n(r),n(33)),u=n(159),c=n(163),d=n.n(c),A=n(199),g=n.n(A),m=function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,n,t){return n&&e(i.prototype,n),t&&e(i,t),i}}(),h=function(e){function i(e){return t(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e))}return l(i,e),m(i,[{key:"displayEvents",value:function(){return g.a.map(function(e,i){return a.default.createElement("div",{key:i,className:"col-md-4"},a.default.createElement(s.b,{to:{pathname:"/events/"+e.title,state:{info:e.content}}},a.default.createElement(u.a,{title:e.title,image:d.a,imageTitle:"TechIcon"})))}).reduce(function(e,i,n){return n%3===0&&e.push([]),e[e.length-1].push(i),e},[]).map(function(e,i){return a.default.createElement("div",{key:i,className:"row"},e)})}},{key:"render",value:function(){var e=this;return a.default.createElement("main",null,a.default.createElement("div",{className:"generic-view-container container-fluid"},a.default.createElement(p.a,null),a.default.createElement("div",{className:"generic-view-title"},a.default.createElement("h1",null,"General Events"))),a.default.createElement("div",{className:"container-fluid events-container"},a.default.createElement("span",{className:"back-btn text-center",onClick:function(){return e.context.router.history.goBack()}},"\u2190Back"),this.displayEvents()))}}]),i}(a.Component);i.default=h},159:function(e,i,n){"use strict";function t(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function o(e,i){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!==typeof i&&"function"!==typeof i?e:i}function l(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(e,i):e.__proto__=i)}var a=n(0),s=n(160),r=(n.n(s),function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,n,t){return n&&e(i.prototype,n),t&&e(i,t),i}}()),p=function(e){function i(){return t(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return l(i,e),r(i,[{key:"render",value:function(){return a.default.createElement("div",{className:"generic-box-container animated zoomIn"},a.default.createElement("img",{src:this.props.image,alt:this.props.imageTitle}),a.default.createElement("h6",null,this.props.title))}}]),i}(a.Component);i.a=p},160:function(e,i,n){var t=n(161);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(148)(t,o);t.locals&&(e.exports=t.locals)},161:function(e,i,n){i=e.exports=n(147)(!0),i.push([e.i,".generic-box-container{background-color:#f57e16;padding:25px;border-radius:5px;border:2px solid #f57e16;min-height:120px;margin:10px}.generic-box-container img{display:block;margin:0 auto;width:80px}.generic-box-container h6{color:#fff;font-size:1.65rem;padding:10px;text-align:center}.generic-box-container h6>span{font-size:.7em}.generic-box-container:hover{-webkit-box-shadow:4px 4px 10px 2px #444;box-shadow:4px 4px 10px 2px #444;-webkit-transition:15s ease-in;-o-transition:15s ease-in;transition:15s ease-in}@media(max-width:768px) and (orientation:portrait){.generic-box-container{padding-left:10px;padding-right:10px;margin-left:5px;margin-right:5px}.generic-box-container h6{font-size:1.45rem}}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/components/genericBox/genericBox.css"],names:[],mappings:"AACA,uBACI,yBAA0B,AAC1B,aAAc,AACd,kBAAmB,AACnB,yBAA0B,AAC1B,iBAAkB,AAClB,WAAY,CACb,AACH,2BACI,cAAe,AACf,cAAe,AACf,UAAY,CACf,AACD,0BACI,WAAe,AACf,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACtB,AACD,+BACI,cAAgB,CACnB,AAED,6BACI,yCAA0C,AAClC,iCAAkC,AAC1C,+BAAgC,AAChC,0BAA2B,AAC3B,sBAAwB,CAC3B,AACD,mDACI,uBACI,kBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAkB,CACrB,AACD,0BACI,iBAAmB,CACtB,CACJ",file:"genericBox.css",sourcesContent:["\n.generic-box-container{\n    background-color: #f57e16;\n    padding: 25px;\n    border-radius: 5px;\n    border: solid 2px #f57e16;\n    min-height: 120px;\n    margin:10px;\n  }\n.generic-box-container img{\n    display: block;\n    margin: 0 auto;\n    width: 80px;\n}\n.generic-box-container h6{\n    color: #ffffff;\n    font-size: 1.65rem;\n    padding: 10px;\n    text-align: center;\n}\n.generic-box-container h6 > span{\n    font-size:0.7em;\n}\n\n.generic-box-container:hover{\n    -webkit-box-shadow: 4px 4px 10px 2px #444;\n            box-shadow: 4px 4px 10px 2px #444;\n    -webkit-transition: 15s ease-in;\n    -o-transition: 15s ease-in;\n    transition: 15s ease-in;\n}\n@media(max-width:768px) and (orientation:portrait){\n    .generic-box-container{\n        padding-left:10px;\n        padding-right: 10px;\n        margin-left: 5px;\n        margin-right: 5px; \n    }\n    .generic-box-container h6{\n        font-size: 1.45rem;\n    }\n}"],sourceRoot:""}])},163:function(e,i){e.exports="data:image/png;base64,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"},197:function(e,i,n){var t=n(198);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(148)(t,o);t.locals&&(e.exports=t.locals)},198:function(e,i,n){i=e.exports=n(147)(!0),i.push([e.i,".events-container{min-height:60vh;background-color:#000;margin-top:-8px;padding:10px 10vw}.events-container .row{margin:25px}","",{version:3,sources:["/media/ananth/Works/Abacus18/Website/abacus18/src/views/generalEvents/generalevents.css"],names:[],mappings:"AAAA,kBACI,gBAAiB,AACjB,sBAA0B,AAC1B,gBAAiB,AACjB,iBAAmB,CACtB,AACD,uBACI,WAAa,CAChB",file:"generalevents.css",sourcesContent:[".events-container{\n    min-height: 60vh;\n    background-color: #000000;\n    margin-top: -8px;\n    padding: 10px 10vw;\n}\n.events-container .row{\n    margin: 25px;\n}"],sourceRoot:""}])},199:function(e,i){e.exports=[{title:"Fandom Quiz",content:["<p>How to know you&rsquo;re ready for Abacus&rsquo; fandom quiz</p><ol><li>Your dream is to become a genius, billionaire, playboy philanthropist.</li><li>You can&rsquo;t not hear this in Hermione&rsquo;s voice &ndash; &lsquo;it&rsquo;s leviosa, not leviosa&rsquo;</li><li>You use so many pop culture references that no one knows what you&rsquo;re talking about anymore. (YOLO right?)</li></ol><p>Ready to be Sherlocked?</p>","<p><strong>SERIES :</strong></p><ul><li>Game of thrones</li><li>Stranger things</li><li>Friends</li><li>Sherlock</li></ul><p><strong>ROUND 1: </strong>Pen and paper quiz</p><p>Number of Questions: 25 questions</p><p>Duration: 40 mins</p><p><strong>ROUND 2: Ears at play!</strong></p><ul><li>The audio of a particular scene will be played.</li><li>The team has to identify which series it belongs to, which season, the speaker, the listener and the context of the scene.</li><li>3 teams will be selected from this round</li></ul><p><strong>ROUND 3: Finals (Dumb charades)</strong></p><ul><li>Player 1 has to act the word given.</li><li>Player 2 should correctly identify the word.</li></ul>","<p>Teams of 2 members are allowed</p><ul><li>Instructions given must be strictly followed</li><li>Use of mobile phones is not allowed</li><li>Teams consisting of members from different college is allowed</li><li>Decisions taken by Organizers are final and binding</li></ul>","<p>PAVITHRA.C : 8870603612</p><br/><p>GOWARDHINI.S : 9486172707</p>"]},{title:"Gamindrome",content:["<p><i>&ldquo;I don&rsquo;t need to get a life, I&rsquo;m a gamer, I have lots of lives!&rdquo;</i></p><p>Is WASD what moves you? Then don&rsquo;t get an NPC &ndash; get moving!</p><p>Clash Royale. FIFA. Call of Duty.</p><p>Three events. Three winners. One event.</p><p>Lock and Load Sarge. Final Boss Abacus has been located. Fire at will.</p>","<p><strong>1) CLASH ROYALE</strong></p><p><strong>FORMAT: 3 rounds</strong></p><p>ROUND 1: Elimination</p><ul><li>The players have to be in the same clan and a 1 vs 1 friendly battle will take place.</li><li>The battle deck should contain 6 commons, 1 rare, 1 epic, no legendary</li><li>Each round has 3 stages. The clasher with most wins advances to the next stage.</li></ul><p>ROUND 2: Qualifier</p><ul><li>Clashers who passed previous round will now battle.</li><li>The battle deck should contain 5 commons, 2 rares, 1 epic, no legendary</li></ul><p>ROUND 3: Finals</p><ul><li>The battle deck should contain 4 commons, 2 rares, 2 epics, no legendary (1 epic may be substituted with 1 legendary if both players have unlocked them)</li><li>Battles will be conducted among the players till the ultimate clasher persists!</li></ul><p><strong>2) FIFA</strong></p><p><strong>Points System:</strong></p><p>The following point system will be in place during all matches. The point system is based on the following parameters,</p><ol><li>Victory/Loss</li><li>Goal Difference</li><li>Clean Sheet &ndash; 6pts</li><li>Pass Accuracy &ndash;</li><li>above 90% : 3pts</li><li>80 &ndash; 90%: 2pts</li><li>75 &ndash; 80%: 1pts</li><li>Goals scored &ndash; 4 or more : 3pts</li><li>Goals conceded &ndash; 2 or more: - 2pts</li></ol><p>Total points will be sum of the conditions 2 &ndash; 6.</p><p><strong>Round 1:</strong></p><ol><li>The Top 8 will be selected based on the points system.</li><li>The events will be based on rules alone.</li></ol><p><strong>Round 2:</strong></p><ol><li>Top 8 from previous round will play in knockout round.</li><li>This round is direct elimination.</li><li>Points system is not applicable in this round.</li><li>The contestant can choose any team of their wish.</li></ol><p><strong>3) CALL OF DUTY</strong></p><p><strong>ROUND 1: </strong>Knife round</p><p>Team that wins in knife round will get to choose the map for the 1st match</p><p><strong>ROUND 2: </strong>Search and destroy</p><p>Team that wins chooses next map</p><p><strong>ROUND 3: Search and destroy</strong></p><p>Winning team chooses the map</p><p><strong>ROUND 4: Final round</strong></p><p>Team death match</p>","<p><strong>1) CLASH ROYALE</strong></p><ul><li>Battle members will be assigned by the organisers only.</li><li>Mobile phones are mandatory and must be brought by the player.</li><li>Come with a good internet connectivity. If any lag occurs, a rematch may not be acceptable.</li><li>Points will be awarded based on number of crowns won.</li></ul><p><strong>2) FIFA</strong></p><ol><li>Opponent will choose your team based on the teams provided with equal stats.</li><li>Half &ndash; Time: 5 minutes.</li><li>Points will be updated in front of the contestant.</li></ol><p><strong>3) CALL OF DUTY</strong></p><ul><li>Come as a team (3 - 4 members) if possible.</li><li>Perks &ndash; only normal weapons.</li><li>Mods will not be allowed.</li><li>Team that wins maximum among 2, 3, and 4 will be selected for further rounds.</li><li>Points will be granted based on the number of kills and deaths.</li></ul>","<p><strong>1) CLASH ROYALE</strong></p><p>VENUGOPAL S 9487060227</p><p><strong>2) FIFA</strong></p><p>MUGILAN G 8189891645</p><p>JEGADEESH M 9677615641</p><p>PRAKASH KUMAR K 9994170538</p><p><strong>3) CALL OF DUTY</strong></p><p>VENUGOPAL S 9487060227</p><p>HARINATH 9940364209</p>"]},{title:"Finding Nemo",content:["<p>&lsquo;<em>When life gets you down, do you wanna know what you gotta do? Just keep Swimming, just keep swimming, just keep swimming.</em>&rsquo;</p><p style='text-align:right'>-Dory, Finding Nemo</p><p>Enjoy the more gentle streams of Abacus in this fun event! Decipher the clues and reach your goal. And if you get lost in between, just keep swimming!</p>","<p><strong>Round 1: Pen and Paper</strong></p><ul><li>Number of Questions: 10 questions</li><li>Questions of varying difficulty will be placed in and around the department.</li><li>All questions are encrypted. Once you have successfully decrypted the question, you must complete the task that follows.</li><li>The top 4 teams will be selected for round 2</li></ul><p><strong>Round 2:</strong></p><ul><li>One participant will be given clues to a particular following question.</li><li>Once the participant has solved the clues, he/she must pass it to their team mates via SMS.</li><li>Number of Questions: 5</li><li>Duration: 30 mins</li></ul>","<ol><li>Only teams of 2 or 3 are allowed.</li><li>Instructions should be followed strictly</li><li>Mobile phone is necessary for round-2</li><li>Teams consisting of members from different departments/colleges are allowed</li><li>Decisions taken by the organisers are final and binding</li></ol>","<p>Subha : 95971 21366</p><p>Lalitha : 9176390419</p><p>Jenifer : 9790718543</p>"]},{title:"Houseful",content:["<p>If codes and algorithms are giving you a run for your money, then take a breather with us at Houseful. How many cuts must you make on a piece of paper to get a circle? How fast can you stack and unstack 20 cups? How many brain teasers can you take before you&rsquo;re stuck scratching your heads?</p>","<p><strong>Round 1:</strong></p><ul><ul><li>Number of Questions: 30</li><li>Questions will be based on movies, cricket, connections, puzzles etc.</li><li>Duration: 40 mins</li></ul></ul><p><strong>Round 2:</strong></p><ul><ul><li>Fun tasks will be given</li><li>Each task will have time limit</li><li>7- 10 teams will selected for this round</li></ul></ul><p><strong>Round 3 (Final Round):</strong></p><ul><ul><li>Creative + Fun tasks will be given</li><li>Each task will have time limit</li><li>3 -5 teams will selected for this round</li></ul></ul>","<ol><li>Only 2 or 3 members per team allowed</li><li>Instructions given must be strictly followed</li><li>Use of mobile phones is not allowed</li><li>Teams consisting of members from different college is allowed</li><li>Decisions taken by Organizers are final and binding</li></ol>","<p>NIVETHA .K &ndash; 9551238717</p><p>PRADEEPA .A - 9698111129</p>"]},{title:"Alcatraz",content:["You break the rules, you go to prison. You break prison rules, you go to Alcatraz. Ladies and Gentlemen, welcome to Alcatraz. The clock is ticking and the walls are closing in. Do you have what it takes to break the impregnable?","<p><strong>Round 1: Pen and Paper </strong></p><ul><li>The participants will be given logical and aptitude questions of different levels of difficulty</li><li>Number of questions: 25 questions.</li><li>Duration: 30 minutes</li></ul><p>&nbsp;</p><p><strong>Round 2 : Prison break</strong></p><ul><li>Participants will be locked in a room with several clues. Given a scenario, participants will be asked to use the clues to find their way out.</li><li>Duration: 1 hour</li></ul>","<ol><li>Maximum three per team. Lone wolves allowed.</li><li>Teams consisting of participants from different colleges allowed.</li><li>Any form of malpractice will lead to immediate disqualification.</li><li>Decisions taken by organizer are final and binding.</li></ol>","Abaian    : 9047863210<br/>Kousalya : 9715203020"]},{title:"\u0b95\u0bb1\u0bcd\u0bb1\u0ba4\u0bc1 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd",content:["<div>'\u0b8e\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bc7 \u0bae\u0bc1\u0bb4\u0b99\u0bcd\u0b95 \u0b95\u0bc7\u0b9f\u0bcd\u0baa\u0bcb\u0bae\u0bcd&nbsp;</div><div>\u0b8e\u0ba4\u0bbf\u0bb2\u0bc1\u0bae\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bc7 \u0bb5\u0bb4\u0b99\u0bcd\u0b95 \u0b95\u0bc7\u0b9f\u0bcd\u0baa\u0bcb\u0bae\u0bcd \u0baa\u0bca\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bbf\u0ba9\u0bcd \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0b9a\u0bc1\u0bb5\u0bc8\u0baf\u0bc8 \u0baa\u0bc2\u0bae\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc0\u0ba4\u0bc1 \u0b89\u0bb2\u0bb5 \u0bb5\u0bbf\u0b9f\u0bc1\u0bb5\u0bcb\u0bae\u0bcd'</div><div>\u0ba4\u0bbf\u0bae\u0bbf\u0bb2\u0bc8 \u0baa\u0bb1\u0bcd\u0bb1\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f\u0bc1\u0baa\u0bb5\u0ba9\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0ba4\u0bae\u0bbf\u0bb4\u0bbf\u0ba9\u0bcd \u0b9a\u0bbf\u0bb1\u0baa\u0bcd\u0baa\u0bc8 \u0baa\u0bcb\u0bb1\u0bcd\u0bb1\u0bbf\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f \u0bb5\u0bbe\u0baf\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0b87\u0ba4\u0bcb!!! </div>","<div><strong>\u0baa\u0bcb\u0b9f\u0bcd\u0b9f\u0bbf \u0bb5\u0b9f\u0bbf\u0bb5\u0bae\u0bcd :-</strong> 2 \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bb3\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0ba4\u0bc1.</div><p>&nbsp;</p><div><strong>\u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1 1:-</strong> \u0b89\u0ba4\u0b9f\u0bc1 \u0b89\u0b9a\u0bcd\u0b9a\u0bb0\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bbe\u0bb2\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bc8 \u0b89\u0ba3\u0bb0\u0bcd\u0ba4\u0bb2\u0bcd.</div><p>&nbsp;</p><div>\u0b95\u0bbe\u0b95\u0bbf\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bb2 \u0b95\u0bc1\u0bb5\u0bbf\u0baf\u0bb2\u0bbe\u0b95 \u0b95\u0ba3\u0bcd \u0bae\u0bc1\u0ba9\u0bcd \u0b95\u0bbe\u0ba3\u0bcd\u0baa\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd.\u0b85\u0b95\u0bcd\u0b95\u0bbe\u0b95\u0bbf\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bbf\u0bb2\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb1\u0bb3\u0bcd \u0baa\u0bb4\u0bae\u0bca\u0bb4\u0bbf \u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8 \u0b8e\u0ba9 \u0baa\u0bb2 \u0b8e\u0bb4\u0bc1\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0ba3\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0b92\u0bb0\u0bc1\u0bb5\u0bb0\u0bcd \u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bc1\u0bae\u0bcd \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8 \u0b9a\u0bc6\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bc6\u0b9f\u0bcd\u0b9f\u0bbe\u0bb5\u0ba3\u0bcd\u0ba3\u0bae\u0bcd \u0b95\u0bbe\u0ba4\u0bbf\u0bb2\u0bcd \u0baa\u0bbe\u0b9f\u0bb2\u0bcd \u0b95\u0bc7\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bbe\u0bb0\u0bcd.\u0b95\u0bbe\u0b95\u0bbf\u0ba4\u0ba4\u0bcd<wbr />\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3 \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc8 \u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0ba4\u0bcd\u0ba4\u0bae\u0bbe\u0b95 \u0baa\u0b9f\u0bbf\u0b95\u0bcd\u0b95 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0b89\u0ba4\u0b9f\u0bcd\u0b9f\u0bbf\u0ba9\u0bcd \u0b85\u0b9a\u0bc8\u0bb5\u0bc8 \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bca\u0bb0\u0bc1\u0bb5\u0bb0\u0bcd \u0b95\u0ba3\u0bcd\u0b9f\u0bc1\u0baa\u0bbf\u0b9f\u0bbf\u0b95\u0bcd\u0b95 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.\u0ba8\u0bae\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bbf\u0bb2\u0bcd \u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f \u0bb5\u0bbe\u0baf\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0ba3\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bca\u0bb0\u0bc1 \u0ba8\u0baa\u0bb0\u0bbf\u0ba9\u0bcd \u0bb5\u0bbe\u0baf\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1,\u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd!</div><p>&nbsp;</p><div><strong>\u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bc1 2:-</strong> \u0baa\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc8 \u0b87\u0ba3\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0b95\u0ba4\u0bbe\u0b9a\u0bbf\u0bb0\u0bbf\u0baf\u0bb0\u0bcd \u0b86\u0b95\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.</div><p>&nbsp;</p><div>\u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bbf\u0baa\u0bc6\u0bb1\u0bcd\u0bb1\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd \u0b95\u0bca\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0b90\u0ba8\u0bcd\u0ba4\u0bc1 \u0bb5\u0bc6\u0bb5\u0bcd\u0bb5\u0bc7\u0bb1\u0bc1 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd \u0b9a\u0bca\u0bb1\u0bcd\u0b95\u0bb3\u0bc8\u0b95\u0bcd \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bc1 \u0b92\u0bb0\u0bc1 \u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bc8 \u0b95\u0bc2\u0bb1 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.\u0b87\u0baf\u0ba9\u0bcd\u0bb1 \u0bb5\u0bb0\u0bc8 \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2 \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8 \u0b95\u0bb2\u0b95\u0bcd\u0b95\u0bbe\u0bae\u0bb2\u0bcd \u0b95\u0ba4\u0bc8 \u0b95\u0bc2\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bc6\u0bb1\u0bcd\u0bb1\u0bbf \u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.</div>","<ol><li>\u0b92\u0bb0\u0bcd \u0b85\u0ba3\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0b87\u0bb0\u0bc1\u0bb5\u0bb0\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0b85\u0ba9\u0bc1\u0bae\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bb5\u0bb0\u0bcd.</li><li>\u0ba8\u0b9f\u0bc1\u0bb5\u0bb0\u0bbf\u0ba9\u0bcd \u0ba4\u0bc0\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc7 \u0b87\u0bb1\u0bc1\u0ba4\u0bbf\u0baf\u0bbe\u0ba9\u0ba4\u0bc1</li><li>\u0b9a\u0bc8\u0b95\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0bae\u0bc2\u0bb2\u0bae\u0bcd \u0baa\u0ba4\u0bbf\u0bb2\u0bb3\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0b95\u0bc2\u0b9f\u0bbe\u0ba4\u0bc1.</li><li>\u0b92\u0bb5\u0bcd\u0bb5\u0bca\u0bb0\u0bc1 \u0b85\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd 1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bc1\u0bae\u0bcd \u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bb5\u0ba4\u0bc1 \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd 5 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.</li><li>\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bb5\u0ba4\u0bc1 \u0b9a\u0bc1\u0bb1\u0bcd\u0bb1\u0bbf\u0bb2\u0bcd \u0b95\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b9a\u0bc1\u0bb5\u0bbe\u0bb0\u0b9a\u0bbf\u0baf\u0ba4\u0bcd\u0ba4\u0bc8\u0baa\u0bcd \u0baa\u0bca\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc7 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.\u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2 \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bbe\u0bb2\u0bcd \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.</li></ol>","<p>Cibi Chakravarthy S - 94862 93823</p><p>Bavya V - 87542 49646</p><p>Mahadevan K - 82206 39582</p><p>Sujitha - 99444 61560</p>"]},{title:"Marketing Mania",content:["Tired of watching the same old ads on TV? Have you ever felt that you could come up with far better advertisements? Then summon the marketing guru in you. Use your way with words to sweet talk the crowd into believing that yours is the next hottest brand in town!","<p><strong>Round 1: Adzap</strong></p><p>&nbsp;2 minutes for preparation and 3 minutes for presenting (total 5 minutes per team)</p><p><strong>Round 2: Adzap</strong></p><p>3 minutes for preparation and 5 minutes for presenting (total 8 minutes per team)</p>","<ol><li>Each team should comprise of 3-4 members only.</li><li>Topics will be given on spot.</li><li>Performance is judged based on co-operation and creativity.</li><li>Execution may be either Tamil or English.</li><li>Audience decision is final and binding.</li></ol>","<p>B.Priyadharshini - 9840460971</p><p>S.Nithisha - 9551352454</p><p>A.Vishali - 9791074362</p>"]},{title:"randomize()",content:["<p>If everyday life has got you in a rut, get ready, things are about to take a massive turn! From connections to brain teasers to so much more, Abacus&rsquo; Randomize is here to give you a run for your money. Say goodbye to those daily doldrums, things are about to get random! </p>","<p><strong>Round 1: Connections (Pen and Paper)</strong></p><ul><li>Number of Questions: Approx. 30 questions.</li><li>Duration: 30 minutes</li></ul><p><strong>Round 2: Pen and Paper</strong></p><ul><li>The participants will be given a series of brain teasers and puzzles.</li><li>Number of Questions: Approx. 30 questions.</li><li>Duration: 45 minutes</li></ul>","<ol><li>Maximum three per team. Lone wolves allowed.</li><li>Teams consisting of participants from different colleges allowed.</li><li>Any form of malpractice will lead to immediate disqualification.</li><li>Decisions taken by organizer are final and binding.</li></ol>","<p>Santosh : 96558 32644</p><p>Nandhini : 94448 33190</p><p>Movina : 97899 35916</p>"]},{title:"Spin to Win",content:["<p>If you&rsquo;re feeling lucky, then test your fortune at Abacus&rsquo; Spin to Win. Be nimble and quick on your toes, you&rsquo;ve got to race against the clock. Complete the task and cash in your win with exciting goodies!</p>","<p>2 Rounds.<br /><strong>Round 1:</strong></p><ul><li>Tasks based on movie , cricket , puzzles etc. will be given.</li><li>Each task will have time limit.</li></ul>","<ol><li>Only 2 to 3 members per team allowed</li><li>Instruction given must be strictly followed</li><li>Usage of mobile phones is not allowed</li><li>Team consisting of members from different college is allowed</li><li>Decision taken by organizers are final and binding.</li></ol>","<p>Revathi - 8883102008</p><p>Vani - 8056509620</p>"]},{title:"General Quiz",content:["<p>Are your mornings incomplete without a cup of coffee and a newspaper fresh off the press? Are you the &ldquo;Google&rdquo; of your gang? Do you enjoy reading about anything and everything under the sun? Put that knowledge to good use and come join the Abacus GenQuiz!</p>","<p><strong>Round 1:</strong></p><ul><li>Number of Questions: 25 questions (5 tie breaker)</li><li>Duration: 30 minutes.</li><li>Includes audio/ video questions.</li></ul><p><strong>Round 2:</strong></p><ul><li>6 teams will be shortlisted to this round</li><li>Typical quiz style format will be followed.</li></ul>","<ol><li>Teams of two can participate. Lone wolves are NOT allowed.</li><li>For prelims, the questions will be displayed, the answers to which will have to be answered on a paper.</li><li>Use of internet during the quiz is strictly prohibited.</li><li>If a team is found to be helping another team, both the teams will be immediately disqualified.</li><li>The format for the finals will be declared on the spot.</li><li>The quiz master's decision will be final and binding.</li></ol>","<p>Sivaram Kumar - 8220762765</p><p>Monish - 9952055048</p>"]},{title:"Bid Battle",content:["<p>Think you known heads and tail of cricket? Good. What about money management? Even better. Come and join many other cricket fanatics to see who is the next Srini Mama or a SRK.</p>","<p><strong>Round 1: Pen and Paper</strong></p><ul><li>Number of Questions: 30</li><li>Duration: 30 minutes</li><li>The participants will be given 20 questions related to cricket, ranging from the old test cricket to current formats, including d T10.</li></ul><p><strong>Round 2: Real Auction</strong></p><ul><li>IPL auction style, where you get franchises and players, which tests your money management skills and how good you take players in your team</li><li>Duration: Around 3 hours</li></ul>","<ol><li>2-3 people in a team allowed.</li><li>Teams consisting of participants from different colleges allowed.</li><li>Any form of malpractice will lead to immediate disqualification.</li><li>Decisions taken by organizer are final and binding.</li></ol>","<p>Prasanna - 9003222748</p>"]}]}});
//# sourceMappingURL=5.b87506cc.chunk.js.map