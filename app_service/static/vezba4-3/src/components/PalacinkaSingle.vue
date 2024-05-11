<template>
  <div class="palacinka" @click="kliknutaPalacinka(palacinka.id)">
    <img v-if="palacinka.slika" :src="'http://alumni.raf.edu.rs/images/slike/' + palacinka.slika" />
    <p v-else>Nema slike</p>
    <h3>{{ palacinka.naziv }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PalacinkaSingle',
  props: {
    palacinka: Object
  },
  methods: {
    kliknutaPalacinka(id) {
      this.$router.push({ name: 'palacinka', params: { id: id } });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    font-family: 'Gloock',serif;
    text-align: center;
}

.palacinka{
    width: 150px;
    display: inline-block;
    margin: 10px;
    vertical-align: top;
}
.palacinka img{
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.palacinka p{
    height: 150px;
    margin: 0;
    background-color: silver;
    text-align: center;
}
</style>
