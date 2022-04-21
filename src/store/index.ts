import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import qs from "qs"

Vue.use(Vuex);
// import { Store } from 'vuex'
//
// declare module '@vue/runtime-core' {
//   // declare your own store states
//   interface State {
//     count: number
//   }
//
//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }

const url = 'https://api.themoviedb.org/3';
const api_key = 'ef963e24f0dc29f7a9347e404b8c5b62';
const sessionId = window.sessionStorage.getItem("sessionId") || null;

const http = axios.create({
  baseURL: url,
  paramsSerializer: (params: any) => {
    return qs.stringify(params, {arrayFormat: 'repeat'});
  },
  params: {
    api_key,
    session_id: sessionId || undefined
  }
});

const defaultAccount = () => ({
  username: "Anonimus"
});

export default new Vuex.Store({
  state: {
    config: null,
    account: defaultAccount(),
    sessionId,
    movies: [] as Array<any>,
    genres: [] as Array<any>,
    related: [] as Array<any>,
    favourites: [] as Array<any>,
    currentPage: 1,
    total: 0,
    genre: null,
    orderBy: null,
  },
  getters: {
    favourites(state) {
      return state.favourites;
    }
  },
  mutations: {
    addFavourites(state, payload): void {
      state.favourites.push(payload);
    },
    removeFavourites(state, index): void {
      state.favourites.splice(index, 1);
    },
    setCurrentPage(state, page){
      state.currentPage = page;
    },
     setGenre(state, id){
       state.genre = id;
     },
    setOrderBy(state, id){
      state.orderBy = id;
    },
    toggleFavourite() {
      //TODO
    },
    setConfig(state, payload) {
      state.config = payload;
    },
    setAccount(state, payload) {
      state.account = payload;
    },
    setSessionId(state, payload) {
      state.sessionId = payload;
    }
  },
  actions: {
    getConfig({commit}){
      return http.get(`${url}/configuration`).then(response => {
        commit("setConfig", response.data);
      })
    },
    getAccount({state, commit}) {
      return http.get(`${url}/account`).then(response => {
        commit("setAccount", response.data);
      })
    },
    getToken() {
      return http.get(`${url}/authentication/token/new`).then(response => {
        return response.data.request_token;
      })
    },
    setSessionId({state, dispatch, commit}, payload) {
      if(!payload) {
        return Promise.reject();
      }
      return http.post(`${url}/authentication/session/new`, {
        request_token: payload
      }).then(response => {
        const id = response.data.session_id
        commit("setSessionId", id);
        http.defaults.params.session_id = id;
        dispatch("getAccount");
        window.sessionStorage.setItem("sessionId", id);
      })
    },
    deleteSession({state, commit}) {
      return http.delete(`${url}/authentication/session`, {
        params:{
          session_id: state.sessionId
        }
      }).then(() => {
        window.sessionStorage.removeItem("sessionId");
        commit("setSessionId", null);
        commit("setAccount", defaultAccount());
      })
    },
    getPopularMovies({state}) {
      return http.get(`${url}/movie/popular`, {
        params: {
          page: state.currentPage,
          order_by: state.orderBy
        }
      }).then(({data}: {data:any}) => {
        state.movies = data.results;
        state.currentPage = data.page;
        state.total = data.total_results;
      });
    },
    getMovieById(id) {
      return http.get(`${url}/movie/${id}`);
    },
    getRelatedMovies({state}, id) {
      return http.get(`${url}/movie/${id}/similar`).then(({data}: {data:any}) => {
        state.related = data.result
      });
    },
    getGenres({state}) {
      return http.get(`${url}/genre/movie/list`).then(({data}: {data:any}) => {
        state.genres = data.genres
      });
    },

  },
  modules: {
  },
});
