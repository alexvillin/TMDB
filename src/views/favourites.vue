<template>
  <div id="favourites">
    <h3 v-if="movies.length">Favourites</h3>
    <h3 v-else>No favourites selected</h3>
    <div class="container-flex">
      <film-card
        v-for="item in movies"
        :key="item.id"
        :item="item"
        v-show="item.isFavourite"
        class="col sm"
      ></film-card>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "favourites-view",
  data: function () {
    return {
      movies: [],
    }
  },
  computed: {
    ...mapState(["favourites"])
  },

};
</script>

<style scoped></style>
