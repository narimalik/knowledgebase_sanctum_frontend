
<template>
  <LeftMenu></LeftMenu>

  <main style="min-height: 200px;">
    <router-view></router-view>
  </main>

  <FooterComponent></FooterComponent>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <!-- <div id="preloader"></div> -->


</template>

<script>

import LeftMenu from './LeftMenu.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    LeftMenu,
    FooterComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

</style>