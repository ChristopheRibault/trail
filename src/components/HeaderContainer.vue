<template>
  <div class="header-container">
    <main-title/>
    <navbar/>
    <date-trail/>
  </div>
</template>

<script>
import MainTitle from './MainTitle.vue';
import Navbar from './Navbar.vue';
import DateTrail from './DateTrail.vue';

  export default {
    name: "header-container",
    components: { 
      MainTitle,
      Navbar,
      DateTrail,
    },
  };

</script>

<style lang = "scss">
  @import '../stylesheets';

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin: 0;
    padding: 0;
    min-height: 90px;

    background-color: $main-color;
  }
</style>
