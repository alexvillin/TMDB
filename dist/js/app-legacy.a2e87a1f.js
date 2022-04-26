(function(){"use strict";var t={9958:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(144),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",[t._v("TMDB Movies")]),n("b-collapse",{staticClass:"justify-content-end",attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/favourites"}},[t._v("Favourites")]),t.sessionId?n("router-link",{staticClass:"nav-link",attrs:{to:"/favourites"}},[n("div",{staticClass:"icon ion-md-heart",attrs:{title:"show favourites"}},[t._v(" "+t._s(t.favourites.length)+" ")])]):t._e(),n("router-link",{staticClass:"nav-link",attrs:{to:"/account"}},[t._v(t._s(t.account.username))]),t.sessionId?t._e():n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.login}},[t._v("Login")]),t.sessionId?n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1)},i=[],a=n(3019),r=(n(4916),n(5306),n(2222),n(629)),c={name:"App",computed:(0,a.Z)({},(0,r.rn)(["account","sessionId","favourites"])),data:function(){return{approvedToken:this.$route.query.request_token}},created:function(){var t=this;this.$store.dispatch("getConfig"),this.sessionId?this.$store.dispatch("getAccount"):this.$store.dispatch("setSessionId",this.approvedToken).then((function(){t.$router.push("/")}))},methods:{login:function(){this.$store.dispatch("getToken").then((function(t){window.location.replace("https://www.themoviedb.org/authenticate/".concat(t,"?redirect_to=http://").concat(location.host))}))},logout:function(){var t=this;this.$store.dispatch("deleteSession").then((function(){t.$router.push("/")}))}}},u=c,l=n(1001),d=(0,l.Z)(u,s,i,!1,null,null,null),v=d.exports,f=n(5205);(0,f.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=n(8345),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("form",{staticClass:"container-flex well"},[n("b-form-input",{staticClass:"col-sm",attrs:{type:"search",placeholder:"Search"},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),n("div",{staticClass:"col-sm-4"},[n("b-input-group",{attrs:{size:"md",prepend:"Genre"}},[n("b-form-select",{staticClass:"col-md",attrs:{options:t.genresOptions,id:"order-by"},model:{value:t.genreModel,callback:function(e){t.genreModel=e},expression:"genreModel"}})],1)],1),n("div",{staticClass:"col-sm-2"},[n("b-input-group",{attrs:{size:"md",prepend:"Order by"}},[n("b-form-select",{staticClass:"col-md",attrs:{options:t.orderByOptions,id:"order-by"},model:{value:t.orderByModel,callback:function(e){t.orderByModel=e},expression:"orderByModel"}})],1)],1)],1),t.isLoading?n("div",{staticClass:"isLoading"}):t.movies.length?t._e():n("h3",[t._v("No movies searched")]),n("div",{staticClass:"container-flex"},t._l(t.movies,(function(t,e){return n("film-card",{key:e,staticClass:"col-sm",attrs:{item:t,isFavourite:!0}})})),1),n("div",{staticClass:"mt-4"},[n("b-pagination",{staticClass:"d-inline-flex",attrs:{"total-rows":t.total,"per-page":t.movies.length},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])},p=[],h=(n(1249),n(8309),n(4765),n(1539),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"film-card",attrs:{to:"/details/"+t.item.id}},[n("img",{attrs:{src:t.getImageURL(t.item.poster_path)}}),n("div",{staticClass:"m-3 mb-4"},[n("div",{staticClass:"rating"},[n("i",{staticClass:"active"},[t._v(t._s(t.item.vote_average))])]),n("p",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.genres&&t.genres.length?t._l(t.item.genre_ids,(function(e){return n("span",{key:e,staticClass:"badge badge-warning mr-1",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Select genre"},on:{click:function(n){return n.preventDefault(),t.selectGenre(e)}}},[t._v(t._s(t.genresMap[e])+" ")])})):t._e(),n("div",{staticClass:"description"},[t._v(t._s(t.item.overview))]),n("i",{staticClass:"icon",class:t.isFavourite?"ion-md-heart":"ion-md-heart-empty",attrs:{title:"Add to favourites"},on:{click:function(e){return e.preventDefault(),t.toggleFavourite.apply(null,arguments)}}})],2)])}),_=[],b={name:"film-card",props:{item:Object,isFavourite:Boolean},data:function(){return{}},computed:(0,a.Z)((0,a.Z)({},(0,r.rn)(["favourites","genres","config"])),{},{genresMap:function(){var t={};return this.genres.length&&this.genres.reduce((function(t,e){return t[e.id]=e.name,t}),t)&&t}}),methods:{toggleFavourite:function(t){this.$store.commit("toggleFavourite",t)},selectGenre:function(t){this.$store.commit("setGenre",t)},getImageURL:function(t){return this.config.images["secure_base_url"]+this.config.images["backdrop_sizes"][0]+t}}},y=b,C=(0,l.Z)(y,h,_,!1,null,"94bcdb22",null),w=C.exports,k={name:"home-view",components:{FilmCard:w},data:function(){return{isLoading:!0,orderByOptions:[{text:"Title",value:"title"},{text:"Date",value:"release_date"},{text:"Popularity",value:"popularity"},{text:"Rating",value:"vote_average"}]}},created:function(){this.getPopularMovies(),this.getGenres()},computed:(0,a.Z)((0,a.Z)({},(0,r.rn)(["genres","movies","total","currentPage","genre","orderBy","search"])),{},{page:{get:function(){return this.currentPage},set:function(t){this.$store.commit("setCurrentPage",t)}},genresOptions:function(){return this.genres.map((function(t){return{text:t.name,value:t.id}}))},searchModel:{get:function(){return this.search},set:function(t){this.page=1,this.$store.dispatch("getSearchMovie",t)}},genreModel:{get:function(){return this.genre},set:function(t){this.$store.commit("setGenre",t),this.page=1,this.getPopularMovies()}},orderByModel:{get:function(){return this.orderBy},set:function(t){this.$store.commit("setOrderBy",t),this.page=1,this.getPopularMovies()}}}),watch:{page:function(){this.getPopularMovies(),this.scrollToTop()}},methods:{getGenres:function(){this.$store.dispatch("getGenres")},getPopularMovies:function(){var t=this;this.isLoading=!0,this.$store.dispatch("getPopularMovies").then((function(){})).finally((function(){t.isLoading=!1}))},scrollToTop:function(){window.scrollTo(0,0)}}},Z=k,M=(0,l.Z)(Z,g,p,!1,null,"53d5faf1",null),x=M.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"favourites"}},[t.movies.length?n("h3",[t._v("Favourites")]):n("h3",[t._v("No favourites selected")]),n("div",{staticClass:"container-flex"},t._l(t.movies,(function(t){return n("film-card",{directives:[{name:"show",rawName:"v-show",value:t.isFavourite,expression:"item.isFavourite"}],key:t.id,staticClass:"col sm",attrs:{item:t}})})),1)])},I=[],P={name:"favourites-view",data:function(){return{movies:[]}},computed:(0,a.Z)({},(0,r.rn)(["favourites"]))},B=P,F=(0,l.Z)(B,$,I,!1,null,"644acf26",null),O=F.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"details"}},[t.item.id?n("div",{staticClass:"container"},[n("b-card",{staticClass:"m-2"},[n("b-media",{scopedSlots:t._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{width:"500",src:t.getImageURL(t.item.backdrop_path)}})]},proxy:!0}])},[n("div",{staticClass:"rating"},[n("i",{staticClass:"active"})]),n("h1",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._l(t.item.genres,(function(e,o){return n("span",{key:o,staticClass:"badge badge-warning mr-1"},[t._v(t._s(e.name)+" ")])})),n("div",{staticClass:"description my-3"},[t._v(t._s(t.item.overview))]),t._v("Budget: "),n("span",{staticClass:"badge badge-success mr-1"},[t._v(t._s(t.item.budget))]),t._v("Release: "),n("span",{staticClass:"badge badge-success mr-1"},[t._v(t._s(t.item.release_date))]),t._v("Popularity: "),n("span",{staticClass:"badge badge-success mr-1"},[t._v(t._s(t.item.popularity))]),t._v("Vote: "),n("span",{staticClass:"badge badge-success mr-1"},[t._v(t._s(t.item.vote_average))]),n("div",{staticClass:"icon col-sm",class:t.item.isFavourite?"ion-md-heart":"ion-md-heart-empty"})],2)],1),n("h3",[t._v("Related films: "+t._s(t.related.total_results))]),n("div",{staticClass:"container-flex"},t._l(t.related.results,(function(t){return n("film-card",{key:t.id,staticClass:"small col-sm",attrs:{item:t}})})),1)],1):n("div",{staticClass:"isLoading"})])},T=[],L={name:"details-view",components:{FilmCard:w},data:function(){return{item:{}}},computed:(0,a.Z)({},(0,r.rn)(["related","favourites","config"])),created:function(){var t=this.$route.params.id;this.loadData(t)},watch:{$route:function(t,e){this.loadData(t.params.id)}},methods:{loadData:function(t){var e=this;this.$store.dispatch("getMovieById",t).then((function(t){e.item=t.data})),this.$store.dispatch("getRelatedMovies",t)},getImageURL:function(t){return this.config.images["secure_base_url"]+this.config.images["backdrop_sizes"][3]+t}}},A=L,G=(0,l.Z)(A,S,T,!1,null,"b9f703ba",null),j=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-flex well"},[n("pre",[t._v(t._s(t.account))])])},E=[],D={name:"account-view",computed:(0,a.Z)({},(0,r.rn)(["account"]))},q=D,z=(0,l.Z)(q,R,E,!1,null,"42038e04",null),N=z.exports;o.Z.use(m.Z);var U=[{path:"/",component:x,name:"home"},{path:"/favourites",component:O,name:"favourites"},{path:"/details/:id",component:j,name:"details"},{path:"/account",component:N,name:"account"}],K=new m.Z({mode:"history",base:"/",routes:U}),H=K,Q=(n(561),n(9669)),V=n.n(Q),J=n(129),W=n.n(J);o.Z.use(r.ZP);var X="https://api.themoviedb.org/3",Y="ef963e24f0dc29f7a9347e404b8c5b62",tt=window.sessionStorage.getItem("sessionId")||null,et=V().create({baseURL:X,paramsSerializer:function(t){return W().stringify(t,{arrayFormat:"repeat"})},params:{api_key:Y,session_id:tt||void 0}}),nt=function(){return{username:"Anonimus"}},ot=new r.ZP.Store({state:{config:null,account:nt(),sessionId:tt,movies:[],genres:[],related:[],favourites:[],currentPage:1,total:0,genre:null,orderBy:null,search:null},getters:{favourites:function(t){return t.favourites}},mutations:{addFavourites:function(t,e){t.favourites.push(e)},removeFavourites:function(t,e){t.favourites.splice(e,1)},setCurrentPage:function(t,e){t.currentPage=e},setGenre:function(t,e){t.genre=e},setOrderBy:function(t,e){t.orderBy=e},toggleFavourite:function(){},setConfig:function(t,e){t.config=e},setAccount:function(t,e){t.account=e},setSessionId:function(t,e){t.sessionId=e}},actions:{getConfig:function(t){var e=t.commit;return et.get("".concat(X,"/configuration")).then((function(t){e("setConfig",t.data)}))},getAccount:function(t){t.state;var e=t.commit;return et.get("".concat(X,"/account")).then((function(t){e("setAccount",t.data)}))},getToken:function(){return et.get("".concat(X,"/authentication/token/new")).then((function(t){return t.data.request_token}))},setSessionId:function(t,e){t.state;var n=t.dispatch,o=t.commit;return e?et.post("".concat(X,"/authentication/session/new"),{request_token:e}).then((function(t){var e=t.data.session_id;o("setSessionId",e),et.defaults.params.session_id=e,n("getAccount"),window.sessionStorage.setItem("sessionId",e)})):Promise.reject()},deleteSession:function(t){var e=t.state,n=t.commit;return et.delete("".concat(X,"/authentication/session"),{params:{session_id:e.sessionId}}).then((function(){window.sessionStorage.removeItem("sessionId"),n("setSessionId",null),n("setAccount",nt())}))},getPopularMovies:function(t){var e=t.state;return et.get("".concat(X,"/movie/popular"),{params:{page:e.currentPage,sort_by:"".concat(e.orderBy,".desc"),with_genres:e.genre}}).then((function(t){var n=t.data;e.movies=n.results,e.currentPage=n.page,e.total=n.total_results}))},getMovieById:function(t,e){return et.get("".concat(X,"/movie/").concat(e))},getRelatedMovies:function(t,e){var n=t.state;return et.get("".concat(X,"/movie/").concat(e,"/similar")).then((function(t){var e=t.data;n.related=e}))},getGenres:function(t){var e=t.state;return et.get("".concat(X,"/genre/movie/list")).then((function(t){var n=t.data;e.genres=n.genres}))},getSearchMovie:function(t,e){var n=t.state;return et.get("".concat(X,"/search/movie"),{params:{query:e,sort_by:"".concat(n.orderBy,".desc"),with_genres:n.genre}}).then((function(t){var o=t.data;n.movies=o.results,n.currentPage=o.page,n.total=o.total_results,n.search=e}))}},modules:{}}),st=n(9596),it=n(3813),at=n(3841),rt=n(3045),ct=n(5239),ut=n(3937),lt=n(8557),dt=n(9780),vt=n(6708),ft=n(4306),mt=n(3521);n(44);o.Z.config.productionTip=!1,o.Z.component("b-navbar",st.EG),o.Z.component("b-navbar-toggle",st.SQ),o.Z.component("b-navbar-brand",st.Dk),o.Z.component("b-navbar-nav",st.oK),o.Z.component("b-collapse",it.k),o.Z.component("b-form-input",at.e),o.Z.component("b-form-select",rt.KB),o.Z.component("b-pagination",ct.c),o.Z.component("b-form-group",ut.x),o.Z.component("b-input-group",lt.wl),o.Z.component("b-card",dt._u),o.Z.component("b-img",ft.sq),o.Z.component("b-media",vt.PC),o.Z.component("b-button",mt.TG),new o.Z({router:H,store:ot,render:function(t){return t(v)}}).$mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],s=t[l][1],i=t[l][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,a=o[0],r=o[1],c=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var l=c(n)}for(e&&e(o);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkmy_pet"]=self["webpackChunkmy_pet"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9958)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.a2e87a1f.js.map