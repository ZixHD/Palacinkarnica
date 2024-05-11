<template>
  <div id="app" class="d-flex flex-column align-items-center justify-content-center">
    <MainHeader :title="headerTitle" />
    <div>
      <button @click="prev">Prethodno</button>
      <button @click="next">Sledece</button>
    </div>
    <PalacinkeList v-if="sviPalacinkaIDs" :palacinkeIDs="sviPalacinkaIDs.slice(current * 10, current * 10 + 10)" />
    <p v-else>Lista jos nije spremna</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MainHeader from '@/components/Header.vue'
import PalacinkeList from '@/components/PalacinkeList.vue'

export default {
  name: 'HomeView',
  components: {
    MainHeader,
    PalacinkeList,
  },
  data() {
    return {
      headerTitle: 'Palacinkarnica',
      current: 0
    }
  },
  computed: {
    ...mapState(['sviPalacinkaIDs']),
  },
  methods: {
    ...mapActions(['fetchSviPalacinke']),
    next() {
      if (this.current * 10 < this.sviPalacinkaIDs.length) {
        this.current++
      }
    },
    prev() {
      if (this.current > 0) {
        this.current--
      }
    },
  },
  mounted() {
    this.fetchSviPalacinke()
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
