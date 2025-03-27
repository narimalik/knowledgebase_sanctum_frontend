<template>
<HomePage/>

</template>

<script>
import HomePage from './components/HomePage.vue'
import axios from 'axios';

// console.log(`${process.env.VUE_APP_token}`);

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_token}`;
axios.defaults.baseURL= process.env.VUE_APP_BaseUrl; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {

}
</style>

