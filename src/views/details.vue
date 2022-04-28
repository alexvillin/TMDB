<template>
  <div id="details">
<!--    <div v-if="!item.id" class="isLoading"></div>-->
    <div class="container">
      <b-card class="m-2">
        <div class="d-flex" id="details-item">
          <div class="flex-grow-1 mb-3">
            <img id="image" :src="imageURL" />
          </div>
          <div class="flex-grow-1">
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
          </div>
        </div>
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
    imageURL() {
      return this.config
          && this.item
          && this.config.images['secure_base_url'] + this.config.images['backdrop_sizes'][3] + this.item.backdrop_path;
    }
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
  },
};
</script>

<style scoped lang="scss">
#details-item {

  flex-direction: row;
  flex-wrap: wrap;

  img {
    display: block;
    width: 100%;
  }
}
</style>
