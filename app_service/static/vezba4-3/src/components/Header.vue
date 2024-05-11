<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
  font-family: 'Gloock', serif;
  text-align: center;
}
</style>
