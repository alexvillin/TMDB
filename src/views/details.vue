<template>
  <div id="details">
    <div v-if="!item.id" class="isLoading"></div>
    <div v-else class="container">
      <div class="well">
        <img :src="item.image_url" />
        <div class="rating"><i class="active"></i></div>
        <h1 class="title">{{ item.title }}</h1>
        <span v-for="(item, index) in item.genres" :key="index" class="badge badge-warning mr-1"
          >{{ item.name }}
        </span>
        <div class="descr">{{ item.overview }}</div>
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
      <h3>Related films: {{ related.length }}</h3>
      <div class="container-flex">
        <film-card
          v-for="item in related"
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

export default {
  name: "details-view",
  data() {
    return {
      item: {},
      related: [],
    };
  },

  created() {
    const id = this.$route.params.id;
    this.loadData(id);
  },
  // watch: {
  //   '$route': function (to, from) {
  //     this.loadData(to.params.id)
  //   }
  // },

  computed: {
    ...mapState(["favourites"]),
  },
  methods: {
    loadData(id) {
      this.$store.dispatch("getMovieById", id).then((response) => {
        this.item = response;
      });
      this.$store.dispatch("getRelatedMovies", id).then((response) => {
        this.related = response;
      });
    },
  },
};
</script>

<style scoped lang="scss">
#details {
  img {
    width: 100%;
    max-width: 600px;
  }
}
</style>
