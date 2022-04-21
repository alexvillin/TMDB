<template>
  <div id="details">
    <div v-if="!item.id" class="isLoading"></div>
    <div v-else class="container">
      <b-card class="m-2">
        <b-media>
          <template #aside>
            <b-img width="500" :src="getImageURL(item.backdrop_path)" />
          </template>
          <div class="rating"><i class="active"></i></div>
          <h1 class="title">{{ item.title }}</h1>
          <span v-for="(item, index) in item.genres" :key="index" class="badge badge-warning mr-1"
          >{{ item.name }}
          </span>
          <div class="description my-3">{{ item.overview }}</div>
          <!--.container-flex-->Budget:
          <span class="badge badge-success mr-1">{{ item.budget }}</span
          >Release:
          <span class="badge badge-success mr-1">{{ item.release_date }}</span
          >Popularity:
          <span class="badge badge-success mr-1">{{ item.popularity }}</span
          >Vote:
          <span class="badge badge-success mr-1">{{ item.vote_average }}</span>
          <div
              :class="item.isFavourite ? 'ion-md-heart' : 'ion-md-heart-empty'"
              class="icon col-sm"
          ></div>
        </b-media>
      </b-card>
      <h3>Related films: {{ related.total_results }}</h3>
      <div class="container-flex">
        <film-card
          v-for="item in related.results"
          :key="item.id"
          :item="item"
          class="small col-sm"
        >
        </film-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import FilmCard from "@/components/film-card";

export default {
  name: "details-view",
  components: {FilmCard},
  data() {
    return {
      item: {},
    };
  },
  computed: {
    ...mapState(["related", "favourites", "config"]),
  },
  created() {
    const id = this.$route.params.id;
    this.loadData(id);
  },
  watch: {
    '$route': function (to, from) {
      this.loadData(to.params.id)
    }
  },

  methods: {
    loadData(id) {
      this.$store.dispatch("getMovieById", id).then((response) => {
        this.item = response.data;
      });
      this.$store.dispatch("getRelatedMovies", id);
    },
    getImageURL(path) {
      return this.config.images['secure_base_url'] + this.config.images['backdrop_sizes'][3] + path;
    }
  },
};
</script>

<style scoped lang="scss">
#details {
  //img {
  //  width: 100%;
  //  max-width: 600px;
  //}
}
</style>
