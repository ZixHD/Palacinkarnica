<template>
  <div>
    <PalacinkaSingle v-for="palacinka in palacinke" :key="palacinka.id" :palacinka="palacinka" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PalacinkaSingle from '@/components/PalacinkaSingle.vue';

export default {
  name: 'PalacinkeList',
  components: {
    PalacinkaSingle,
  },
  data() {
    return {
      palacinke: [],
    };
  },
  props: {
    palacinkeIDs: Array,
    obj: Object,
  },
  methods: {
    ...mapActions([
      'getPalacinka',

    ]),
      fetchPalacinke() {
        this.palacinkeIDs.forEach(obj => {
          this.getPalacinka(obj.id)
            .then(palacinka => this.palacinke.push(palacinka));
        })
      },
    
  },
  computed: {

  },
   mounted() {
    this.fetchPalacinke();
  },
  watch: {
    palacinkeIDs(newVal) {
      this.palacinke = []
      this.fetchPalacinke()
    }
  }
}
</script>

<style>
/* Remove "scoped" attribute to limit CSS to this component only */
.header {
  font-family: 'Gloock', serif;
  text-align: center;
}
</style>