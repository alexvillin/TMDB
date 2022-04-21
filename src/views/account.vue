<template>
  <div class="container-flex well">
    <pre>{{account}}</pre>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "account-view",
  computed: {
    ...mapState(["account"])
  }

}
</script>

<style scoped>

</style>