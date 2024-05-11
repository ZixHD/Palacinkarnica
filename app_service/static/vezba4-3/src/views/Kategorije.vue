<template>
  <div>
    <Header title="Kategorije nasih palacinki" />
    <b-pagination v-model="currentPage" :total-rows="this.kategorije.length" :per-page="perPage"
      aria-controls="tabelaKategorije"></b-pagination>
    <b-table striped hover :items="kategorije" :fields="fields" :per-page="perPage" :current-page="currentPage"
      id="tabelaKategorije" class="table text-center" 
      >
      <template #cell(logo)="data">
        <img v-if="data.value" :src="`${data.value} `" />
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "Kategorije",
  components: {
    Header,
  },
  data() {
    return {
      perPage: 4,
      currentPage: 1,
      fields: ["id", "naziv"],
    };
  },
  fields: [
    {
      key: "naziv",
      sortable: true,
      label: "Kategorija",
    },
    {
      key: "id",
      label: "",
      formatter: (value) => {
        if (value) return "http://alumni.raf.edu.rs/images/kompanije/" + value;
        else return null;
      },
    },
  ],
  mounted() {
    this.fetchKategorije();
  },
  computed: {
    ...mapState(["kategorije"]),
  },
  methods: {
    ...mapActions(["fetchKategorije"]),
  },
};
</script>

<style>
.table {
  text-align: center;
}
</style>
