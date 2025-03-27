<template>
    <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <!-- <img src="assets/img/my-profile-img.jpg" alt="" class="img-fluid rounded-circle"> -->
    </div>

    <a href="index.html" class="logo d-flex align-items-center justify-content-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <h1 class="sitename">KnowledgeBase</h1>
    </a>

    <div class="social-links text-center">
      <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
<!--         
        <li><a href="#hero"><i class="bi bi-filetype-php navicon"></i>PHP</a></li>
        <li><a href="#about"><i class="bi bi-database navicon"></i> MySql</a></li>
        <li><a href="#resume"><i class="bi bi-ubuntu  navicon"></i> Linux</a></li>
        <li><a href="#portfolio"><i class="bi bi-stack navicon"></i> Laravel</a></li>
        <li><a href="#services"><i class="bi bi-git navicon"></i> GIT</a></li>
        <li><a href="#services"><i class="bi bi-filetype-jsx navicon"></i> React</a></li>
        <li><a href="#services"><i class="bi bi-filetype-jsx navicon"></i> JavaScript</a></li>
        <li><a href="#services"><i class="bi bi-server navicon"></i> Redis</a></li>
        <li><a href="#portfolio"><i class="bi bi-stack navicon"></i> Concrete5</a></li>
        <li><a href="#services"><i class="bi bi-arrow-down-circle navicon"></i> Composer</a></li>

        <li><a href="#services"><i class="bi bi-file-earmark-excel navicon"></i> Excel</a></li>

        <li><a href="#services"><i class="bi bi-database navicon"></i> MySql Workbench</a></li>
        <li><a href="#services"><i class="bi bi-git navicon"></i> GIT</a></li>
        <li><a href="#services"><i class="bi bi-git navicon"></i> GIT</a></li> -->

        
        <li v-for="item in menu " :key=item><RouterLink :to="`/detail/${item.id}`"><i class="bi bi-filetype-php navicon"></i>{{ item.category_name }}</RouterLink></li>




        <li class="dropdown"><a href="#"><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact"><i class="bi bi-envelope navicon"></i> Contact</a></li>

        
        <RouterLink to="/about">About</RouterLink>
      </ul>
    </nav>

  </header>
</template>

<script>
import axios from 'axios';

export default {
    name:"LeftMenu",
    

    data(){
        return {
            menu:{}
            
        }
    },
    components:{},

    async mounted(){
      
        
         //console.log(axios.defaults.baseURL);
        await axios.get('/categories')
        .then(res => {          
            this.menu=res.data.data
        } )
      
    },
}
</script>

<style scoped></style>