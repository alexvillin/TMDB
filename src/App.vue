<template>
  <div id="app">
    <b-navbar toggleable="md" v-cloak>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand
        >TMDB Movies</b-navbar-brand
      >
      <b-collapse is-nav id="nav_collapse" class="justify-content-end">
        <b-navbar-nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/favourites" class="nav-link"
            >Favourites</router-link
          >
          <router-link v-if="sessionId" to="/favourites" class="nav-link">
            <div title="show favourites" class="icon ion-md-heart">
              {{ favourites.length }}
            </div>
          </router-link>
          <button v-if="!sessionId" @click="login">Login</button>
          <router-link to="/account" class="nav-link">{{account.username}}</router-link>
          <button v-if="sessionId" @click="logout">Logout</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["account", "sessionId", "favourites"])
  },
  data() {
    return {
      approvedToken: this.$route.query.request_token
    }
  },
  created(){
    this.$store.dispatch("getConfig");
    if(!this.sessionId) {
      this.$store.dispatch("setSessionId", this.approvedToken).then(() => {
        this.$router.push("/");
      });
    } else {
      this.$store.dispatch("getAccount")
    }
  },
  methods: {
    login() {
        this.$store.dispatch("getToken").then((token) => {
          window.location.replace(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://${location.host}`);
        });
    },
    logout() {
      this.$store.dispatch("deleteSession").then(() => {
        this.$router.push("/");
      });
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
