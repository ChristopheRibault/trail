<template>
  <div>
    <header-container></header-container>
    <router-view></router-view>
  </div>
</template>

<script>
  import { HeaderContainer } from './components';

  const App = {
    components: {
      HeaderContainer,
    },
  };

  export default App;

</script>
<style>

</style>