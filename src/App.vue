<template>
  <div id="app">
    <main-header></main-header>
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './containers/header/header.vue'
import MainFooter from './containers/footer/footer.vue'
export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
<style lang="css">
  @import "assets/styles/common.css";
</style>

