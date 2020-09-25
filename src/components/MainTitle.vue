<template>
  <div class="header-left">
    <h1 class="header-left__item">UTTA</h1>
    <h2 class="header-left__item">UltraTrail TransAlpin</h2>
  </div>
</template>

<script>

  export default {
    name: 'main-title',
  };
</script>

<style lang="scss">
  @import '../stylesheets/index.scss';

  .header-left {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      font-size: 2em;
      font-weight: bold;
    }

    h2 {
      font-size: 1.2em;
      font-style: italic;
    }

    &__item {
      color: white;
      margin: 0;
      padding: 2px;
    }
  }
</style>
