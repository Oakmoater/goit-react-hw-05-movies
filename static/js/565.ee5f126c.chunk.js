"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[565],{80:function(e,t,r){r.d(t,{Hx:function(){return f},Tg:function(){return s},Y5:function(){return p},xc:function(){return l},z1:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODBjYWExOTNmYThjNjdkM2IzNjAxNTU5ZjI3ZjVjOCIsInN1YiI6IjY0MzZmYjNkOTQ2MzE4MDA5YTJlNWJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPu6W8tbG8flf6ruZ_S92c8XdiohS5SHkBe3jEgG81I")}},s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",o);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=encodeURIComponent(t),e.next=4,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),o);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),o);case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),o);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),o);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},906:function(e,t,r){r(791);var n=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p","/").concat("w200").concat(e.poster_path),alt:""}),e.title?e.title:e.name]})},e.id)}))})}},565:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=r(87),i=r(80),p=r(906),l=r(184);t.default=function(){var e,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],f=r[1],v=(0,s.lr)(),h=(0,a.Z)(v,2),d=h[0],m=h[1],g=null!==(e=d.get("query"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.z1)(g);case 3:t=e.sent,f(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}""!==g?function(){e.apply(this,arguments)}():f([])}),[d,g]),(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;m({query:t})},children:[(0,l.jsx)("input",{type:"text",name:"query",defaultValue:g}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)(p.Z,{movies:c})]})}}}]);
//# sourceMappingURL=565.ee5f126c.chunk.js.map