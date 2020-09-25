<template>
  <router-link class="navbar__btn" tag="button" :to="page.to">{{ page.title }}</router-link>
</template>

<script>
  

  export default {
    name: 'navbar-btn',
    props: [
      'page',
    ]
  };
</script>

<style lang="scss">
  @import '../stylesheets';

  .navbar {
    &__btn {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;

      color: white;
      background: none;
      border: none;

      cursor: pointer;

      padding: 0.3em;
      height: 100%;

      flex: 1;

      &:hover {
        background: $buttons-color;
      }
    }
  }

  .router-link-exact-active {
    background-color: $buttons-color;
  }


</style>
