(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1,5],{116:function(e,t,n){"use strict";n.r(t);var a=n(63),i=n(55),r=n(56),c=n(59),o=n(58),u=n(0),s=n(57),f=n(64),l=n(62),v=n(16),h=n.n(v),d=n(2),g=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],error:null,isLoading:!1},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),s.a.fetchMovies().then((function(t){e.setState({movies:Object(a.a)(t)})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoading,a=e.error;return Object(d.jsxs)("div",{children:[n&&Object(d.jsx)(h.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),a?Object(d.jsx)(l.default,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Trending Today"}),Object(d.jsx)(f.a,{movies:t})]})]})}}]),n}(u.Component);t.default=g},57:function(e,t,n){"use strict";var a=n(60),i=n.n(a);i.a.defaults.baseURL="https://api.themoviedb.org";var r="c4360f2fc66490777a6befee451fce21";t.a={fetchMovies:function(){return i.a.get("/3/trending/movie/day?api_key=".concat(r)).then((function(e){return e.data.results}))},fetchByKeyWord:function(e){var t=e.query;return i.a.get("/3/search/movie?query=".concat(t,"&api_key=").concat(r,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data.results}))},fetchMovieDetals:function(e){var t=e.movieId;return i.a.get("/3/movie/".concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))},fetchGenres:function(){return i.a.get("/3/genre/movie/list?api_key=".concat(r,"&language=en-US")).then((function(e){return e.data.genres}))},fetchReviews:function(e){var t=e.movieId;return i.a.get("/3/movie/".concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.data.results}))},fetchCast:function(e){var t=e.movieId;return i.a.get("/3/movie/".concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))}}},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(2);t.default=function(){return Object(a.jsx)("h1",{children:"404 page not found"})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(11),i=n(3),r=n(61),c=n.n(r),o=n(2),u=Object(i.f)((function(e){var t=e.movies,n=e.location;return Object(o.jsx)("ul",{className:c.a.list,children:t.map((function(e){var t=e.id,i=e.original_title,r=e.original_name;return Object(o.jsx)("li",{children:Object(o.jsxs)(a.b,{to:{pathname:"/movies/".concat(t),state:{from:n}},children:[i||r," "]})},t)}))})}))}}]);
//# sourceMappingURL=home-page.043f9974.chunk.js.map