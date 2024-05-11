<template>
  <div id="app">
    <Header title="Log In"/>
    <b-form @submit="onSubmit">
      <b-form-group label="User Name:" label-for="username">
        <b-form-input id="username" v-model="form.username" 
placeholder="Enter name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" 
type="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Login',
    components: {
      Header
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onSubmit() {
      console.log('Form Data:', this.form);
      try {
        await this.login(this.form);
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
  }
</script>
<style scoped>
</style>
