<template>
  <div id="home">
    <form class="container-flex well">
      <b-form-input type="search" placeholder="Search" v-model="search" class="col-sm"></b-form-input>
      <div class="col-sm-4">
        <b-input-group size="md" prepend="Genre">
<!--                <select v-model="genre" class="form-control col-sm">-->
<!--                  <option value="">Select genre</option>-->
<!--                  <option v-for="(value,index) in genres"-->
<!--                          :key="index"-->
<!--                          :value="value.id">{{value.name}}</option>-->
<!--                </select>-->
          <b-form-select
              v-model="genreModel" :options="genresOptions" class="col-md" id="order-by"></b-form-select>
        </b-input-group>
      </div>
      <div class="col-sm-2">
        <b-input-group size="md" prepend="Order by">
          <b-form-select
              v-model="orderByModel" :options="orderByOptions" class="col-md" id="order-by"></b-form-select>
        </b-input-group>
      </div>
    </form>
    <div v-if="isLoading" class="isLoading"></div>
    <h3 v-else-if="!movies.length">No movies searched</h3>

    <div class="container-flex">
      <film-card v-for="(item,index) in movies"
                 :key="index"
                 :item="item"
                 :isFavourite="true"
                 class="col-sm"></film-card>
    </div>
    <b-pagination size="md"
                  :total-rows="total"
                  v-model="page"
                  :per-page="movies.length"></b-pagination>
  </div>
</template>

<script>
import {mapState} from "vuex"
import FilmCard from "../components/film-card"

export default {
  name: "home-view",
  components: {FilmCard},
  data: function () {
    return {
      search: '',
      isLoading: true,
      orderByOptions: [
        {text: "Title", value: "title"},
        {text: "Date", value: "release_date"},
        {text: "Popularity", value: "popularity"},
        {text: "Rating", value: "vote_average"},
      ]
    }
  },
  created() {
    this.getPopularMovies();
    this.getGenres();
  },
  computed: {
    ...mapState(["genres", "movies", "total", "currentPage", "genre", "orderBy"]),
    page: {
      get() {
        return this.currentPage
      },
      set(value) {
        this.$store.commit("setCurrentPage", value)
      }
    },
    genresOptions() {
      return this.genres.map(item => ({
        text: item.name,
        value: item.id
      }))
    },
    genreModel: {
      get() {
        return this.genre;
      },
      set(value) {
        this.$store.commit("setGenre", value)
      }
    },
    orderByModel: {
      get() {
        return this.orderBy;
      },
      set(value) {
        this.$store.commit("setOrderBy", value)
      }
    }
  },
  watch: {
    page() {
      this.getPopularMovies();
//           router.push('/');
    },
    genre() {
      this.page = 1;
      this.getPopularMovies();
    }
  },
  methods: {
    getGenres(){
      this.$store.dispatch("getGenres")
    },
    getPopularMovies() {
      this.isLoading = true;
      this.$store.dispatch("getPopularMovies").then(() => {
        //TODO
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
}
</script>

<style scoped>

</style>