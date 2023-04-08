<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar: NavBar
  }
}
</script>

<template>
  <div class="container-fluid">
    <NavBar />
    <router-view/>
  </div>
</template>


