<template>
  <div>
    <div v-if="palacinka && palacinka.slika">
      <img :src="'http://alumni.raf.edu.rs/images/slike/' + palacinka.slika" />
    </div>
    <div v-else>
      <p>Nema slike</p>
    </div>

    <div class="info">
      <h3>Kategorije</h3>
      <div v-if="palacinka && palacinka.kategorija_id">
        {{ palacinka.kategorija_id }}
      </div>

      <h3>Opis</h3>
      <div v-if="palacinka && palacinka.opis">
        {{ palacinka.opis }}
      </div>
      <h3>Cena</h3>
        <div v-if="palacinka && palacinka.cena">
          {{ palacinka.cena }}
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  naziv: 'Palacinka',
  components: {
    Header
  },
  data() {
    return {
      palacinka: null
    }
  },
  mounted() {
    this.getPalacinka(this.$route.params.id)
      .then(res => {
        this.palacinka = res;
    })
  },
  methods: {
    ...mapActions([
      'getPalacinka'
    ])
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


    .slika{
        float:left; margin-right:20px; margin-bottom:20px;
        width:200px;
    }
    .pal{
        text-align:left;
    }
    .info{
        overflow:auto;
    }
</style>
