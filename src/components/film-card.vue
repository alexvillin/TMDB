<template>
  <router-link :to="'/details/' + item.id" class="film-card"
    ><img :src="getImageURL(item.poster_path)" />
    <div class="rating">
      <i class="active">{{item.vote_average}}</i>
    </div>
    <p class="title">{{ item.title }}</p>
    <template v-if="genres && genres.length">
      <span
          v-for="id in item.genre_ids"
          :key="id"
          @click.prevent="selectGenre(id)"
          data-toggle="tooltip"
          data-placement="top"
          title="Select genre"
          class="badge badge-warning mr-1"
      >{{ genresMap[id] }}
      </span>
    </template>
    <div class="description">{{ item.overview }}</div>
    <i
      :class="isFavourite ? 'ion-md-heart' : 'ion-md-heart-empty'"
      @click.prevent="toggleFavourite"
      title="Add to favourites"
      class="icon"
    ></i>
  </router-link>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "film-card",
  props: {
    item: Object,
    isFavourite: Boolean
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["favourites", "genres", "config"]),
    genresMap() {
      const result = {};
      return this.genres.length
          && this.genres.reduce((acc, item) => (acc[item.id] = item.name, acc), result)
          && result;
    }
  },
  methods: {
    toggleFavourite(id) {
      this.$store.commit("toggleFavourite", id)
    },
    selectGenre(value){
      this.$store.commit("setGenre", value);
    },
    getImageURL(path) {
      return this.config.images['secure_base_url'] + this.config.images['backdrop_sizes'][0] + path;
    }
  },
};
</script>

<style scoped lang="scss">
.film-card {
  margin: 0.5vw;
  padding: 15px;
  //width: 28%;
  min-width: 200px;
  //display: inline-block;
  background-color: white;
  position: relative;
  padding-bottom: 40px;
  border: 1px solid grey;
  border-radius: 5px;

  &:hover {
    text-decoration: none;
    background-color: lightblue;
  }

  img {
    width: 100%;
    padding-bottom: 10px;
  }

  .title {
    color: #333;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  .description {
    color: #999;
    max-height: 100px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 10px;
  }

  .rating {
    padding: 5px 0;

    i {
      display: inline-block;
      height: 10px;
      width: 10px;
      background-image: url(../assets/star.png);

      &.active {
        background-image: url(../assets/star_black.png);
      }
    }
  }

  .icon {
    position: absolute;
    bottom: 0;
    left: calc(100% / 2 - 10px);
  }

  .badge {
    cursor: pointer;
  }

  &.small {
    max-width: 160px;
    min-width: 130px;
    padding: 0;
    padding-bottom: 35px;

    .title {
      padding: 0 10 px;
    }

    .descr {
      display: none;
    }
  }
}
</style>
