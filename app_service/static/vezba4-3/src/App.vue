<template>
  <div id = 'app'>
    <img src="@/assets/pancake.png">
    <nav>
      <b-nav-item v-if="!token" to ='/register'>Register</b-nav-item>
       <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
       <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
      <router-link to="/">Home</router-link> |
      <router-link to="/kategorija">Kategorije</router-link> |
      <router-link to="/narudzbina">Napravi novu narudzbinu</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState([
            'token'
        ])
    },
    methods: {
        ...mapMutations([
            'removeToken',
            'setToken'
        ]),
        logout() {
            this.removeToken();
        }
    },
    mounted() {
        if (localStorage.token) {
            this.setToken(localStorage.token);
        }
    },
    components: { RouterLink }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
