(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),i=n.n(o),c=(n(201),n(23)),s=n(30),u=n(24),l=n(25),d=(n(202),n(203),n(168)),h=n.n(d),f=n(6),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e.renderTime=function(){var t=e.props.event.start.dateTime,n=h()(t,"YYYY-MM-DD HH:mm").toDate();return Object(f.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h1",{children:t.summary}),Object(f.jsx)("p",{children:this.renderTime()}),Object(f.jsx)("p",{className:"locations",children:t.location}),this.state.showHideDetails&&Object(f.jsxs)("div",{className:"event-details",children:[Object(f.jsx)("h2",{children:"About event:"}),Object(f.jsx)("a",{href:t.htmlLink,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("button",{className:"google-btn",children:"See Details on Google Calendar"})}),Object(f.jsx)("p",{className:"description",children:t.description})]}),Object(f.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"Hide details":"Show details"})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(b),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.state={query:"",suggestions:[],showSuggestions:void 0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(m,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:15},e.handleEventInputChanged=function(t){var n=t.target.value;return n<1||n>15?e.setState({eventCount:"",errorText:"Select a number between 1 and 15"}):(e.setState({eventCount:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"numberOfEvents",children:[Object(f.jsx)("h4",{children:"Number of Events"}),Object(f.jsx)("input",{type:"number",className:"numberInput",placeholder:"Enter Number of Events",value:this.state.eventCount,onChange:this.handleEventInputChanged}),Object(f.jsx)(j,{type:"text",text:this.state.errorText})]})}}]),n}(a.Component),x=n(33),y=n.n(x),k=n(74),S=n(190),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=n(118),E=n.n(C),N=n(75),D=n.n(N),Z=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},I=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://1votjgl44k.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return D.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),D.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return L(),a="https://1votjgl44k.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=Z(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),D.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},B=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://1votjgl44k.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=n(358),H=n(362),F=n(363),J=n(186),q=n(187),R=n(78),U=n(191),Y=n(18),z=n(365),_=n(181),P=n(93),G=n(73),K=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(Y.a)(n,2),o=r[0],i=r[1];Object(a.useEffect)((function(){i((function(){return c()}))}),[t]);var c=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return e.value>0}))},s=["#0088FE","#00C49F","#FFBB28","#FF8042","#85D2DB"];return Object(f.jsx)(M.a,{height:400,children:Object(f.jsxs)(z.a,{width:400,height:400,children:[Object(f.jsx)(_.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(f.jsx)(P.a,{fill:s[t%s.length],name:e.name},"cell-".concat(t))}))}),Object(f.jsx)(G.a,{verticalAlign:"top",iconType:"line"})]})})},V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventCount:15,currentLocation:"all"},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.eventCount;t?A().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):A().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,eventCount:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently offline, so data may not be up to date"}),A().then((function(t){var n=e.state.eventCount;if(e.mounted){var a=t.slice(0,n);e.setState({events:a,locations:Z(t)})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.eventCount,n=e.events;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(g,{text:this.state.warningText}),Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)("h4",{children:"Choose a city"}),Object(f.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(O,{updateEvents:this.updateEvents,eventCount:t}),Object(f.jsx)("h4",{children:"Events in each city"}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(K,{events:n}),Object(f.jsx)(M.a,{height:400,children:Object(f.jsxs)(H.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(F.a,{}),Object(f.jsx)(J.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(q.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(f.jsx)(R.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(U.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(f.jsx)(p,{events:this.state.events})]})}}]),n}(a.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},ee=n(188);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),ee.config("f3586b95bb42442dab51758330bb6a72").install(),$()}},[[357,1,2]]]);
//# sourceMappingURL=main.de458bf3.chunk.js.map